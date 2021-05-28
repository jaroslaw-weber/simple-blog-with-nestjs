import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

/** article/blog post */
@Entity("article")
export class ArticleEntity {
	@PrimaryGeneratedColumn()
	id: number
	@Column()
	author: string
	@Column()
	title: string
	@Column()
	body: string
}