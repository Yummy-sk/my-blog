import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';
import { match } from 'ts-pattern';

function makeOption(value: string | undefined | null): O.Option<string> {
  return O.fromNullable(value);
}

interface Get {
  key:
    | 'SUPABASE_URL'
    | 'SUPABASE_ANON_KEY'
}

export function get({ key }: Get) {
  const value = pipe(
    match(key)
      .with('SUPABASE_URL', () => process.env.SUPABASE_URL)
      .with('SUPABASE_ANON_KEY', () => process.env.SUPABASE_ANON_KEY)
      .exhaustive(),
    makeOption
  );

  return pipe(
    value,
    O.getOrElse(() => '')
  );
}