import { Client } from '@notionhq/client';
import {
  PageObjectResponse,
  TextRichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { NotionToMarkdown } from 'notion-to-md';
import { ParseFormat } from '@/util';

class NotionService {
  private notion: Client;

  private notionToMarkdown: NotionToMarkdown;

  private DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID || '';

  private parseFormat;

  constructor() {
    this.notion = new Client({
      auth: process.env.NEXT_PUBLIC_NOTION_SECRIT_KEY,
    });
    this.notionToMarkdown = new NotionToMarkdown({
      notionClient: this.notion,
    });
    this.parseFormat = new ParseFormat();
  }

  async getPosts(targetTag = '', targetTitle = '') {
    try {
      // 배포 되었고, 태그가 포함 되어 있고, 제목에 검색어가 포함 되어 있는 포스트를 가져온다.
      const response = await this.notion.databases.query({
        database_id: this.DATABASE_ID,
        filter: {
          and: [
            {
              property: 'published',
              checkbox: {
                equals: true,
              },
            },
            {
              property: 'tags',
              multi_select: {
                contains: targetTag,
              },
            },
            {
              property: 'title',
              rich_text: {
                contains: targetTitle,
              },
            },
          ],
        },
      });

      console.log(
        response.results.map(page => {
          const {
            id,
            created_time: createdTime,
            properties: { title, tags, description, read_time: readTime },
          } = page as PageObjectResponse;

          console.log(
            'title',
            this.parseFormat.getTitle(
              title as unknown as TextRichTextItemResponse,
            ),
          );
          console.log('tags', tags);
          console.log('description', description);
          console.log('readTime', readTime);

          return {
            id,
            createdTime,
          };
        }),
      );

      return response;
    } catch (error) {
      console.error(error);

      return [];
    }
  }
}

export default NotionService;
