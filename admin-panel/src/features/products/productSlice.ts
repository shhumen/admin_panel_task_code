import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '../../common/utils/api'
import { Product, ProductState } from '../products/types'
import { RootState } from '../../app/store'

const initialState: ProductState = {
  list: [],
  status: 'idle',
  error: null,
  selected: null,
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (product: Product) => {
    const response = await http.get('/products')
    return response.data
  }
)

export const fetchProduct = createAsyncThunk<
  Product,
  string,
  {
    rejectValue: string // red edilme durumu olursa, response içerisindeki error mesajını teslim eder.
    state: RootState // state içerisindeki diğer slicelara erişim sağlar.
  }
>('products/fetchProduct', async (id, { rejectWithValue }) => {
  try {
    const response = await http.get(`/products/${id}`)
    return response.data
  } catch (error: any) {
    return rejectWithValue(error.response.data.message)
  }
})

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id: string) => {
    const response = await http.delete(`/products/${id}`)
    return response.data
  }
)

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product: Product) => {
    const response = await http.post('/products', product)
    return response.data
  }
)

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (product: Product) => {
    const response = await http.patch(`/products/${product._id}`, product)
    return response.data
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.selected = action.payload
        state.status = 'succeeded'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.list = action.payload
        state.status = 'succeeded'
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.list.push(action.payload)
        state.status = 'succeeded'
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (product) => product._id === action.payload._id
        )
        if (index !== -1) {
          state.list[index] = action.payload
        }
        state.status = 'succeeded'
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (product: Product) => product._id !== (action.payload as any)
        )
      })
  },
})

export default productSlice.reducer
