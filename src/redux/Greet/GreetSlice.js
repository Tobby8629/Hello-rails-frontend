import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const greetapi = createAsyncThunk('greet/greetapi', async () => {
  const res = await fetch('http://127.0.0.1:3000/api/v1/greetings');
  const data = res.json();
  return data;
});

const initialState = {
  greeting: [],
};

const greet = createSlice({
  name: 'greet',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(greetapi.fulfilled, (state, action) => {
      state.greeting = action.payload;
    });
  },
});

export default greet.reducer;
