import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from '../Layout/AppLayout'
import {
  List as CategoryList,
  Create as CreateCategory,
} from '../../features/categories/index'
import {
  List as ProductList,
  Create as CreateProduct,
} from '../../features/products/index'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout content={<Deneme />} />} />
        <Route
          path='/category/index'
          element={<AppLayout content={<CategoryList />} />}
        />
        <Route
          path='/product/index'
          element={<AppLayout content={<ProductList />} />}
        />
        <Route
          path='/category/create'
          element={<AppLayout content={<CreateCategory />} />}
        />
        <Route
          path='/product/create'
          element={<AppLayout content={<CreateProduct />} />}
        />
      </Routes>
    </>
  )
}

const Deneme = () => {
  return <>Deneme Sayfası</>
}

export default Router
