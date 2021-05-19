import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import DefaultBoard from '../Board/DefaultBoard';

const BodyRouter = () => {
  return (
    <div>
      <Switch>
        <Route
          path="/board/:boardId?/:direction?/:page?/:size?"
          render={({ match, location, history }) => (
            <DefaultBoard key={location.key} match={match} history={history} />
          )}
        />
        <Route
          path="/post/:boardId?/:direction?/:page?/:size?"
          render={({ match, location, history }) => (
            <DefaultBoard key={location.key} match={match} history={history} />
          )}
        />
        <Route path="/a">a</Route>
        <Route path="/c">c</Route>
        <Route path="*">page not found</Route>
      </Switch>
    </div>
  );
};

BodyRouter.propTypes = {};

export default BodyRouter;
