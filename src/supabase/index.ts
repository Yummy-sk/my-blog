import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';
import * as Env from '@/utils/env';

class SupabaseClient {
  private supabaseClient;

  constructor() {
    const supabaseUrl = Env.get({ key: 'SUPABASE_URL' });
    const supabaseKey = Env.get({ key: 'SUPABASE_ANON_KEY' });
    this.supabaseClient = createClient<Database>(supabaseUrl, supabaseKey);
  }

  get get() {
    return this.supabaseClient;
  }
}

export default new SupabaseClient();
