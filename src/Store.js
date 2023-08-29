import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/auth/authSlice'
import signUpReducer from './features/auth/signUpAuthSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signUp: signUpReducer,
  },
});
