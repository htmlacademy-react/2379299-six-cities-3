import { memo, useEffect, useState } from 'react';
import { saveReviews } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import FormForStar from './form-for-star';
import { AuthorizationStatus, TEXT_LENGTH } from '../../components/const';
import { COUNT_STAR } from '../../helpers/const';

type Props = {
  id: string;
}
function FormReviewsRew({id}: Props):JSX.Element{
  const dispatch = useAppDispatch();
  const [dataReviews, setDataReviews] = useState<string>('');
  const [dataStar, setDataStar] = useState<number>();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const loadingStatusReviews = useAppSelector((state) => state.isReviewsDataLoading);
  const reviewSuccess = useAppSelector((state) => state.reviewSuccess);

  useEffect(() => {
    if (reviewSuccess) {
      setDataReviews('');
      setDataStar(undefined);
    }
  }, [reviewSuccess]);


  function onHandleChange(evt: React.ChangeEvent<HTMLTextAreaElement>){
    evt.preventDefault();
    setDataReviews(evt.target.value);
  }
  function handleSubmit(evt:React.FormEvent<HTMLFormElement>){
    evt.preventDefault();
    if (dataStar && id && dataStar !== 0) {
      dispatch(saveReviews({
        offerId: id,
        comment:dataReviews,
        rating:dataStar
      }));
    }
  }

  return(
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {COUNT_STAR.map((star) => <FormForStar loadingStatusReviews={loadingStatusReviews} dataStar={dataStar} star={star} key={star.value} setDataStar={setDataStar}/>)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onHandleChange}
        maxLength={TEXT_LENGTH.MAXIMUM}
        minLength={TEXT_LENGTH.MINIMUM}
        disabled = {loadingStatusReviews}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled = {loadingStatusReviews || authorizationStatus !== AuthorizationStatus.Auth || !dataStar || dataReviews.length < TEXT_LENGTH.MINIMUM || dataReviews.length > TEXT_LENGTH.MAXIMUM}
        >Submit
        </button>
      </div>
    </form>
  );
}
const FormReviews = memo(FormReviewsRew);
export default FormReviews;
