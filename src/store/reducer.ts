import { createReducer } from '@reduxjs/toolkit';
import { addReview, changeCurrentCity, changeOffer, getUserData, loadFavoriteOffers, loadNearbyOffers, loadOffer, loadOffers, loadReviews, requireAuthorization, setError, setFavoriteOffersLoadingStatus, setFavoriteOffersSaveStatus, setNearbyOfferDataLoadingStatus, setOfferDataLoadingStatus, setOffersDataLoadingStatus, setReviewsDataLoadingStatus } from './action';
import { AuthorizationStatus } from '../components/const';
import { Offers } from '../types/offer';
import { FullOffer } from '../types/full-offer';
import { Reviews } from '../types/reviews';
import { UserData } from '../types/user-data';


type InitialState = {
  currentCity: string;
  offers: Offers;
  offer: FullOffer | null;
  reviews: Reviews[] ;
  nearbyOffers: Offers;
  favoriteOffers:Offers;
  userData : UserData | null;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  isNearbyOfferDataLoading: boolean;
  isFavoriteOffersLoading : boolean;
  isFavoriteOffersSave: boolean;
  isReviewsDataLoading: boolean;
};

const initialState: InitialState = {
  currentCity: 'Paris',
  offers: [],
  offer: null,
  userData: null,
  reviews: [],
  nearbyOffers: [],
  favoriteOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  isOfferDataLoading: true,
  isNearbyOfferDataLoading: true,
  isFavoriteOffersLoading: true,
  isFavoriteOffersSave: true,
  isReviewsDataLoading: true,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffer,(state, action) => {
      state.offer = action.payload;
    })
    .addCase(changeCurrentCity,(state, action) => {
      const{currentCity} = action.payload;
      state.currentCity = currentCity;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(getUserData, (state, {payload}) => {
      state.userData = payload;
    })
    .addCase(changeOffer, (state, {payload}) => {
      state.offers = state.offers.map((offer) => offer.id === payload.id ?
        {...offer, isFavorite: payload.isFavorite} : offer
      );
      if (state.offer && state.offer.id === payload.id) {
        state.offer = { ...state.offer, isFavorite: payload.isFavorite };
      }
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.reviews.push(action.payload);
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
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
});


export {reducer};
