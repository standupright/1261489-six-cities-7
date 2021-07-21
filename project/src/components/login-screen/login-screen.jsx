import React, {useRef} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/api-actions';
import {AppRoute, AuthStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selector';

function LoginScreen () {
  const emailRef = useRef ();
  const passwordRef = useRef ();

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault ();

    dispatch(login({
      login: emailRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (authorizationStatus === AuthStatus.AUTH
    ? (<Redirect to={AppRoute.ROOT} />)
    : (
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to={AppRoute.ROOT}>
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"
                  />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.ROOT}
                    />
                    <Link
                      to={AppRoute.LOGIN}
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper" />
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                    ref={emailRef}
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required=""
                    ref={passwordRef}
                  />
                </div>
                <button
                  className="login__submit form__submit button"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.ROOT}>
                  <span>Amsterdam</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>)
  );
}

export {LoginScreen};
export default LoginScreen;
