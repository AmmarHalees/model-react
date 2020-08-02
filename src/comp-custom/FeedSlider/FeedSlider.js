import React from 'react';
import styles from './FeedSlider.module.css';
import SliderCard from '../SliderCard/SliderCard';

const FeedSlider = () => {
    return (

        <section className={styles.slider}>

            <SliderCard/>
            <SliderCard/>
            <SliderCard/>
            <SliderCard/>
            <SliderCard/>

        </section>


    );
}

export default FeedSlider;