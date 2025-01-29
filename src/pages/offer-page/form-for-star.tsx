import { Fragment, memo} from 'react';

type Star = {
  value: number;
  title: string;
}

type Props = {
  star: Star ;
  setDataStar: (value: number) => void;
  dataStar:number;
  loadingStatusReviews: boolean;
}

function FormForStarRew({loadingStatusReviews, star, setDataStar, dataStar}:Props):JSX.Element{

  return(
    <Fragment key={star.value}>
      <input className="form__rating-input visually-hidden" name="rating"
        value={star.value}
        id={`${star.value}-stars`}
        type="radio"
        onClick={() => {
          setDataStar(star.value);
        }}
        checked={star.value === dataStar}
        disabled={loadingStatusReviews}
      />
      <label
        htmlFor={`${star.value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={star.title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use href="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

const FormForStar = memo(FormForStarRew);
export default FormForStar;

