import { Link } from 'react-router-dom';
import FavoritCard from '../../components/favorit-card/favorit-card';

function FavoritesPage():JSX.Element{

  return(
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="#">
                    <span>Amsterdam</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                {/* {offers.map((offer) => <FavoritCard key={offer.id} offer={offer}/>)} */}
                <article className="favorites__card place-card">
                  <div className="favorites__image-wrapper place-card__image-wrapper">
                    <Link to="#">
                      <img className="place-card__image" src="img/room-small.jpg" width="150" height="110" alt="Place image" />
                    </Link>
                  </div>
                  <div className="favorites__card-info place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;80</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use href="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">In bookmarks</span>
                      </button>
                    </div>
                    <div className="place-card__rating rating">
                      <div className="place-card__stars rating__stars">
                        <span style={{width: '100%'}}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <h2 className="place-card__name">
                      <Link to="#">Wood and stone place</Link>
                    </h2>
                    <p className="place-card__type">Room</p>
                  </div>
                </article>
              </div>
            </li>

            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="#">
                    <span>Cologne</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                {offers.map((offer) => <FavoritCard key={offer.id} offer={offer}/>)}
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesPage;

