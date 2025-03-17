import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '**/*.entity{.ts,.js}'],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PostsService],
})
export class AppModule {}
