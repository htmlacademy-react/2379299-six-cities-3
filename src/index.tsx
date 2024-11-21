import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Props = {
  countOffers: 111
};

root.render(
  <React.StrictMode>
    <App countOffers = {Props.countOffers}/>
  </React.StrictMode>
);
