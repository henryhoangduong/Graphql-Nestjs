import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Query } from '@nestjs/graphql';
import { Post } from './post.entity';
import { CreatePostInput } from './dto/create-post.input';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query((returns) => [Post])
  post() {
    return this.postsService.findAll();
  }
  @Query((returns) => Post)
  findPost(@Args('id') id: number) {
    return this.postsService.findProductById(id);
  }
  @Mutation((returns) => Post)
  createPost(@Args('posts') post: CreatePostInput) {
    return this.postsService.createPost(post);
  }
}
