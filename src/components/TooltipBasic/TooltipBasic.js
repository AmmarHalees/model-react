import React from 'react';
import styles from './TooltipBasic.module.css';
import data from '../../utils/constants/strings.json'


const TooltipBasic = ({ children , position=data['tooltip initial position']}) => {
    return (

        <span className={`${styles.tooltip} ${styles[position]}`}>

            {children}

        </span>
    );
}

export default TooltipBasic;