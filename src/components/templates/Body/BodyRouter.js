import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import DefaultBoard from '../Board/DefaultBoard';

const BodyRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/board/:id" component={DefaultBoard} />
        <Route path="/a">a</Route>
        <Route path="/c">c</Route>
        <Route path="*">page not found</Route>
      </Switch>
    </div>
  );
};

BodyRouter.propTypes = {};

export default BodyRouter;
