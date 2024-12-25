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
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout'
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const SortType = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
export const TIMEOUT_SHOW_ERROR = 2000;
