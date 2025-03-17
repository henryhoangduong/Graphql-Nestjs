import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Post } from 'src/posts/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ nullable: false })
  @Field()
  name: string;

  @Field(() => [Post], { nullable: true })
  @OneToMany(() => Post, (posts) => posts.author)
  posts: Post[];
}
