'use server'

import supabase from '@/supabase';

interface GET {
  page?: number
  size?: number
}

export const get = async ({ page = 1, size = 10 }: GET) => { 
  const { data, error } = await supabase.get.rpc('get_articles', {
    page_number: page,
    page_size: size,
  });

  if (error) { 
    throw new Error(error.message)
  }

  return data
}

