import { memo } from 'react';

type Props={
  good:string;
}

function GoodsRew({good}:Props):JSX.Element {
  return(
    <li className="offer__inside-item">
      {good}
    </li>
  );
}
const Goods = memo(GoodsRew);
export default Goods;
