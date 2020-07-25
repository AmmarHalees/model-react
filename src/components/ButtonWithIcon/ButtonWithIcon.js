import React, { memo } from 'react';
import ButtonBasic from '../ButtonBasic/ButtonBasic';
import styles from './ButtonWithIcon.module.css';
import Spinner from '../Loading/Spinner/Spinner';
import PropTypes from 'prop-types'; // ES6

const ButtonWithIcon = ({ children, onClick, type, icon, disabled, size, loading }) => {


    icon = (loading === true ? <Spinner /> : icon);


    return (

        <ButtonBasic type={type} onClick={onClick} disabled={disabled || loading}>

            <div className={styles.buttonWithIcon}>

                <div className={styles.iconContainer}>

                    {icon}

                </div>

                <div>

                    {children}

                </div>


            </div>

        </ButtonBasic>

    );
}

ButtonWithIcon.propTypes = {

    icon: PropTypes.element.isRequired,

}

export default memo(ButtonWithIcon);