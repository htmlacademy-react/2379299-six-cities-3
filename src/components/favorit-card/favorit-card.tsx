import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { saveFavoriteOffers } from '../../store/api-action';
import { memo } from 'react';
import { useAppDispatch } from '../../hooks';

type Props = {
  offer: Offer;
}

function FavoritCardRaw({ offer }: Props): JSX.Element | null {
  const { title, price, type, previewImage, rating, id } = offer;
  const dispatch = useAppDispatch();
  const ratingPercent = `${Math.round(rating) * 20}%`;

  const handleClick = () => {
    dispatch(
      saveFavoriteOffers({
        offerId: id,
        status: offer.isFavorite,
      })
    );
  };

  return (
    <article className="favorites__card place-card">
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={handleClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingPercent }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

const FavoritCard = memo(FavoritCardRaw);
export default FavoritCard;
