import { Link } from 'react-router-dom';
import FavoritCard from '../../components/favorit-card/favorit-card';
import { useAppSelector } from '../../hooks';
import { cities } from '../../ mocks/const';

function FavoritesPage():JSX.Element{
  const allFavoritesOffers = useAppSelector((state) => state.favoriteOffers);
  return(
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">

            {cities.map((city) => {
              const cityfavoritesOffers = allFavoritesOffers.filter((favorite) => favorite.city.name === city);
              return(
                cityfavoritesOffers.length > 0 && (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to="#">
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {cityfavoritesOffers.map((offer) => <FavoritCard key={offer.id} offer={offer}/>)}
                    </div>
                  </li>));
            })}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesPage;


