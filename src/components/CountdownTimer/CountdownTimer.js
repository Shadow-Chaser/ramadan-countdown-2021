import React from 'react';
import Countdown from 'react-countdown';



const CountdownTimer = () => {
    return (
        <div>
            <h1>Ramadan is knocking at the door</h1>
            <h1><Countdown date={Date.now() + 100000000} /></h1>
        </div>
    );
};

export default CountdownTimer;