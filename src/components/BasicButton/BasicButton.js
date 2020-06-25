import React from 'react';
import './style.css';

const BasicButton = ({ text, onClick, type }) => {
    return (

        <button onClick={onClick}>{text}</button>

    );
}

export default BasicButton;