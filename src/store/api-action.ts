import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { addReview, getUserData, loadFavoriteOffers, loadNearbyOffers, loadOffer, loadOffers, loadReviews, requireAuthorization, setError, setFavoriteOffersLoadingStatus, setFavoriteOffersSaveStatus, setNearbyOfferDataLoadingStatus, setOfferDataLoadingStatus, setOffersDataLoadingStatus } from './action';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../components/const';
import { Offer, Offers } from '../types/offer';

import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';
import { AuthData } from '../types/auth-data ';
import { FullOffer } from '../types/full-offer';
import { Reviews } from '../types/reviews';
import { ReviewForSubmit } from '../types/review-for-submit';
import { StatusFavorite } from '../types/status-favorite';

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'cities/loadOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'cities/loadOffer',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOfferDataLoadingStatus(true));
    try{
      const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${offerId}`);
      dispatch(loadOffer(data));
    }catch{
      dispatch(setError('Failed to load offer data'));
    } finally {
      dispatch(setOfferDataLoadingStatus(false));
    }
  },
);

export const fetchReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'cities/loadReviews',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(loadReviews(data));
  },
);
export const fetchNearbyOffers = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'cities/loadNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setNearbyOfferDataLoadingStatus(true));
    try{
      const {data} = await api.get<Offers>(`${APIRoute.Offers}/${offerId}/nearby`);
      dispatch(loadNearbyOffers(data));
    }catch{
      dispatch(setError('Failed to load nearby offer data'));
    } finally {
      dispatch(setNearbyOfferDataLoadingStatus(false));
    }
  },
);

export const fetchFavoriteOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'cities/loadFavoriteOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFavoriteOffersLoadingStatus(true));
    try{
      const {data} = await api.get<Offers>(`${APIRoute.Favorite}`);
      dispatch(loadFavoriteOffers(data));
    }catch{
      dispatch(setError('Failed to load favorite offer data'));
    } finally {
      dispatch(setFavoriteOffersLoadingStatus(false));
    }
  },
);

export const saveFavoriteOffers = createAsyncThunk<void, StatusFavorite , {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/saveFavorite',
  async ({offerId, status}, { dispatch, extra: api}) => {
    dispatch(setFavoriteOffersSaveStatus(true));
    try{
      await api.post<Offer>(`${APIRoute.Favorite}/${offerId}/${status}`);
    } catch (error) {
      dispatch(setError('Failed to save offer to favorites'));
    } finally {
      dispatch(setFavoriteOffersSaveStatus(false));
      dispatch(fetchFavoriteOffers());
    }
  },
);

export const saveReviews = createAsyncThunk<void, ReviewForSubmit, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/saveReviews',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    try{
      const {data} = await api.post<Reviews>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
      dispatch(addReview(data));
    } catch (error) {
      throw new Error('error');
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(getUserData(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try{
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      dispatch(getUserData(data));
      saveToken(data.token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }

  },
);
export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

