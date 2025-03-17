import { Author } from 'src/authors/entities/author.entity';
import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRespository: Repository<Author>,
  ) {}
  create(createAuthorInput: CreateAuthorInput) {
    const author = this.authorRespository.create(createAuthorInput);

    return this.authorRespository.save(author);
  }

  findAll(): Promise<Author[]> {
    return this.findAll();
  }

  findOne(id: number): Promise<Author> {
    return this.authorRespository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
