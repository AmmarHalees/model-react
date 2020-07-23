import React from 'react';
import styles from './TooltipBasic.module.css';


const TooltipBasic = ({ children , position='top' }) => {
    return (

        <span className={`${styles.tooltip} ${styles.bottom}`}>

            {children}

        </span>
    );
}

export default TooltipBasic;