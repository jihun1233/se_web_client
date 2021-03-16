import React from 'react';

const RoutingTest5 = ({match}) => {
    return (
        <div>
             
             <p>RoutingTest 5, 현재 주소는</p>
             <p> {`url: ${match.url} 입니다`}</p>
             <p>match.path : {match.path} 입니다</p>

        </div>
    );
};

export default RoutingTest5;