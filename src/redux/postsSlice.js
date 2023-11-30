import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './operations';

const DataSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], isLoading: false, error: null },
  extraReducers: {
    [fetchData.pending](state) {
      state.isLoading = true;
    },
    [fetchData.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchData.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.posts = action.payload;
    },
  },
});

export const postsReducer = DataSlice.reducer;
