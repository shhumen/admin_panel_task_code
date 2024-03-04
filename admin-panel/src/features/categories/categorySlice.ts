import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import http from '../../common/utils/api'
import { Category, CategoryState } from './types'
import { RootState } from '../../app/store'

const initialState: CategoryState = {
  list: [],
  status: 'idle',
  error: null,
  selected: null,
}

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await http.get('/categories')
    return response.data
  }
)
export const addCategory = createAsyncThunk(
  'categories/addCategory',
  async (category: Category) => {
    const response = await http.post('/categories', category)
    return response.data
  }
)

export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (id: string) => {
    const response = await http.delete(`/categories/${id}`)
    return response.data
  }
)

export const fetchCategory = createAsyncThunk<
  Category,
  string,
  {
    rejectValue: string // red edilme durumu olursa, response içerisindeki error mesajını teslim eder.
    state: RootState // state içerisindeki diğer slicelara erişim sağlar.
  }
>('categories/fetchCategory', async (id, { rejectWithValue }) => {
  try {
    const response = await http.get(`/categories/${id}`)
    return response.data
  } catch (error: any) {
    return rejectWithValue(error.response.data.message)
  }
})

/**
 * updateCategory
 */
export const updateCategory = createAsyncThunk(
  'categories/updateCategory',
  async (category: Category) => {
    const response = await http.patch(`/categories/${category._id}`, category)
    return response.data
  }
)

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.selected = action.payload
        state.status = 'succeeded'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.list = action.payload
        state.status = 'succeeded'
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.list.push(action.payload)
        state.status = 'succeeded'
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (category) => category._id === action.payload._id
        )
        if (index !== -1) {
          state.list[index] = action.payload
        }
        state.status = 'succeeded'
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (category: Category) => category._id !== (action.payload as any)
        )
      })
  },
})

export default categorySlice.reducer

/*
import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import http from '../../common/utils/api';
import { CategoryState } from './types';
 
const initialState: CategoryState = {
  list: [],
  status: 'idle',
  error: null,
  selected: null,
};
 
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await http.get('/categories');
    return response.data;
  }
);

export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (id: string) => {
    await http.delete(`/categories/${id}`);
    return id;
  }
);
 
const fetchCategoriesSuccess = createAction('categories/fetchCategoriesSuccess', (categories) => ({
  payload: categories,
}));

const deleteCategorySuccess = createAction('categories/deleteCategorySuccess', (id) => ({
  payload: id,
}));
 
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategoriesSuccess(state, action) {
      state.status = 'succeeded';
      state.list = action.payload;
    },
    deleteCategorySuccess(state, action) {
      state.list = state.list.filter(category => category.id !== action.payload);
    },
    
  },
  extraReducers: (builder) => {
    
  },
});
 
export const { fetchCategoriesSuccess, deleteCategorySuccess } = categorySlice.actions; 
export default categorySlice.reducer;
 
*/
