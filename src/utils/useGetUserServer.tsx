// import { Database } from '@/lib/database.types'
// import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
// import { cookies, headers } from 'next/headers'

// export const useGetUserServer = async () => {
//   const supabase = createServerComponentSupabaseClient<Database>({
//     headers,
//     cookies,
//   })

//   const { data, error } = await supabase.auth.getSession()
//   return { data, error }
// }
