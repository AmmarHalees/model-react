import React, { memo } from 'react';
import ButtonBasic from '../ButtonBasic/ButtonBasic';
import styles from './ButtonWithIcon.module.css';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';

const ButtonWithIcon = ({ children, onClick, type, icon = <HomeIcon/>, disabled, size}) => {
    return (

        <ButtonBasic type={type} onClick={onClick} disabled={disabled}>

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