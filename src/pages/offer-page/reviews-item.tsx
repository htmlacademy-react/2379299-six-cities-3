import dayjs from 'dayjs';
import { Reviews } from '../../types/reviews';
import { memo } from 'react';

type Props={
  review: Reviews;
}

function ReviewsItemRaw({review}:Props):JSX.Element{

  const {user, comment, date, rating} = review;

  const formattedDate = dayjs(date).format('MMMM YYYY');
  const ratingOffer = Math.round(rating);

  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingOffer * 20}%`}}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{formattedDate}</time>
      </div>
    </li>
  );
}

const ReviewsItem = memo(ReviewsItemRaw);
export default ReviewsItem;

