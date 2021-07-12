import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../const';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import offersPropShape from '../../prop-validation/offers.prop';
import reviewsPropShape from '../../prop-validation/reviews.prop';


function App (props) {
  const {offers,reviews} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={()=><FavoritesScreen offers={offers} />}
        />
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

App.propTypes = {
  offers: PropTypes.arrayOf(offersPropShape).isRequired,
  reviews: PropTypes.arrayOf(reviewsPropShape).isRequired,
};

export default App;
