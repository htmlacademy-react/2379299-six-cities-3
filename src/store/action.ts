import { createAction } from '@reduxjs/toolkit';

export const changeCurrentCity = createAction<{currentCity:string}>('cities/currentCity');
export const changeCurrentOffers = createAction('cities/currentOffers');

