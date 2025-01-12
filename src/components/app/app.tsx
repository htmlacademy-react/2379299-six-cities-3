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
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

type Props = {
  offers: Offers;
  reviews: Review[];
  cities: string[];
}

function App({ offers, cities, reviews}:Props): JSX.Element{

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isQuestionsDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  if (authorizationStatus === AuthorizationStatus.Unknown || isQuestionsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route
            index
            path = {AppRoute.Main}
            element = {<MainPage cities={cities} />}
          />
          <Route
            path = {AppRoute.Login}
            element = {
              <PrivateRoute
                authorizationStatus={authorizationStatus}
                isReverse
              >
                <Login />
              </PrivateRoute>
            }
          />
          <Route
            path = {AppRoute.Favorites}
            element = {<Favorites offers={offers}/>}
          />
          <Route
            path = {AppRoute.Offer}
            element = {
              <PrivateRoute authorizationStatus={authorizationStatus}>
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
