import React from 'react';
import s from './Content.module.css';
import BikesList from './Content/BikesList';
import AddBikeForm from './Content/AddBikeForm';
import Statistics from './Content/Statistics';



const Content = ({ bikes, handleStatus, deleteBike, onFormSubmit }) => {
    const bikesId = bikes.map(bike => bike.id);

    return (
        <main className={s.content}>
            <BikesList
                bikes={bikes}
                handleStatus={handleStatus}
                deleteBike={deleteBike}
            />
            <AddBikeForm onFormSubmit={onFormSubmit} bikesId={bikesId}/>
            <Statistics bikes={bikes} />
        </main>
    )
}

export default Content;