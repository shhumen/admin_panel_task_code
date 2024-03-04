import React from 'react'
import { Descriptions } from 'antd'
import type { DescriptionsProps } from 'antd'
import { Category } from './types'

interface CategoryDetailProps {
  category: Category | null
}

const CategoryDetail: React.FC<CategoryDetailProps> = (props) => {
  const { category } = props

  const exportToCategoryItem = (
    category: Category
  ): DescriptionsProps['items'] => {
    return Object.entries(category)
      .filter(([key, value]) => key !== '_id' && key !== '__v') // gelen model içerisinden göstermek istemedğiniz alan var ise, kullanabilirsiniz.
      .map(([key, value]) => ({
        key,
        label: key.charAt(0).toUpperCase() + key.slice(1),
        children: value,
      }))
  }
  return (
    <>
      {category && (
        <Descriptions
          bordered
          column={2}
          items={exportToCategoryItem(category!)}
        />
      )}
    </>
  )
}

export default CategoryDetail
