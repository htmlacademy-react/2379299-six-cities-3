import { createAction } from '@reduxjs/toolkit';
import { Offer, Offers } from '../types/offer';
import { AuthorizationStatus } from '../components/const';
import { FullOffer } from '../types/full-offer';
import { Reviews } from '../types/reviews';
import { UserData } from '../types/user-data';

export const changeCurrentCity = createAction<{currentCity:string}>('cities/currentCity');
export const changeCurrentOffers = createAction('cities/currentOffers');
export const loadOffers = createAction<Offers>('cities/loadOffers');
export const loadOffer = createAction<FullOffer>('cities/loadOffer');
export const loadReviews = createAction<Reviews[]>('cities/loadReviews');
export const addReview = createAction<Reviews>('cities/addReview');
export const getUserData = createAction<UserData>('getUserData');
export const loadNearbyOffers = createAction<Offers>('cities/loadNearbyOffers');
export const loadFavoriteOffers = createAction<Offers>('cities/loadFavoriteOffers');
export const changeOffer = createAction<Offer>('cities/changeOffer');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('game/setError');
export const setOffersDataLoadingStatus = createAction<boolean>('cities/setOffersDataLoadingStatus');
export const setOfferDataLoadingStatus = createAction<boolean>('cities/setOfferDataLoadingStatus');
export const setNearbyOfferDataLoadingStatus = createAction<boolean>('cities/setNearbyOfferDataLoadingStatus');
export const setFavoriteOffersLoadingStatus = createAction<boolean>('cities/setFavoriteOffersLoadingStatus');
export const setFavoriteOffersSaveStatus = createAction<boolean>('cities/setFavoriteOffersSaveStatus');
export const setReviewsDataLoadingStatus = createAction<boolean>('cities/setReviewsDataLoadingStatus');
export const clearFavirites = createAction('cities/clearFavirites');
export const resetFavorites = createAction('cities/resetFavorites');
export const resetReviewSuccess = createAction('cities/resetReviewSuccess');


