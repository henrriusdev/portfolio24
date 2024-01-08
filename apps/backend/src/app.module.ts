import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { LinksModule } from './links/links.module';

@Module({
  imports: [PostsModule, CommentsModule, LinksModule],
})
export class AppModule {}
