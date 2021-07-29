import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <h1><a className={s.headerTitle} href='ADMIN.BIKE-BOOKING.COM'>ADMIN.BIKE-BOOKING.COM</a></h1>
        </header>
    )
}

export default Header;

