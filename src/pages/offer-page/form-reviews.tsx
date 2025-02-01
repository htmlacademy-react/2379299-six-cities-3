import { memo, useEffect, useState } from 'react';
import { clearErrorAction, saveReviews } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import FormForStar from './form-for-star';
import { AuthorizationStatus, TEXT_LENGTH } from '../../components/const';
import { COUNT_STAR } from '../../helpers/const';
import { resetReviewSuccess, setError } from '../../store/action';

type Props = {
  id: string;
}
function FormReviewsRaw({id}: Props):JSX.Element{
  const dispatch = useAppDispatch();
  const [dataReviews, setDataReviews] = useState<string>('');
  const [dataStar, setDataStar] = useState<number>();
  const authorizationStatus = useAppSelector((state) => state.loading.authorizationStatus);
  const loadingStatusReviews = useAppSelector((state) => state.loading.isReviewsDataLoading);
  const reviewSuccess = useAppSelector((state) => state.user.reviewSuccess);

  console.log(111, reviewSuccess,dataReviews,); // Логирование для отладки

  useEffect(() => {
    if (reviewSuccess) {
      console.log(22222222, reviewSuccess,dataReviews,); // Логирование для отладки
      setDataReviews('');
      console.log(333333333, reviewSuccess,dataReviews); // Логирование для отладки
      setDataStar(undefined);
    }
  }, [reviewSuccess]);

  function onHandleChange(evt: React.ChangeEvent<HTMLTextAreaElement>){
    evt.preventDefault();
    setDataReviews(evt.target.value);
  }
  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (dataStar && id && dataStar !== 0) {
      try {
        await dispatch(saveReviews({
          offerId: id,
          comment: dataReviews,
          rating: dataStar
        }));
      } catch (error) {
        dispatch(setError('Ошибка при отправке отзыва'));
        dispatch(clearErrorAction());
      }
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return(
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {COUNT_STAR.map((star) => <FormForStar loadingStatusReviews={loadingStatusReviews} dataStar={dataStar} star={star} key={star.value} onSetDataStar={setDataStar}/>)}
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
const FormReviews = memo(FormReviewsRaw);
export default FormReviews;
