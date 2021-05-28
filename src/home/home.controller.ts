
import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleRepository } from 'src/article/article.repository';
import { HomeResponse } from './home.response';

@Controller('')
export class HomeController {
	constructor(
		@InjectRepository(ArticleRepository) private readonly repository: ArticleRepository,
	) { }

	@Get()
	async getHome(): Promise<HomeResponse> {
		let response = new HomeResponse();
		//load up articles
		response.articles = await this.repository.getArticles(1);
		return response;
	}
}