/** password hash */
export class HashedPassword {
	hash: string
}

/** hashing/encrypting library */
const bcrypt = require('bcrypt');

/** hash password before storing in database */
export async function encryptPassword(plainTextPassword: string): Promise<HashedPassword> {
	const saltRounds = 10; // encryption cost
	let salt = await bcrypt.genSalt(saltRounds);
	let hash = bcrypt.hash(plainTextPassword, salt);

	let result = new HashedPassword();
	result.hash = hash;
	return result;
}

/** check if password is correct */
export async function checkPassword(plainTextPassword: string, hash: string): Promise<Boolean> {
	let result: Boolean = await bcrypt.compare(plainTextPassword, hash);
	return result;
}