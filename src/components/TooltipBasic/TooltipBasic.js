import React from 'react';
import './TooltipBasic.css';


const TooltipBasic = ({ children }) => {
    return (

        <span className="tooltip top">

            {children}

        </span>
    );
}

export default TooltipBasic;