import React, { memo } from 'react';
import style from './ButtonBasic.module.css';
import { mapTypeToClass } from '../../utils/helpers';

const ButtonBasic = ({ children =<div>button</div>, onClick, type ="primary" , disabled = false ,rounded =false ,loading=false }) => {
    return (

        <button onClick={()=>onClick()} className={`${style.button} ${style[mapTypeToClass[type]]} ${rounded&&style.rounded}`} disabled={disabled} onClick={onClick}>
                        

            
            {children}
            
            </button>

    );
}

export default memo(ButtonBasic);