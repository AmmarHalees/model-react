import React from 'react';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ title, button, link, iconPosition = 'right' }) => {

    let header = iconPosition === 'right' ?
        (
            <header id={link} className={styles.sectionHeader}>

                <h2 className={styles.title}>  {title}   </h2>

                <div className={styles.buttonContainer}>
                                        {button}

                </div>


            </header>
        )

        :

        <header id={link} className={styles.sectionHeader}>


            {button}

            <h2 className={styles.title}>  {title}   </h2>


        </header>

    return (header);
}

export default SectionHeader;