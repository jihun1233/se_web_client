import React from 'react';
import { Link, Route } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import RoutingTest3 from './RoutingTest3';

const RoutingTest2 = ({ match }) => {
  return (
    <div>
      <Link to={`${match.url}/routingTest3`}>
        <p>RoutingTest 2</p>
      </Link>
      <Route path={`${match.path}/routingTest3`} component={RoutingTest3} />
    </div>
  );
};

RoutingTest2.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default RoutingTest2;
