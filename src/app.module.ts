import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './article/article.module';
import { ArticleEntity } from './article/article.entity';
import { HomeModule } from './home/home.module';
import { UserEntity } from './user/user.entity';
import { SessionEntity } from './session/session.entity';
import { RegisterModule } from './register/register.module';

/** setup database */
let databaseSettings = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'jaroslawweber_old',
  password: '',
  database: 'blog',
  entities: [ArticleEntity, UserEntity, SessionEntity],
  synchronize: true,
});

@Module({
  imports: [databaseSettings, ArticleModule, HomeModule, RegisterModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
