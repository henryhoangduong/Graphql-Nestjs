import { Module } from '@nestjs/common';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
@Module({
  providers: [PostsResolver, PostsService],
  imports: [TypeOrmModule.forFeature([Post])],
})
export class PostsModule {}
