import OfferCard from '../../components/offer-card/offer-card.tsx';
import Map from '../../components/map/map.tsx';
import { useAppSelector } from '../../hooks/index.ts';
import ListCities from '../../components/list-cities/list-cities.tsx';
import { useMemo, useState } from 'react';
import SortOffers from './sort-offers.tsx';
import { cities } from '../../ mocks/const.ts';


function MainPage(): JSX.Element{


  const currentFavorites = useAppSelector((state) =>state.favoriteOffers);
  const allOffers = useAppSelector((state) =>state.offers.map(((offer) =>
    currentFavorites.find((favorit) => favorit.id === offer.id) ? {...offer, isFavorite: true} : {...offer})));
  const currentCity = useAppSelector((state) =>state.currentCity);
  const currentOffers = allOffers .filter((offer) => offer.city.name === currentCity);
  const [activeOffer, setActiveOffer] = useState<string>('');
  const [activeSort, setActiveSort] = useState<string>('Popular');
  const [isShow, setIsShow] = useState<boolean>(false);

  useMemo(() => {
    switch (activeSort) {
      case 'Price: low to high':
        currentOffers.sort((a, b) => a.price - b.price);
        break;
      case 'Price: high to low':
        currentOffers.sort((a, b) => b.price - a.price);
        break;
      case 'Top rated first':
        currentOffers.sort((a, b) => b.rating - a.rating);
        break;
      case 'Popular':
        currentOffers.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }

  },[activeSort, currentOffers]);

  return(
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => <ListCities city={city} key={city}/>)}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span
                className="places__sorting-type"
                tabIndex={0}
                onClick={() => {
                  setIsShow(!isShow);
                }}
              >
                {activeSort}
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use href="#icon-arrow-select"></use>
                </svg>
              </span>
              {
                isShow ? <SortOffers setActiveSort={setActiveSort} setIsShow={setIsShow}/> : null
              }

            </form>
            <div className="cities__places-list places__list tabs__content">
              {currentOffers.map((offer) =>
                <OfferCard key={offer.id} offer={offer} setActiveOffer={setActiveOffer}/>)}
            </div>
          </section>
          <div className="cities__right-section">
            <Map currentOffers = {currentOffers} activeOffer={activeOffer}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
