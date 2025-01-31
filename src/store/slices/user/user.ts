import { createSlice } from '@reduxjs/toolkit';
import { addReview, getUserData, loadReviews, resetReviewSuccess } from '../../action';
import { Reviews } from '../../../types/reviews';
import { UserData } from '../../../types/user-data';

const userInitialState: {
  reviews: Reviews[] ;
    reviewSuccess: boolean;
    userData : UserData | null;
} = {
  userData: null,
  reviews: [],
  reviewSuccess: false,

};

export const userReducer = createSlice({
  name: 'userReducer',
  initialState: userInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserData, (state, {payload}) => {
        state.userData = payload;
      })
      .addCase(loadReviews, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(addReview, (state, action) => {
        state.reviews.push(action.payload);
        state.reviewSuccess = true;
      })
      .addCase(resetReviewSuccess, (state) => {
        state.reviewSuccess = false;
      });
  },
});
