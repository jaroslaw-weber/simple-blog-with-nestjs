import { ArticleEntity } from "src/article/article.entity";
import { EntityRepository, Repository } from "typeorm";

/** db operations */
@EntityRepository(ArticleEntity)
export class ArticleRepository extends Repository<ArticleEntity> {
	/** add article to db */
	addArticle = async (data: ArticleEntity) => {
		return await this.save(data);
	};
	getArticle = async (id: number) => {
		return await this.findOne(id);
	}
	getArticles = async (page: number) => {
		//todo: implement pages
		return await this.find();
	}
}