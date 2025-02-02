export enum AppRoute{
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus{
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute{
  Comments = '/comments',
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite'
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const SortType = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
export const TIMEOUT_SHOW_ERROR = 2000;
export const MAX_COUNT_REVIEWS = 10;
export const TEXT_LENGTH = {
  MAXIMUM: 300,
  MINIMUM: 50,
};

