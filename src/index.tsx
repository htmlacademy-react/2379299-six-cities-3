import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './ mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Props = {
  countOffers: 111,
  offers: offers
};

root.render(
  <React.StrictMode>
    <App countOffers = {Props.countOffers} offers = {Props.offers}/>
  </React.StrictMode>
);
