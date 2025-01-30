import { createReducer } from '@reduxjs/toolkit';
import { addReview, changeCurrentCity, changeOffer, clearFavirites, getUserData, loadFavoriteOffers, loadNearbyOffers, loadOffer, loadOffers, loadReviews, requireAuthorization, resetFavorites, setError, setFavoriteOffersLoadingStatus, setFavoriteOffersSaveStatus, setNearbyOfferDataLoadingStatus, setOfferDataLoadingStatus, setOffersDataLoadingStatus, setReviewsDataLoadingStatus } from './action';
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
  reviewSuccess: boolean;
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
  reviewSuccess: false,
  favoriteOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  isOfferDataLoading: true,
  isNearbyOfferDataLoading: true,
  isFavoriteOffersLoading: true,
  isFavoriteOffersSave: true,
  isReviewsDataLoading: false,
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
      state.reviewSuccess = true;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(clearFavirites, (state) => {
      state.favoriteOffers = [];
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      const favoriteOffers = action.payload;

      state.offers = state.offers.map((offer) => ({
        ...offer,
        isFavorite: favoriteOffers.some((favorite) => favorite.id === offer.id),
      }));

      if (state.offer) {
        state.offer = {
          ...state.offer,
          isFavorite: favoriteOffers.some((favorite) => favorite.id === state.offer?.id),
        };
      }

      state.nearbyOffers = state.nearbyOffers.map((offer) => ({
        ...offer,
        isFavorite: favoriteOffers.some((favorite) => favorite.id === offer.id),
      }));

      state.favoriteOffers = favoriteOffers;
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

    .addCase(resetFavorites, (state) => {
      state.offers = state.offers.map((offer) => ({
        ...offer,
        isFavorite: false,
      }));

      if (state.offer) {
        state.offer = {
          ...state.offer,
          isFavorite: false,
        };
      }

      state.nearbyOffers = state.nearbyOffers.map((offer) => ({
        ...offer,
        isFavorite: false,
      }));

      state.favoriteOffers = [];
    })
    .addCase(setReviewsDataLoadingStatus, (state, action) => {
      state.isReviewsDataLoading = action.payload;
    });
});


export {reducer};
