import { FormEvent, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthData } from '../../types/auth-data ';
import { loginAction } from '../../store/api-avtion';
import { useAppDispatch } from '../../hooks';

function LoginPage():JSX.Element{
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handlerSubmit = (evt: FormEvent<HTMLFormElement>) =>{
    evt.preventDefault();
    if (passwordRef.current !== null && emailRef.current !== null) {
      onSubmit({
        email:emailRef.current.value,
        password:passwordRef.current.value,
      });
    }
  };

  return(
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={handlerSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                ref={emailRef}
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="#">
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
export default LoginPage;
