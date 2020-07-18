import React, { memo } from 'react';
import ButtonBasic from '../ButtonBasic/ButtonBasic';
import styles from './ButtonWithIcon.module.css';

const ButtonWithIcon = ({ children, onClick, type, icon , size}) => {
    return (

        <ButtonBasic type={type} onClick={onClick}>

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

export default memo(ButtonWithIcon);