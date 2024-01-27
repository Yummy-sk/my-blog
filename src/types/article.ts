import { Database } from "./supabase";

type Article = Database["public"]["Functions"]["get_article"]["Returns"][number]

export type { Article }
