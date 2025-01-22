import { Link} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-action';
import { memo } from 'react';

function HeaderRew():JSX.Element{
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();
  const handlerClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  const divStyle = {
    backgroundImage: `url(${userData?.avatarUrl})`,
    borderRadius: '50%',
  };

  return(
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
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper" style={divStyle} >
                      </div>
                      <span className="header__user-name user__name">{userData?.email}</span>
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
                      to={AppRoute.Login}
                      onClick={handlerClick}

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
  );
}
const Header = memo(HeaderRew);
export default Header;
