export interface Task {
  id: number
  title: string
  description: string | null
  priority: 'low' | 'medium' | 'high'
  status: 'pending' | 'in_progress' | 'completed'
  due_date: string
  created_at: string
  updated_at: string
}

export interface Case {
  id: number
  case_number: string
  client_name: string
  case_type: string
  status: 'active' | 'closed' | 'pending'
  last_activity: string | null
  created_at: string
  updated_at: string
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}