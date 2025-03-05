import { Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  post() {
    return this.postsService.findAll();
  }
}
