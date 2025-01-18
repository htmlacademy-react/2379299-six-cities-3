import FormComments from './form-reviews';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearbyOffers, fetchOfferAction, fetchReviews } from '../../store/api-action';
import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import OfferGalleryImage from './offer-gallery-image';
import Goods from './goods';
import Review from './review';
import Map from '../../components/map/map';
import OfferCard from '../../components/offer-card/offer-card';


function OfferPage():JSX.Element{

  const params = useParams();
  const prodId = params.id;

  const dispatch = useAppDispatch();
  useEffect(() => {
    if(prodId){
      dispatch(fetchOfferAction(prodId));
      dispatch(fetchReviews(prodId));
      dispatch(fetchNearbyOffers(prodId));
    }
  },[prodId, dispatch]);

  const loadingStatus = useAppSelector((state) => state.isOfferDataLoading);
  const loadingStatusNearby = useAppSelector((state) => state.isNearbyOfferDataLoading);
  const currentOffer = useAppSelector((state) => state.offer);
  const reviews = useAppSelector((state) => state.reviews);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers).slice(0,3);

  if (loadingStatus || loadingStatusNearby || !currentOffer){
    return <LoadingScreen />;
  }

  if(!currentOffer){
    return <Navigate replace to="/not-found-page" />;
  }

  const {title, id, isPremium, rating, goods, host, price, description, images, type, bedrooms, maxAdults} = currentOffer;

  const ratingOffer = Math.round(rating);
  return(
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.map((img) => <OfferGalleryImage img={img} key={img}/>)}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {
              isPremium ?
                <div className="offer__mark">
                  <span>Premium</span>
                </div> : null
            }


            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use href="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: `${ratingOffer * 20}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {goods.map((good) => <Goods good={good} key={good}/>)}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                </div>
                <span className="offer__user-name">
                  {host.name}
                </span>
                <span className="offer__user-status">
                  {host.isPro ? 'Pro' : ''}
                </span>
              </div>
              <div className="offer__description">
                {description}
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <ul className="reviews__list">
                {reviews.map((review) => <Review review={review} key={review.id}/>)}
              </ul>
              <FormComments id={id} />
            </section>
          </div>
        </div>
        <section>
          <Map currentOffers={nearbyOffers} activeOffer={prodId}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {nearbyOffers.map((offer) => <OfferCard offer={offer} key={offer.id} />)}
          </div>
        </section>
      </div>
    </main>
  );
}

export default OfferPage;
