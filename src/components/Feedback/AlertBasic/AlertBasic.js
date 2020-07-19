import React from 'react';
import styles from './AlertBasic.module.css';

const AlertBasic = ({ type }) => {
    return (
        
        <div className={`${styles.alert} ${styles[type]}`}>

            <h3>This is successful</h3>

            <p>this is a success message</p>

        </div>

    );
}

export default AlertBasic;