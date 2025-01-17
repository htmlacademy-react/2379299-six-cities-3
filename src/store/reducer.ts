import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentCity, loadNearbyOffers, loadOffer, loadOffers, loadReviews, requireAuthorization, setError, setNearbyOfferDataLoadingStatus, setOfferDataLoadingStatus, setOffersDataLoadingStatus } from './action';
import { AuthorizationStatus } from '../components/const';
import { Offers } from '../types/offer';
import { FullOffer } from '../types/full-offer';
import { Reviews } from '../types/reviews';


type InitialState = {
  currentCity: string;
  offers: Offers;
  offer: FullOffer | null;
  reviews: Reviews[] ;
  nearbyOffers: Offers;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
  isOfferDataLoading: boolean;
  isNearbyOfferDataLoading: boolean;
};

const initialState: InitialState = {
  currentCity: 'Paris',
  offers: [],
  offer: null,
  reviews: [],
  nearbyOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  isOfferDataLoading: true,
  isNearbyOfferDataLoading: true
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
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setNearbyOfferDataLoadingStatus, (state, action) => {
      state.isNearbyOfferDataLoading = action.payload;
    });

});


export {reducer};
