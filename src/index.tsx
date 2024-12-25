import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './ mocks/offers';
import { reviews } from './ mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import { cities } from './ mocks/const';
import ErrorMessage from './components/error-message/error-message';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const Props = {
  countOffers: 111,
  offers: offers,
  reviews: reviews,
  cities: cities
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App countOffers = {Props.countOffers} cities = {Props.cities} offers = {Props.offers} reviews = {Props.reviews}/>
    </Provider>
  </React.StrictMode>
);
