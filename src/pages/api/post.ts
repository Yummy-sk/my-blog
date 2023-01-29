import { NextApiRequest, NextApiResponse } from 'next';
import { NotionService } from '@/service';

type BodyType = Record<string, string>;

interface IResponse extends Omit<NextApiRequest, 'body'> {
  body: string;
}

async function apiHandler(req: IResponse, res: NextApiResponse) {
  // NOTE: POST 요청이 아니라면, 4000을 반환합니다.
  if (req.method !== 'POST' || !req.body)
    return res.status(400).json({ message: 'Bad Request' });

  try {
    const body = JSON.parse(req.body) as BodyType;
    const notionService = new NotionService();

    const response = await notionService.getPosts({
      targetTitle: body.search || '',
      targetTag: body.tag || '',
    });

    return res.status(200).json(response);
  } catch (e) {
    return res.status(400).json({ message: 'Bad Request' });
  }
}

export default apiHandler;
