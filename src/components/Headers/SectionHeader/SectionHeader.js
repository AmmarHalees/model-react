import React from 'react';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ title, button, link }) => {
    return (

        <header id={link} className={styles.sectionHeader}>

            <h2 className={styles.title}>  {title}   </h2>


            {button}


        </header>

    );
}

export default SectionHeader;