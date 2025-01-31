import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCurrentCity } from '../../store/action';
import { memo } from 'react';

type Props = {
  city: string;
}

function ListCitiesRaw({city}:Props):JSX.Element{

  const dispatch = useAppDispatch();

  function onHandleClick(){

    dispatch(changeCurrentCity({currentCity:city}));
  }
  const currentCity = useAppSelector((state) => state.currentCity);

  return(
    <li className="locations__item">
      <Link
        className={`locations__item-link  ${city === currentCity ? 'tabs__item--active' : 'tabs__item'}`}
        to="#"
        onClick={onHandleClick}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}
const ListCities = memo(ListCitiesRaw);
export default ListCities;
