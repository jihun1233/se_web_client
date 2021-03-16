import React from 'react';
import {Link, Route} from 'react-router-dom';
import RoutingTest5 from './RoutingTest5';

const RoutingTest4 = ({match}) => {
    return (
        <div>
            
             <Link to={`${match.url}/routingTest5`}>
             <p>RoutingTest 4</p>
            </Link>

            <Route path={`${match.url}/routingTest5`} component={RoutingTest5}></Route>
            
        </div>
    );
};

export default RoutingTest4;