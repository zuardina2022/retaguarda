import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './reducers/categoryReducer';
import globalReducer from './reducers/globalReducer';
import orderReducer from './reducers/orderReducer';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';
import usuarioReducer from './reducers/usuarioReducer';

export const store = configureStore({
  reducer: {
    categoryReducer,
    globalReducer,
    orderReducer,
    productReducer,
    userReducer,
    usuarioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
