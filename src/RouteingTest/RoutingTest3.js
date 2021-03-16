import React from 'react';
import {Link, Route} from 'react-router-dom';
import RoutingTest4 from './RoutingTest4';
const RoutingTest3 = ({match}) => {
    return (
        <div>
             
             <Link to={`${match.url}/routingTest4`}>
             <p>RoutingTest 3</p>
            </Link>

            <Route path={`${match.path}/routingTest4`} component={RoutingTest4}></Route>
            
        </div>
    );
};

export default RoutingTest3;