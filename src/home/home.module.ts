import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleEntity } from "src/article/article.entity";
import { ArticleRepository } from "src/article/article.repository";
import { HomeController } from "./home.controller";

@Module({
	imports: [TypeOrmModule.forFeature([ArticleEntity, ArticleRepository])],
	controllers: [HomeController],
})
export class HomeModule { }