import React from 'react';
import styles from './AlertBasic.module.css';
import PaperBasic from '../../PaperBasic/PaperBasic';

const AlertBasic = ({ type, children }) => {
    return (

        <PaperBasic>

            <div className={`${styles.alert} ${styles[type]}`}>

                {children}

            </div>

        </PaperBasic>


    );
}

export default AlertBasic;