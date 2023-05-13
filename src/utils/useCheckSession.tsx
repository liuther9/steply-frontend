import { useRouter } from 'next/navigation'
import { useSupabase } from './supabase-provider'

export const useCheckSession = async () => {
	const { supabase } = useSupabase()
	const router = useRouter()

	const { data } = await supabase.auth.getSession()

	data && router.push('/cabinet')
}
