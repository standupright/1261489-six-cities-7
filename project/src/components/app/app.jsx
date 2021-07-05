import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import offersPropShape from '../../prop-validation/offers.prop';
import reviewsPropShape from '../../prop-validation/reviews.prop';
import Header from '../header/header';
import Footer from '../footer/footer';

function App (props) {
  const {offers,reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Header />
          <FavoritesScreen offers={offers} />
          <Footer />
        </Route>
        <Route exact path={AppRoute.ROOM}
          render={ (params) => (
            <div>
              {params.match.params.id < offers.length
                ? <RoomScreen cardNumber={params.match.params.id}  offers={offers} reviews={reviews}/>
                : <NotFoundScreen />}
            </div>
          )}
        >
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

App.propTypes = {
  offers: PropTypes.arrayOf(offersPropShape).isRequired,
  reviews: PropTypes.arrayOf(reviewsPropShape).isRequired,
};
