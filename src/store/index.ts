import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { offersReducer } from './slices/offers/offers';
import { userReducer } from './slices/user/user';
import { loadingReducer } from './slices/loading/loading';
import { cityReducer } from './slices/city/city';
import { createAPI } from '../services/api';


const rootReducer = combineReducers({
  offers: offersReducer.reducer,
  user: userReducer.reducer,
  city: cityReducer.reducer,
  loading: loadingReducer.reducer,
});


export const api = createAPI();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
