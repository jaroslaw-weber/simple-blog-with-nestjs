
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterRequest } from './register.request';
import { UserRepository } from 'src/user/user.repository';
import { HashedPassword, encryptPassword } from 'src/password.helper';
import { UserEntity } from 'src/user/user.entity';

@Controller('register')
export class RegisterController {
	constructor(
		@InjectRepository(UserRepository) private readonly repository: UserRepository,
	) { }


	@Post()
	async registerNewUser(@Body() body: RegisterRequest): Promise<string> {

		let encryptedPassword: HashedPassword = await encryptPassword(body.password);
		let user = new UserEntity();
		user.password = encryptedPassword.hash;
		user.username = body.username;
		//console.log(user);
		let added = await this.repository.addUser(user);
		console.log(added);
		let isSuccess = true;//todo
		return "created user"
	}
}
