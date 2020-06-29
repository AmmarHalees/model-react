import React from 'react';
import './ButtonBasic.css';

const ButtonBasic = ({ text, onClick, type }) => {
    return (

        <button onClick={onClick}>{text}</button>

    );
}

export default ButtonBasic;