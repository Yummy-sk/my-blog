import { TextRichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

class ParseFormat {
  getTitle(title: TextRichTextItemResponse): string {
    const { text } = title;

    return text.content;
  }

  // getMultiTags(tags: Array<SelectPropertyResponse>): Array<string> {
  //   return tags.map(tag => tag.name);
  // }
}

export default ParseFormat;
