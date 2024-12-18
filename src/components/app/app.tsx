import { Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites-page/favorites-page';
import Login from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { AppRoute, AuthorizationStatus } from '../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Layout from '../layout/layout';
import PrivateRoute from '../private-route/private-route';
import { Offers } from '../../types/offer';
import { Review } from '../../types/reviews';

type Props = {
  countOffers: number;
  offers: Offers;
  reviews: Review[];
  cities: string[];

}

function App({countOffers, offers, cities, reviews}:Props): JSX.Element{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route
            index
            path = {AppRoute.Main}
            element = {<MainPage countOffers={countOffers} cities={cities} offers={offers}/>}
          />
          <Route
            path = {AppRoute.Login}
            element = {<Login />}
          />
          <Route
            path = {AppRoute.Favorites}
            element = {<Favorites offers={offers}/>}
          />
          <Route
            path = {AppRoute.Offer}
            element = {
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <OfferPage reviews = {reviews} offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path = "*"
            element = {<NotFoundPage/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
