'use server';

import supabase from '@/supabase';
import { match, P } from 'ts-pattern';

export const get = async () => {
  const { data, error } = await supabase.get.rpc('aggrigate_article');

  if (error) {
    throw new Error(error.message);
  }

  return match(data)
    .with(P.nullish, () => new Error('data is nullish'))
    .with(P.number, (count) => count)
    .exhaustive();
};
