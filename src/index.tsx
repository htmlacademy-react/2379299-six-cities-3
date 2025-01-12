import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './ mocks/offers';
import { reviews } from './ mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import { cities } from './ mocks/const';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchOffersAction } from './store/api-action';

// import{ToastContainer} from  'react-toastify'

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(111,offers)
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
