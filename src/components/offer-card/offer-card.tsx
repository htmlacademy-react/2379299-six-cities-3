import { memo } from 'react';
import { Offer } from '../../types/offer';
import { Link, useNavigate } from 'react-router-dom';
import { saveFavoriteOffers } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../const';

type Props = {
  offer: Offer;
  onSetActiveOffer?: (id: string) => void;
};

const RATING_MULTIPLIER = 20;

function OfferCardRaw({ offer, onSetActiveOffer }: Props): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.loading.authorizationStatus);
  const { id, title, price, isPremium, type, previewImage, rating, isFavorite } = offer;
  const ratingOffer = Math.round(rating) * RATING_MULTIPLIER;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleMouseEnter = () => {
    if (onSetActiveOffer) {
      onSetActiveOffer(id);
    }
  };

  const handleMouseLeave = () => {
    if (onSetActiveOffer) {
      onSetActiveOffer('');
    }
  };

  const handleClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    } else {
      dispatch(
        saveFavoriteOffers({
          offerId: id,
          status: isFavorite,
        })
      );
    }
  };

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={handleClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingOffer}%` }}></span>
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

const OfferCard = memo(OfferCardRaw);
export default OfferCard;
