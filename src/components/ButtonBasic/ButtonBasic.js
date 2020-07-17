import React, { memo } from 'react';
import style from './ButtonBasic.module.css';
import { mapTypeToClass } from '../../utils/helpers';

const ButtonBasic = ({ children, onClick, type,icon }) => {
    return (

        <button className={`${style.button} ${style[mapTypeToClass[type]]}`} onClick={onClick}>
            
            {icon}
            
            {children}
            
            </button>

    );
}

export default memo(ButtonBasic);