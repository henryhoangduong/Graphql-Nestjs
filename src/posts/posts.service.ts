import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Author } from 'src/authors/entities/author.entity';
import { AuthorsService } from 'src/authors/authors.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private authorService: AuthorsService,
  ) {}
  async findAll(): Promise<Post[]> {
    const posts = await this.postRepository.find();
    console.log(posts);
    return posts;
  }
  async findProductById(id: number) {
    return this.postRepository.findOne({
      where: {
        id,
      },
    });
  }
  async createPost(post: CreatePostInput): Promise<Post> {
    const newPost = this.postRepository.create(post);
    return this.postRepository.save(newPost);
  }

  async getAuthor(userId: number): Promise<Author> {
    return this.authorService.findOne(userId);
  }
}
