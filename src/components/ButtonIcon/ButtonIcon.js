import React, { memo } from 'react';
import ButtonBasic from '../ButtonBasic/ButtonBasic';
import styles from './ButtonIcon.module.css';

const ButtonIcon = ({ children, onClick, type, icon , disabled, size}) => {
    return (

        <ButtonBasic type={type} onClick={onClick} disabled={disabled}>

            <div className={styles.ButtonIcon}>

                <div className={styles.iconContainer}>

                    {icon}

                </div>

            </div>

        </ButtonBasic>

    );
}

export default memo(ButtonIcon);