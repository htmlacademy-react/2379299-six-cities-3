import { Reviews } from '../../types/reviews';


type Props={
  review: Reviews;
}

function Review({review}: Props):JSX.Element{
  return(
    <p className="offer__text">
      {review.comment}
    </p>
  );
}

export default Review;
