import React from 'react';
import styles from './SectionHeader.module.css';
import ButtonPlain from '../../ButtonPlain/ButtonPlain';

const SectionHeader = () => {
    return (

        <header className={styles.sectionHeader}>

            <h2>

                    Popular

            </h2>

            <ButtonPlain  type='link'>
                View all
            </ButtonPlain>

        </header>

    );
}

export default SectionHeader;