import { configureStore } from '@reduxjs/toolkit';
import GreetSlice from './Greet/GreetSlice';

const store = configureStore({
  reducer: {
    greet: GreetSlice,
  },
});

export default store;
