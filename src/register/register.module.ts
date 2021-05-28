import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "src/user/user.entity";
import { UserRepository } from "src/user/user.repository";
import { RegisterController } from "./register.controller";

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity, UserRepository])],
	controllers: [RegisterController],
})
/** everything related to blog posts/articles */
export class RegisterModule { }