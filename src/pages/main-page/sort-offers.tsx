
import { memo } from 'react';
import { SortType } from '../../components/const';

type Props = {
  setActiveSort: (sort:string) => void;
  setIsShow: (sort:boolean) => void;
  activeSort: string;
}


function SortOffersRew({activeSort, setActiveSort, setIsShow}: Props):JSX.Element{

  return(
    <ul className="places__options places__options--custom places__options--opened">
      {SortType.map((sort) => (
        <li
          className={`places__option  ${activeSort === sort ? 'places__option--active' : ''} `}
          key={sort}
          tabIndex={0}
          onClick={() => {
            setActiveSort(sort);
            setIsShow(false);
          }}
        >{sort}
        </li>
      ))}
    </ul>
  );
}
const SortOffers = memo(SortOffersRew);
export default SortOffers;
