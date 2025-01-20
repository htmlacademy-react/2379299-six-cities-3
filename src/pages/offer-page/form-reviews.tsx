import { FormEvent, memo, useState } from 'react';
import { saveReviews } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { COUNT_STAR } from '../../ mocks/const';
import FormForStar from './form-for-star';

type Props = {
  id: string;
}
function FormReviewsRew({id}: Props):JSX.Element{
  const dispatch = useAppDispatch();
  const [dataReviews, setDataReviews] = useState<string>('');
  const [dataStar, setDataStar] = useState<number>(0);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus)

  function onHandlerChange(evt: React.ChangeEvent<HTMLTextAreaElement>){
    evt.preventDefault();
    // evt.stopPropagation();
    setDataReviews(evt.target.value);

  }

  console.log('dataStar', dataStar)
  function handlerSubmit(){
    // evt.preventDefault();
    // dispatch(saveReviews({
    //   offerId: id,
    //   comment:dataReviews,
    //   rating:dataStar
    // }));
    // evt.currentTarget.reset();
  }
 console
  return(
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handlerSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {COUNT_STAR.map((star) => <FormForStar dataStar={dataStar} star={star} key={star.value} setDataStar={setDataStar}/>)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onHandlerChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled = {!authorizationStatus}
        >Submit
        </button>
      </div>
    </form>
  );
}
const FormReviews = memo(FormReviewsRew);
export default FormReviews;
