import { createSlice } from '@reduxjs/toolkit';
import { Offer } from '../../../types/offer';
import { FullOffer } from '../../../types/full-offer';
import {
  changeOffer,
  clearFavirites,
  loadFavoriteOffers,
  loadNearbyOffers,
  loadOffer,
  loadOffers,
  resetFavorites,
} from '../../action';

const offersInitialState: {
  offers: Offer[];
  offer: FullOffer | null;
  nearbyOffers: Offer[];
  favoriteOffers: Offer[];
} = {
  offers: [],
  offer: null,
  nearbyOffers: [],
  favoriteOffers: [],
};

export const offersReducer = createSlice({
  name: 'offersReducer',
  initialState: offersInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadOffer, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(loadOffers, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(changeOffer, (state, { payload }) => {
        state.offers = state.offers.map((offer) =>
          offer.id === payload.id
            ? { ...offer, isFavorite: payload.isFavorite }
            : offer
        );
        if (state.offer && state.offer.id === payload.id) {
          state.offer = { ...state.offer, isFavorite: payload.isFavorite };
        }
        if (payload.isFavorite) {
          state.favoriteOffers.push(payload);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter(
            (favOffer) => favOffer.id !== payload.id
          );
        }
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
          isFavorite: favoriteOffers.some(
            (favorite) => favorite.id === offer.id
          ),
        }));

        if (state.offer) {
          state.offer = {
            ...state.offer,
            isFavorite: favoriteOffers.some(
              (favorite) => favorite.id === state.offer?.id
            ),
          };
        }

        state.nearbyOffers = state.nearbyOffers.map((offer) => ({
          ...offer,
          isFavorite: favoriteOffers.some(
            (favorite) => favorite.id === offer.id
          ),
        }));

        state.favoriteOffers = favoriteOffers;
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
      });
  },
});
