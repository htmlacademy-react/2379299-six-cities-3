import { Offers } from './offer';

// export type SortType = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';

// export interface SortState {
//   activeSort: SortType;
// }

// export interface State {
//   city: string;
//   offers: Offers;
// }

// export interface Offers {
//   offers: Offer[];
//   offer: Offer | null;
//   nearbyOffers: Offer[];
//   favoriteOffers: Offer[];
// }

// export interface UserState {
//   // Добавьте поля, связанные с пользователем
// }

// export interface CityState {
//   currentCity: string;
// }

export interface LoadingState {
  // Добавьте поля, связанные с загрузкой
}

export interface State {
  offers: Offers;
  user: UserState;
  city: string;
  loading: LoadingState;
}
