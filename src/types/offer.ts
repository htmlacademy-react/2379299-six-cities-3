import { City } from './city';

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  }

export type Offers = Offer[]
