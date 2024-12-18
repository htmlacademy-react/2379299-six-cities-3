import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentCity } from './action';
import { offers } from '../ mocks/offers';

const initialState = {
  currentCity: 'Paris',
  offers: offers
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity,(state, action) => {
      const{currentCity} = action.payload;
      state.currentCity = currentCity;
    });
});

// почему здесь импорт в конце, а везде сразу
export {reducer};
