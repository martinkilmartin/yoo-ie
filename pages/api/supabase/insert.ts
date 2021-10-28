import { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

const OPTIONS = {}
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const SUPABASE_SECRET_KEY = process.env.NEXT_PUBLIC_SUPABASE_SECRET_KEY || ''

const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY, OPTIONS)

const Insert = async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  const ip = _req.headers['x-real-ip']
  const { message = '', email = '' } = _req.query
  const { data, error } = await supabase.from('messages').insert([
    {
      created_at: Date.now(),
      ip: ip,
      email: email,
      message: message,
    },
  ])
  res.status(200).json(data || error)
}

export default Insert
