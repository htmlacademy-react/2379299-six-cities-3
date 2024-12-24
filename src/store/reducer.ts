import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentCity, loadOffers, requireAuthorization } from './action';
// import { offers } from '../ mocks/offers';
import { AuthorizationStatus } from '../components/const';
import { Offers } from '../types/offer';


type InitialState = {
  currentCity: string;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  currentCity: 'Paris',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity,(state, action) => {
      const{currentCity} = action.payload;
      state.currentCity = currentCity;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
