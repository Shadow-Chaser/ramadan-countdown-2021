import React from 'react';

import DateCountdown from '../../../node_modules/react-date-countdown-timer/node_modules';


const CountdownTimer = () => {
    return (
        <div>
            <h1>Ramadan is knocking at the door</h1>
            <DateCountdown dateTo='January 01, 2023 00:00:00 GMT+03:00' callback={()=>alert('Hello')}  />
        </div>
    );
};

export default CountdownTimer;