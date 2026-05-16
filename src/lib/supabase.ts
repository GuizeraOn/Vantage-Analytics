import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _supabase: SupabaseClient | null = null

export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    _supabase = createClient(supabaseUrl, supabaseAnonKey)
  }
  return _supabase
}

// Backward-compat default export
export const supabase = {
  from: (...args: Parameters<SupabaseClient['from']>) => getSupabase().from(...args),
  auth: new Proxy({} as SupabaseClient['auth'], {
    get: (_target, prop) => {
      const client = getSupabase()
      return (client.auth as any)[prop]
    },
  }),
}
