import { Link, Outlet } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-avtion';

type Props = {
  authorizationStatus: AuthorizationStatus;
}

function Layout({authorizationStatus}: Props):JSX.Element{

  const dispatch = useAppDispatch();
  const handlerClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return(
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authorizationStatus === AuthorizationStatus.Auth ?
                  (
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">3</span>
                      </Link>
                    </li>
                  ) : null}

                {
                  authorizationStatus === AuthorizationStatus.NoAuth ?
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to={AppRoute.Login}>
                        <span className="header__signout">Sign in</span>
                      </Link>
                    </li>
                    : null
                }
                {
                  authorizationStatus === AuthorizationStatus.Auth ?
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        onClick={handlerClick}
                        to="#"
                      >
                        <span
                          className="header__signout"
                        >Sign out
                        </span>
                      </Link>
                    </li>
                    : null
                }
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default Layout;
