import React from 'react';

const Filters = (props) => {
    return ( 
        <div>
            <h3>Filters</h3>
            {props.children}
        </div>
    );
}
 
export default Filters;