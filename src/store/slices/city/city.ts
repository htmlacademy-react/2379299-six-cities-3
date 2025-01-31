import { createSlice } from '@reduxjs/toolkit';
import { changeCurrentCity } from '../../action';


const cityInitialState: {
  currentCity: string;
} = {
  currentCity: 'Paris',
};

export const cityReducer = createSlice({
  name: 'cityReducer',
  initialState: cityInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(changeCurrentCity,(state, action) => {
        const{currentCity} = action.payload;
        state.currentCity = currentCity;
      });
  },
});
