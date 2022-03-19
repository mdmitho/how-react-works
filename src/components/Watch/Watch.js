import React, { useEffect, useState } from 'react';
import Display from '../display/Display';


const Watch = () => {
    const [steps, setSteps] = useState(0)
    const increaseSteps = () => {
        const newStepsCount = steps +1;
        setSteps(newStepsCount)
    }
    useEffect(() => {
        console.log('Hello');
    },[])
    return (
        <div style={{border:"2px solid purple",margin:"20px"} }>
            <h1>thes is my smart watch</h1>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseSteps}>De Dour...............</button>
            <Display name="Garmin" steps={steps}></Display>
        </div>
    );
};

export default Watch;