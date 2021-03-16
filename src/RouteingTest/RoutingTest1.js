import React from 'react';
import {Link, Route} from 'react-router-dom';
import RoutingTest2 from './RoutingTest2';

const RoutingTest1 = () => {
    return (
        <div>
            <Link to={`/routingTest2`}>
                <p>RoutingTest 1</p>
            </Link>

            <Route path={`/routingTest2`} component={RoutingTest2}></Route>
        </div>
    );
};

export default RoutingTest1;