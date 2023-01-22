import { IInputState } from '@/types/contact';

export async function sendContactForm({ data }: { data: IInputState }) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    return response;
  } catch (e) {
    throw new Error('Error while sending contact form');
  }
}
