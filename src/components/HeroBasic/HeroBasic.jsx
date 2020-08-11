import React from 'react';
import styles from './HeroBasic.module.css';
import ButtonPlain from '../ButtonPlain/ButtonPlain';

const HeroBasic = ({ title, description, cta ='Hire now' , bordered = false }) => {
    return (

        <div className={`${styles.hero} ${bordered && '_bordered' } _layout`} aria-label={title} role='banner'>

            <h1>{title}</h1>
            <p>{description}</p>
            <ButtonPlain type="primary">{cta}</ButtonPlain>

        </div>

    );
}

export default HeroBasic;