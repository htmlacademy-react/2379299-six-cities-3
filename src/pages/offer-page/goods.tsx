import { memo } from 'react';

type Props={
  good:string;
}

function GoodsRaw({good}:Props):JSX.Element {
  return(
    <li className="offer__inside-item">
      {good}
    </li>
  );
}
const Goods = memo(GoodsRaw);
export default Goods;
