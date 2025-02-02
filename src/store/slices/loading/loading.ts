import { createSlice } from '@reduxjs/toolkit';
import { requireAuthorization, setError, setFavoriteOffersLoadingStatus, setFavoriteOffersSaveStatus, setNearbyOfferDataLoadingStatus, setOfferDataLoadingStatus, setOffersDataLoadingStatus, setReviewsDataLoadingStatus } from '../../action';
import { AuthorizationStatus } from '../../../components/const';

const loadingInitialState: {
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  isNearbyOfferDataLoading: boolean;
  isFavoriteOffersLoading : boolean;
  isFavoriteOffersSave: boolean;
  isReviewsDataLoading: boolean;
} = {
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  isOfferDataLoading: true,
  isNearbyOfferDataLoading: true,
  isFavoriteOffersLoading: true,
  isFavoriteOffersSave: true,
  isReviewsDataLoading: false,
};

export const loadingReducer = createSlice({
  name: 'loadingReducer',
  initialState: loadingInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(requireAuthorization, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      })
      .addCase(setOffersDataLoadingStatus, (state, action) => {
        state.isOffersDataLoading = action.payload;
      })
      .addCase(setOfferDataLoadingStatus, (state, action) => {
        state.isOfferDataLoading = action.payload;
      })
      .addCase(setFavoriteOffersLoadingStatus, (state, action) => {
        state.isFavoriteOffersLoading = action.payload;
      })
      .addCase(setFavoriteOffersSaveStatus, (state, action) => {
        state.isFavoriteOffersSave = action.payload;
      })
      .addCase(setNearbyOfferDataLoadingStatus, (state, action) => {
        state.isNearbyOfferDataLoading = action.payload;
      })
      .addCase(setReviewsDataLoadingStatus, (state, action) => {
        state.isReviewsDataLoading = action.payload;
      });
  },
});
