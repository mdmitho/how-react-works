import React from 'react';
import DeviceDetail from '../Device-Detail/Device-Detail';

const Device = (props) => {
    return (
        <div>
            <h2>I have: {props.name}</h2>
          
            <DeviceDetail price={props.price}></DeviceDetail>
        </div>
    );
};

export default Device;<h2>I have: </h2>