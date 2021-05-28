import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleEntity } from "src/article/article.entity";
import { ArticleController } from "./article.controller";
import { ArticleRepository } from "./article.repository";

@Module({
	imports: [TypeOrmModule.forFeature([ArticleEntity, ArticleRepository])],
	controllers: [ArticleController],
})
/** everything related to blog posts/articles */
export class ArticleModule { }