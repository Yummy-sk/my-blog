'use server';

import supabase from '@/supabase';

interface GET {
  page?: number
  size?: number
  tag?: string
}

export const get = async ({ page = 1, size = 10, tag }: GET) => {
  const { data, error } = await supabase.get.rpc('get_articles', {
    page_number: page,
    page_size: size,
    tag_text: tag,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
