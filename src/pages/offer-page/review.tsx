import { memo } from 'react';
import { Reviews } from '../../types/reviews';


type Props={
  review: Reviews;
}

function ReviewRaw({review}: Props):JSX.Element{
  return(
    <p className="offer__text">
      {review.comment}
    </p>
  );
}
const Review = memo(ReviewRaw);
export default Review;
