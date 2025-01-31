import { memo } from 'react';
import { SortType } from '../../components/const';

type Props = {
  onSortChange: (sort: string) => void;
  onClose: () => void;
  activeSort: string;
};

function SortOffersRaw({ activeSort, onSortChange, onClose }: Props): JSX.Element {
  const handleSortClick = (sort: string) => {
    onSortChange(sort);
    onClose();
  };

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {SortType.map((sort) => (
        <li
          className={`places__option ${activeSort === sort ? 'places__option--active' : ''}`}
          key={sort}
          tabIndex={0}
          onClick={() => handleSortClick(sort)}
        >
          {sort}
        </li>
      ))}
    </ul>
  );
}

const SortOffers = memo(SortOffersRaw);
export default SortOffers;
