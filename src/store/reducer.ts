import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentCity, loadOffer, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
// import { offers } from '../ mocks/offers';
import { AuthorizationStatus } from '../components/const';
import { Offer, Offers } from '../types/offer';


type InitialState = {
  currentCity: string;
  offers: Offers;
  offer: Offer| null;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
};

const initialState: InitialState = {
  currentCity: 'Paris',
  offers: [],
  offer: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false
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
    });

});


export {reducer};
