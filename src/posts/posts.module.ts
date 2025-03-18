import { Module } from '@nestjs/common';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { AuthorsModule } from 'src/authors/authors.module';
@Module({
  providers: [PostsResolver, PostsService],
  imports: [TypeOrmModule.forFeature([Post]), AuthorsModule],
  exports: [PostsService],
})
export class PostsModule {}
