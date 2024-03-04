import React from 'react'

export interface Category {
  _id?: string
  categoryName: string
  description?: string
}

export interface CategoryState {
  list: Category[] | any[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  selected: Category | null
}

export interface CategoryType {
  key: string
  _id: string
  categoryName: string
  description?: string
  settings?: React.ReactNode
  // tags: string[];
}
