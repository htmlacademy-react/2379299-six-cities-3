import { memo, useState } from 'react';
import { Offer } from '../../types/offer';
import { Link, useNavigate } from 'react-router-dom';
import { saveFavoriteOffers } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../const';

type Props = {
  offer: Offer;
  setActiveOffer?:(isActiveOffer: string) => void;
}

function OfferCardRew({offer, setActiveOffer}:Props):JSX.Element{
  const [isFavorite, setIsFavorite] = useState<boolean>(offer.isFavorite);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const {title, price, isPremium, type, previewImage, rating} = offer;
  const ratingOffer = Math.round(rating);
  const navigate = useNavigate();
  function hendleMouseEnter(){
    setActiveOffer!(offer.id);
  }
  function hendleMouseLeave(){

    setActiveOffer!('');
  }

  const dispatch = useAppDispatch();
  const handlerClick = (id: string) => {
    if(authorizationStatus === AuthorizationStatus.Auth){
      dispatch(
        saveFavoriteOffers({
          offerId: id,
          status: Number(!isFavorite),
        }));
      setIsFavorite(!isFavorite);
    }else{
      navigate(AppRoute.Login);
    }
  };

  return(
    <article
      className="cities__card place-card"
      onMouseEnter = {hendleMouseEnter}
      onMouseLeave = {hendleMouseLeave}
    >
      {
        isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> : null
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
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
            className={`${isFavorite && authorizationStatus === AuthorizationStatus.Auth ? 'place-card__bookmark-button--active' : 'place-card__bookmark-button'} button`}
            type="button"
            onClick={() => handlerClick(offer.id)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingOffer * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2
          className="place-card__name"
        >
          <Link to={`/offer/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
const OfferCard = memo(OfferCardRew);
export default OfferCard;

