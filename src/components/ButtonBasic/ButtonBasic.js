import React, { memo } from 'react';
import style from './ButtonBasic.module.css';
import { mapTypeToClass } from '../../utils/helpers';

const ButtonBasic = ({ children =<div>button</div>, onClick, type ="primary" , disabled = false }) => {
    return (

        <button className={`${style.button} ${style[mapTypeToClass[type]]}`} disabled={disabled} onClick={onClick}>
                        
            {children}
            
            </button>

    );
}

export default memo(ButtonBasic);