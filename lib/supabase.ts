import { createClient } from '@supabase/supabase-js'

// 请在你的部署平台上设置以下环境变量：
// NEXT_PUBLIC_SUPABASE_URL=https://wzifzeqdolpriukllvst.supabase.co
// NEXT_PUBLIC_SUPABASE_ANON_KEY=你的anon_key

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// 检查配置状态
export const isSupabaseConfigured = !!supabaseUrl && !!supabaseKey && !supabaseUrl.includes('placeholder')

if (!isSupabaseConfigured) {
  console.warn('Supabase credentials not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.')
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseKey || 'placeholder',
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    }
  }
)

// Works 表类型定义
export interface Work {
  id: string
  title: string
  category: string
  description: string
  fullDescription?: string
  image: string
  gallery: string[]
  services: string[]
  year: string
  client: string
  link: string
  created_at?: string
}

// 获取所有作品
export async function getWorks(): Promise<{ data: Work[]; error: string | null }> {
  if (!isSupabaseConfigured) {
    return { data: [], error: 'Supabase not configured. Please check environment variables.' }
  }

  const { data, error } = await supabase
    .from('axddesignlabworks')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching works:', error)
    return { data: [], error: error.message }
  }

  return { data: data || [], error: null }
}

// 获取单个作品
export async function getWork(id: string): Promise<{ data: Work | null; error: string | null }> {
  if (!isSupabaseConfigured) {
    return { data: null, error: 'Supabase not configured. Please check environment variables.' }
  }

  const { data, error } = await supabase
    .from('axddesignlabworks')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching work:', error)
    return { data: null, error: error.message }
  }

  return { data, error: null }
}

// 创建作品
export async function createWork(work: Omit<Work, 'created_at'>): Promise<{ data: Work | null; error: string | null }> {
  if (!isSupabaseConfigured) {
    return { data: null, error: 'Supabase not configured. Please check environment variables.' }
  }

  const { data, error } = await supabase
    .from('axddesignlabworks')
    .insert([work])
    .select()
    .single()

  if (error) {
    console.error('Error creating work:', error)
    return { data: null, error: error.message }
  }

  return { data, error: null }
}

// 更新作品
export async function updateWork(id: string, work: Partial<Work>): Promise<{ data: Work | null; error: string | null }> {
  if (!isSupabaseConfigured) {
    return { data: null, error: 'Supabase not configured. Please check environment variables.' }
  }

  const { data, error } = await supabase
    .from('axddesignlabworks')
    .update(work)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating work:', error)
    return { data: null, error: error.message }
  }

  return { data, error: null }
}

// 删除作品
export async function deleteWork(id: string): Promise<{ success: boolean; error: string | null }> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Supabase not configured. Please check environment variables.' }
  }

  const { error } = await supabase
    .from('axddesignlabworks')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting work:', error)
    return { success: false, error: error.message }
  }

  return { success: true, error: null }
}
