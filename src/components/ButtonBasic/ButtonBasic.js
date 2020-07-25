import React, { memo } from 'react';
import style from './ButtonBasic.module.css';
import PropTypes from 'prop-types'; // ES6
import { mapTypeToClass } from '../../utils/helpers';

const ButtonBasic = ({ children, onClick, type, disabled, rounded, loading =false, icon}) => {


    return (

        <button onClick={onClick} className={`${style.button} ${style[mapTypeToClass[type]]} ${rounded && style.rounded}`} disabled={disabled}  >

          

                {children}

        </button>

    );
}

ButtonBasic.defaultProps = {

    type: 'primary',
    disabled:false ,
    rounded: false,

}


ButtonBasic.propTypes = {

    type: PropTypes.oneOf(['primary','secondary','terinary']).isRequired,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    rounded: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number
      ]),
    onClick:PropTypes.func.isRequired

}

export default memo(ButtonBasic);