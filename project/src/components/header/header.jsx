import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthStatus} from '../../const';
import { logout } from '../../store/api-actions';
import userPropShape from '../../prop-validation/user.prop';

function Header (props) {
  const {authorizationStatus,user,logoutUser} = props;

  return (
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
              { authorizationStatus === AuthStatus.AUTH && user ? (
                <React.Fragment>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        <img className="header__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt={user.name} />
                      </div>
                      <span className="header__user-name user__name">{user.email}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <span
                      className="header__nav-link"
                      style={{ cursor: 'pointer' }}
                      onClick={(evt) => {
                        evt.preventDefault();
                        logoutUser();
                      }}
                    >
                      <span className="header__signout">Sign out</span>
                    </span>
                  </li>
                </React.Fragment>
              ) : (
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.LOGIN}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  user: userPropShape,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser() {
    dispatch(logout());
  },
});

export {Header};
export default connect(mapStateToProps,mapDispatchToProps)(Header);

