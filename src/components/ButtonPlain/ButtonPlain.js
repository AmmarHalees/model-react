import React, { memo } from 'react';
import ButtonBase from '../ButtonBase/ButtonBase';
import styles from './ButtonPlain.module.css';
import PropTypes from 'prop-types'; // ES6

const ButtonPlain = ({ children, onClick, type, icon, disabled, loading , title }) => {


    return (

        <ButtonBase type={type} onClick={onClick} disabled={disabled} title={title}>

            <div className={styles.ButtonPlain}>


                    {children}



            </div>


        </ButtonBase>

    );
}

ButtonPlain.propTypes = {

    icon: PropTypes.element.isRequired,

}

export default memo(ButtonPlain);