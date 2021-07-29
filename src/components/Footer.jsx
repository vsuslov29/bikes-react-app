import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className={s.footer}>
            <span className={s.devTitle}>Developer: </span>
            <span className={s.devName}>Vadym Suslov</span>
        </div>
    )
}

export default Footer;