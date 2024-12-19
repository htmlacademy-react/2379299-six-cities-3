import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCurrentCity } from '../../store/action';

type Props = {
  city: string;
}

function ListCities({city}:Props):JSX.Element{

  const dispatch = useAppDispatch();

  function onHandlerClick(){

    dispatch(changeCurrentCity({currentCity:city}));
  }

  return(
    <li className="locations__item">
      <Link
        className="locations__item-link tabs__item"
        to="#"
        onClick={onHandlerClick}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default ListCities;
