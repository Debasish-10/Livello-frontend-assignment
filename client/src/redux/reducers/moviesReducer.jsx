import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  results: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setResults } = moviesSlice.actions;

export default moviesSlice.reducer;
