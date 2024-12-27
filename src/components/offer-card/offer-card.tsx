import { useEffect, useState } from 'react';
import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';

type Props = {
  offer: Offer;
  onActiveOffer?:(isActiveOffer: string) => void;
}

function OfferCard({offer, onActiveOffer}:Props):JSX.Element{

  const [activeOffer, setActiveOffer] = useState<string>('');
  const {title, price, type, previewImage, rating} = offer;
  const ratingOffer = Math.round(rating);
  function hendleMouseEnter(){
    setActiveOffer(offer.id);

  }
  function hendleMouseLeave(){
    setActiveOffer('');
  }

  useEffect(() => {
    if(onActiveOffer){
      onActiveOffer(activeOffer);
    }
  }, [activeOffer]);

  return(
    <article
      className="cities__card place-card"
      onMouseEnter = {hendleMouseEnter}
      onMouseLeave = {hendleMouseLeave}

    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
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
          // onClick={changeOnClick}
        >
          <Link to={`/offer/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;

