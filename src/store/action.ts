import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { AuthorizationStatus } from '../components/const';
import { FullOffer } from '../types/full-offer';
import { Reviews } from '../types/reviews';

export const changeCurrentCity = createAction<{currentCity:string}>('cities/currentCity');
export const changeCurrentOffers = createAction('cities/currentOffers');
export const loadOffers = createAction<Offers>('cities/loadOffers');
export const loadOffer = createAction<FullOffer>('cities/loadOffer');
export const loadReviews = createAction<Reviews[]>('cities/loadReviews');
export const loadNearbyOffers = createAction<Offers>('cities/loadNearbyOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('game/setError');
export const setOffersDataLoadingStatus = createAction<boolean>('cities/setOffersDataLoadingStatus');
export const setOfferDataLoadingStatus = createAction<boolean>('cities/setOfferDataLoadingStatus');
export const setNearbyOfferDataLoadingStatus = createAction<boolean>('cities/setNearbyOfferDataLoadingStatus');
