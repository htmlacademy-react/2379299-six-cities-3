import MainPage from '../../pages/main-page/main-page';

type Props = {
  countOffers: number;
}

function App({countOffers}:Props): JSX.Element{
  return(
    <MainPage countOffers={countOffers}/>
  );
}

export default App;
