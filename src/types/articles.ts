import { Database } from '@/types/supabase';


type Articles = Database["public"]["Functions"]["get_articles"]["Returns"]
type Article = Articles[number]

export type { Articles, Article }
