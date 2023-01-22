import { Client } from '@notionhq/client';
import {
  PageObjectResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints';
import { NotionToMarkdown } from 'notion-to-md';
import { parseData } from '@/util';
import { PostListTypes } from '@/types/data';

class NotionService {
  private notion: Client;

  private notionToMarkdown: NotionToMarkdown;

  private DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID || '';

  constructor() {
    this.notion = new Client({
      auth: process.env.NEXT_PUBLIC_NOTION_SECRIT_KEY,
    });
    this.notionToMarkdown = new NotionToMarkdown({
      notionClient: this.notion,
    });
  }

  async notionQuery({
    filter,
    sorts,
  }: Pick<QueryDatabaseParameters, 'filter' | 'sorts'>): Promise<
    Array<PageObjectResponse>
  > {
    const response = await this.notion.databases.query({
      database_id: this.DATABASE_ID,
      filter,
      sorts,
    });

    return response.results as Array<PageObjectResponse>;
  }

  // Note: notion API를 통해 데이터베이스에 있는 모든 데이터를 가져옵니다.
  async getPosts(
    targetTag = '',
    targetTitle = '',
  ): Promise<Array<PostListTypes> | null> {
    try {
      const results = await this.notionQuery({
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
        sorts: [
          {
            property: 'created_time',
            direction: 'descending',
          },
        ],
      });

      return results.map(result => {
        const { id, properties } = result;

        return {
          id,
          ...parseData({ properties }),
        };
      });
    } catch (error) {
      console.error(error);

      return null;
    }
  }

  // Note: getStaticPath를 위해 전체 포스트 id를 가져옵니다.
  async getPostId() {
    try {
      const results = await this.notionQuery({
        filter: {
          and: [
            {
              property: 'published',
              checkbox: {
                equals: true,
              },
            },
          ],
        },
        sorts: [
          {
            property: 'created_time',
            direction: 'descending',
          },
        ],
      });

      return results.map(result => result.id);
    } catch (error) {
      console.error(error);

      return null;
    }
  }

  // Note: notion 페에지 콘텐츠를 string으로 파싱하여 반환합니다.
  async getPostDetail(id: string) {
    try {
      const result = await this.notionToMarkdown.pageToMarkdown(id);
      const contents = this.notionToMarkdown.toMarkdownString(result);

      return contents;
    } catch (error) {
      console.error(error);

      return null;
    }
  }
}

export default NotionService;
