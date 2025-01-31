
import { createSelector, OutputSelector } from 'reselect';
import { Offer, Offers } from '../../types/offer';


interface RootState {
  offers: Offers;
}

const selectOffersByCity: OutputSelector<RootState, string, string, Offers> = createSelector(
  [
    (state: RootState): Offers => state.offers,
    (state: RootState, city: string): string => city,
    (state: RootState, city: string, sort: string): string => sort,
  ],
  (offers: Offers, city: string, sort: string): Offers => {
    const offersByCity =  offers.filter((offer: Offer) => offer.city.name === city);

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

// https://stackoverflow.com/questions/40291084/use-reselect-selector-with-parameters
