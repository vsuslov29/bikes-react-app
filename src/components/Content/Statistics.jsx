import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ bikes }) => {
    let totalBikes = bikes.length;
    let availableBikes = bikes.filter(bike => bike.status === 'available').length;
    let bookedBikes = bikes.filter(bike => bike.status === 'busy').length;
    let sumCost = bikes.reduce( (sumCost, bike) => sumCost += +bike.price, 0);
    let averageBikeCost = sumCost && (sumCost / totalBikes).toFixed(2);

    return (
        <div className={s.statistics}>
            <h1 className={s.statisticsTitle}>STATISTICS</h1>
            <p>Total Bikes: <b>{totalBikes}</b></p>
            <p>Available Bikes: <b>{availableBikes}</b></p>
            <p>Booked Bikes: <b>{bookedBikes}</b></p>
            <p>Average bike cost: <b>{averageBikeCost}</b> UAH/hr.</p>
        </div>
    )
}

export default Statistics;