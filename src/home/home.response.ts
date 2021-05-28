import { ArticleEntity } from "src/article/article.entity"

/** response for home page */
export class HomeResponse {
	/** articles/blog posts to show on home page */
	articles?: Array<ArticleEntity>
}