import React from 'react';
import './filter.css';

const Filter = (props) => {
    let {name,types,onTypeSelectChange} = props;
    return ( 
        <div className="filter-cntr">
            <h4>{name}</h4>
            {
                types.map(type=>(
                    <div key={type}>
                        <input type="checkbox" name={type} onClick={onTypeSelectChange} id={'check'+type}/>
                        <label htmlFor={'check'+type}>{type}</label>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Filter;