import { createClient } from '@supabase/supabase-js'

// 请在你的部署平台上设置以下环境变量：
// NEXT_PUBLIC_SUPABASE_URL=https://wzifzeqdolpriukllvst.supabase.co
// NEXT_PUBLIC_SUPABASE_ANON_KEY=你的anon_key

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.')
}

export const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseKey || 'placeholder')

// Works 表类型定义
export interface Work {
  id: string
  title: string
  category: string
  description: string
  fullDescription: string
  image: string
  gallery: string[]
  services: string[]
  year: string
  client: string
  link: string
  created_at?: string
}

// 获取所有作品
export async function getWorks(): Promise<Work[]> {
  const { data, error } = await supabase
    .from('works')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching works:', error)
    return []
  }

  return data || []
}

// 获取单个作品
export async function getWork(id: string): Promise<Work | null> {
  const { data, error } = await supabase
    .from('works')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching work:', error)
    return null
  }

  return data
}

// 创建作品
export async function createWork(work: Omit<Work, 'created_at'>): Promise<Work | null> {
  const { data, error } = await supabase
    .from('works')
    .insert([work])
    .select()
    .single()

  if (error) {
    console.error('Error creating work:', error)
    return null
  }

  return data
}

// 更新作品
export async function updateWork(id: string, work: Partial<Work>): Promise<Work | null> {
  const { data, error } = await supabase
    .from('works')
    .update(work)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating work:', error)
    return null
  }

  return data
}

// 删除作品
export async function deleteWork(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('works')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting work:', error)
    return false
  }

  return true
}
