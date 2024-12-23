import { SortType } from '../../components/const';

type Props = {
  setActiveSort: (sort:string) => void;
}


function SortOffers({setActiveSort}: Props):JSX.Element{

  return(
    <ul className="places__options places__options--custom places__options--opened">
      {SortType.map((sort) => (
        <li
          className="places__option places__option--active"
          key={sort}
          tabIndex={0}
          onClick={() => {
            setActiveSort(sort);
          }}
        >{sort}
        </li>
      ))}
    </ul>
  );
}

export default SortOffers;
