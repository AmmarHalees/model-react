import React from 'react';
import styles from './HorizontalSlider.module.css';
import SliderCard from '../SliderCard/SliderCard';

const HorizontalSlider = ({ data }) => {
    return (

        <section className={styles.slider}>


            {data.map(({title, background ,id}) =>   <SliderCard key={id} title ={title}  background={background}/>    )}

        </section>


    );
}

export default HorizontalSlider;