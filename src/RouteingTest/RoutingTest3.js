import React from 'react';
import { Link, Route } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import RoutingTest4 from './RoutingTest4';

const RoutingTest3 = ({ match }) => {
  return (
    <div>
      <Link to={`${match.url}/routingTest4`}>
        <p>RoutingTest 3</p>
      </Link>

      <Route path={`${match.path}/routingTest4`} component={RoutingTest4} />
    </div>
  );
};

RoutingTest3.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default RoutingTest3;
