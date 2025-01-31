import { Link, Outlet, useLocation} from 'react-router-dom';
import { AppRoute } from '../const';
import { memo } from 'react';
import Header from './header';
import { useAppSelector } from '../../hooks';

function LayoutRaw():JSX.Element{

  const location = useLocation();
  const allFavoritesOffers = useAppSelector((state) => state.favoriteOffers);
  let text = 'text';
  let footerPage = false;
  let isShowUserDate;
  switch (location.pathname) {
    case AppRoute.Main:
      text = 'page--gray page--main';
      footerPage = false;
      isShowUserDate = true;
      break;
    case AppRoute.Login:
      text = 'page--gray page--login';
      footerPage = false;
      isShowUserDate = false;
      break;
    case AppRoute.Favorites:
      if (allFavoritesOffers.length > 0){
        text = '';
      }else{
        text = 'page--favorites-empty';
      }
      footerPage = true;
      isShowUserDate = true;
      break;
    default:
      isShowUserDate = true;
      break;
  }

  return(
    <div className={`page ${text}`}>
      <Header isShowUserDate={isShowUserDate}/>
      <Outlet />

      {footerPage && (
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.Main}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      )}
    </div>
  );
}
const Layout = memo(LayoutRaw);
export default Layout;
