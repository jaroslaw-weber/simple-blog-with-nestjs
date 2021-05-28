
import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "./user.entity";

/** db operations */
@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
	/** add User to db */
	addUser = async (data: UserEntity) => {
		//todo: dont add user if there is already user with same username
		return await this.save(data);
	};
	getUser = async (id: number) => {
		return await this.findOne(id);
	}
}