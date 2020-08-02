import React, { memo } from 'react';
import style from './ButtonBasic.module.css';
import PropTypes from 'prop-types'; // ES6
import Spinner from '../Loading/Spinner/Spinner';

const ButtonBasic = ({ children, onClick, type, disabled, rounded, loading }) => {


    return (

        <button onClick={onClick} className={`${style.button} ${style[type]} ${rounded && style.rounded}`} disabled={disabled || loading}  >

            {loading ? <Spinner style={{ width: '24px', height: '24px' }} /> : children}

            {/* You could actually just do this. Becaue ButtonIcon's icon prop isnt passed here to 
                ButtonBasic anyways.  */}


        </button>

    );
}

ButtonBasic.defaultProps = {

    type: 'primary',
    disabled: false,
    rounded: false,

}


ButtonBasic.propTypes = {

    type: PropTypes.oneOf(['primary', 'secondary', 'terinary','link']).isRequired,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    rounded: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number
    ]),
    onClick: PropTypes.func.isRequired

}

export default memo(ButtonBasic);