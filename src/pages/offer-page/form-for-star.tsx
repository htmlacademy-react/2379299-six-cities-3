import { Fragment, memo } from 'react';

type Star = {
  value: number;
  title: string;
};

type Props = {
  star: Star;
  onSetDataStar: (value: number) => void;
  dataStar: number | undefined;
  loadingStatusReviews: boolean;
};

function FormForStarRaw({
  loadingStatusReviews,
  star,
  onSetDataStar,
  dataStar,
}: Props): JSX.Element {
  return (
    <Fragment key={star.value}>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={star.value}
        id={`${star.value}-stars`}
        type="radio"
        onChange={() => {
          onSetDataStar(star.value);
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

const FormForStar = memo(FormForStarRaw);
export default FormForStar;
