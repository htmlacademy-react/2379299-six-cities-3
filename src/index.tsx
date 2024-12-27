import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './ mocks/offers';
import { reviews } from './ mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import { cities } from './ mocks/const';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchQuestionAction } from './store/api-avtion';

store.dispatch(fetchQuestionAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const Props = {
  offers: offers,
  reviews: reviews,
  cities: cities
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App cities = {Props.cities} offers = {Props.offers} reviews = {Props.reviews}/>
    </Provider>
  </React.StrictMode>
);
