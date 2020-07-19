import React, { memo } from 'react';
import style from './ButtonBasic.module.css';
import { mapTypeToClass } from '../../utils/helpers';

const ButtonBasic = ({ children, onClick, type,icon , disabled = false }) => {
    return (

        <button className={`${style.button} ${style[mapTypeToClass[type]]}`} disabled={disabled} onClick={onClick}>
            
            {icon}
            
            {children}
            
            </button>

    );
}

export default memo(ButtonBasic);