
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SessionEntity } from 'src/session/session.entity';
import { AddArticleRequest } from './article.request.add';
import { ArticleEntity } from './article.entity';
import { ArticleRepository } from './article.repository';
import { InjectRepository } from '@nestjs/typeorm';

/** articles (blog posts) route */
@Controller('article')
export class ArticleController {
	constructor(
		@InjectRepository(ArticleRepository) private readonly repository: ArticleRepository,
	) { }

	/** get article with id */
	@Get(":id")
	async getArticle(@Body() body: Body, @Param() params): Promise<ArticleEntity> {
		let id = params.id;
		console.log("id: " + id)
		let result = await this.repository.getArticle(id);
		console.log(result);
		return result;
	}

	/** post article (save to db) */
	@Post()
	async addArticle(@Body() body: AddArticleRequest): Promise<ArticleEntity> {
		let article = new ArticleEntity();
		console.log("body: " + JSON.stringify(body))

		let session: SessionEntity = new SessionEntity();
		article.author = "username"
		article.body = body.body;
		article.title = body.title;
		let result = await this.repository.addArticle(article);
		return result;
	}
}
