'use server'

import supabase from '@/supabase';

export const get = async () => { 
  const { data, error } = await supabase.get.rpc('get_tags');

  if (error) { 
    throw new Error(error.message)
  }

  return data
}

