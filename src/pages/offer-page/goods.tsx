type Props={
  good:string;
}

function Goods({good}:Props):JSX.Element {
  return(
    <li className="offer__inside-item">
      {good}
    </li>
  );
}

export default Goods;
