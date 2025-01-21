import { Link, Outlet} from 'react-router-dom';
import { AppRoute } from '../const';
import { memo } from 'react';
import Header from './header';

function LayoutRew():JSX.Element{

  return(
    <div className="page page--gray page--main">
      <Header />
      <Outlet />
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}
const Layout = memo(LayoutRew);
export default Layout;
