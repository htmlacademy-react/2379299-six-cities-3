import { memo } from 'react';
import { Reviews } from '../../types/reviews';


type Props={
  review: Reviews;
}

function ReviewRew({review}: Props):JSX.Element{
  return(
    <p className="offer__text">
      {review.comment}
    </p>
  );
}
const Review = memo(ReviewRew);
export default Review;
