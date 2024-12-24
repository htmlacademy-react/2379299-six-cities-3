import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { AuthorizationStatus } from '../components/const';

export const changeCurrentCity = createAction<{currentCity:string}>('cities/currentCity');
export const changeCurrentOffers = createAction('cities/currentOffers');
export const loadOffers = createAction<Offers>('cities/loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
