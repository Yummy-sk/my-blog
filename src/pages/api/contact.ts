import { NextApiRequest, NextApiResponse } from 'next';
import MailService from '@/service/MailService';
import { IInputState } from '@/types/contact';

async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  const mailService = new MailService();

  if (req.method !== 'POST')
    return res.status(400).json({ message: 'Bad Request' });

  const { name, email, message, subject } = req.body as IInputState;

  try {
    const mailConfig = mailService.getConfig();
    const option = mailService.mailOptions;
    const mailContent = mailService.getMailView({
      fields: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
      },
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    await mailConfig.sendMail({
      ...option,
      ...mailContent,
    });

    return res.status(200).json({ message: 'Success' });
  } catch (e) {
    return res.status(400).json({ message: 'Bad Request' });
  }
}

export default apiHandler;
