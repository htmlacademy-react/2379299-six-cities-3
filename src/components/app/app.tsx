import { Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import { AppRoute } from '../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Layout from '../layout/layout';

type Props = {
  countOffers: number;
}

function App({countOffers}:Props): JSX.Element{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route
            index
            path = {AppRoute.Main}
            element = {<MainPage countOffers={countOffers}/>}
          />
          <Route
            path = {AppRoute.Login}
            element = {<Login />}
          />
          <Route
            path = {AppRoute.Favorites}
            element = {<Favorites/>}
          />
          <Route
            path = {AppRoute.Offer}
            element = {<Offer/>}
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
