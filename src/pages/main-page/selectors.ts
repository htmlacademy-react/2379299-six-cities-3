import { createSelector, Selector } from 'reselect';
import { Offer, Offers } from '../../types/offer';
import type { State } from '../../types/state';

const stateOffers: Selector<State, Offers> = (state: State): Offers =>
  state.offers;

const stateCity: Selector<State, string, [string]> = (
  state: State,
  city: string
): string => city;
const stateSort: Selector<State, string, [string, string]> = (
  state: State,
  city: string,
  sort: string
): string => sort;

const selectOffersByCity = createSelector<
  [
    Selector<State, Offers>,
    Selector<State, string, [string]>,
    Selector<State, string, [string, string]>
  ],
  Offers
>(
  [stateOffers, stateCity, stateSort],
  (offers: Offers, city: string, sort: string): Offers => {
    const offersByCity = offers.filter(
      (offer: Offer) => offer.city.name === city
    );

    switch (sort) {
      case 'Price: low to high':
        return offersByCity.sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return offersByCity.sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return offersByCity.sort((a, b) => b.rating - a.rating);
      case 'Popular':
      default:
        return offersByCity;
    }
  }
);

export { selectOffersByCity };
