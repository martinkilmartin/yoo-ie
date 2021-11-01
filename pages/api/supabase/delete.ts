import { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

const OPTIONS = {}
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const SUPABASE_PUBLIC_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_ANON_KEY || ''
// Default to 1 day
const SUPABASE_EMAIL_RETENTION =
  process.env.NEXT_PUBLIC_SUPABASE_EMAIL_RETENTION || '86400000'

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_ANON_KEY, OPTIONS)

const Delete = async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  const RETENTION = Date.now() - parseInt(SUPABASE_EMAIL_RETENTION)

  const { data, error } = await supabase
    .from('messages')
    .delete()
    .lt('created_at', RETENTION)
  res.status(200).json(data || error)
}

export default Delete
