import { Fragment, memo, useMemo, useState } from 'react';

type Star = {
  value: number;
  title: string;

}

type Props = {
  star: Star ;
  setDataStar: (value: number) => void;
  dataStar:number;
}

function FormForStarRew({star, setDataStar, dataStar}:Props):JSX.Element{

console.log('FormForStarRew', star)
  const handlerClick = (evt:React.MouseEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setDataStar(Number(evt.currentTarget.value));
  };



  return(
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating"
        value={star.value}
        id={`${star.value}-stars`}
        type="radio"
        onClick={handlerClick}
        checked={dataStar === star.value}
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
