import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { fetchFavoriteOffers, saveFavoriteOffers } from '../../store/api-action';
import { memo, useState } from 'react';
import { useAppDispatch } from '../../hooks';

type Props = {
  offer: Offer;
}

function FavoritCardRew({offer}:Props):JSX.Element{

  const {title, price, type,} = offer;
  const [isFavorite, setIsFavorite] = useState<boolean>(offer.isFavorite);
  const dispatch = useAppDispatch();
  const handlerClick = (id: string) => {

    dispatch(
      saveFavoriteOffers({
        offerId: id,
        status: Number(!isFavorite)
      })

    );
    setIsFavorite(!isFavorite);
    dispatch(fetchFavoriteOffers());
  };

  return(
    <article className="favorites__card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src="img/apartment-small-03.jpg" width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={() => handlerClick(offer.id)}
          >
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
          <Link to="#">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
const FavoritCard = memo(FavoritCardRew);
export default FavoritCard;
