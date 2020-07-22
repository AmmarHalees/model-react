import React from 'react';
import './TooltipBasic.css';


const TooltipBasic = ({ children , position='top' }) => {
    return (

        <span className="tooltip top">

            {children}

        </span>
    );
}

export default TooltipBasic;