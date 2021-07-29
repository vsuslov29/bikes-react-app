import React from 'react';
import s from './BikesList.module.css';
import cross from '../../images/Cross.svg';

const BikesList = ({ bikes, handleStatus, deleteBike }) => {

    return (
        <div className={s.bikesList}>
            {bikes && bikes.map((bike, index) => (
                <div
                    className={s.bike}
                    style={{
                        border: '2px solid' +
                            (bike.status === 'available' ?
                                '#6FCF97' : bike.status === 'busy' ? '#F2994A' : '#EB5757')
                    }}
                >
                    <BikeInfo bike={bike} handleStatus={handleStatus} id={index} />
                    <div className={s.crossAndPrice}>
                        <img className={s.cross} src={cross} onClick={() => deleteBike(index)} />
                        <span className={s.price}>{Number(bike.price).toFixed(2)} UAH/hr.</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

const BikeInfo = ({ bike, handleStatus, id }) => {
    return (
        <div className={s.bikeInfo}>
            <div>
                <span className={s.bikeName}>{bike.name} - </span>
                <span className={s.bikeType}>{bike.type} ({bike.color}) </span>
            </div>
            <div>
                <span className={s.bikeId}>ID: {bike.id}</span>
            </div>
            <div className={s.wheelSize}>
                <h4>WHEEL SIZE: {bike.wheelSize}</h4>
            </div>
            <div>
                <p><b>DESCRIPTION: </b> {bike.description}</p>
            </div>
            <div className={s.form}>
                <span>STATUS:</span>
                <form>
                    <select value={bike.status} onChange={(e) => handleStatus(e, id)} >
                        <option value='available'>Available</option>
                        <option value='busy'>Busy</option>
                        <option value='unavailable'>Unavailable</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default BikesList;