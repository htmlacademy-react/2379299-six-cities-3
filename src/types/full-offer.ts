
import { City } from './city';
import { Host } from './host';
import { Location } from './location';
import { TypeHousing } from './type-housing ';

export type FullOffer = {
  id: string;
  title: string;
  description: string;
  type: TypeHousing;
  price: number;
  images:string[];
  city: City;
  location:Location;
  goods:string[];
  host:Host;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  }

