import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
@InputType()
export class CreatePostInput {
  @MinLength(3)
  @MaxLength(10)
  @IsNotEmpty()
  @Field()
  title: string;
  @IsNotEmpty()
  @Field({ nullable: true })
  content: string;
}
