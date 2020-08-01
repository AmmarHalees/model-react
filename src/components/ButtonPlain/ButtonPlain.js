import React, { memo } from 'react';
import ButtonBasic from '../ButtonBasic/ButtonBasic';
import styles from './ButtonPlain.module.css';
import PropTypes from 'prop-types'; // ES6

const ButtonPlain = ({ children, onClick, type, icon, disabled, loading }) => {


    return (

        <ButtonBasic type={type} onClick={onClick} disabled={disabled}>

            <div className={styles.ButtonPlain}>


                    {children}



            </div>


        </ButtonBasic>

    );
}

ButtonPlain.propTypes = {

    icon: PropTypes.element.isRequired,

}

export default memo(ButtonPlain);