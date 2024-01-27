'use server'

import { pipe } from 'fp-ts/function';
import { findFirst } from 'fp-ts/Array'
import supabase from '@/supabase';
import { redirect } from 'next/navigation';
import { match, P } from 'ts-pattern';
import * as O from 'fp-ts/Option';
import { Article } from '@/types/article';

interface GET {
  slug: string
}

export const get = async ({ slug }: GET) => { 
  const { data, error } = await supabase.get.rpc('get_article', {
    slug_param: slug,
  });

  if (error) { 
    throw new Error(error.message)
  }

  // FIXME: 타입 변경 필요..
  const filtered = match(data)
    .with(P.nullish, () => O.none)
    .with([], () => O.none)
    .otherwise((data) => findFirst((article: Article) => article.slug === slug)(data))
  
  return pipe(
    filtered,
    O.match(
      () => redirect('/404'),
      (article) => article
    )
  )
}

