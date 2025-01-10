import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';

type Props = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
  isReverse?: boolean;

}

function PrivateRoute(props:Props):JSX.Element{
  const {authorizationStatus, children, isReverse} = props;
  return(
    authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
      ? children
      : <Navigate to = {isReverse ? AppRoute.Main : AppRoute.Login} />
  );
}

export default PrivateRoute;
