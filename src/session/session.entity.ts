import { UserEntity } from "src/user/user.entity";
import { Column, Entity, PrimaryColumn } from "typeorm";


/** user session
 * todo: add session validation
 */
@Entity("session")
export class SessionEntity {

	@PrimaryColumn()
	sessionId?: string

	@Column()
	userId: number

	getUser(): UserEntity {
		return new UserEntity();
	}

}