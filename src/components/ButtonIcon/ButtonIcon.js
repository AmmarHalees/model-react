import React, { memo } from 'react';
import ButtonBase from '../ButtonBase/ButtonBase';
import styles from './ButtonIcon.module.css';

const ButtonIcon = ({ onClick, type, icon, disabled, rounded, size ='medium', title , loading }) => {
    return (

        <ButtonBase type={type} onClick={onClick} disabled={disabled} rounded title={title} loading={loading}>

            <div className={styles.ButtonIcon}>

                <div className={`${styles.iconContainer} ${styles[size]}`} >

                    {icon}

                </div>

            </div>

        </ButtonBase>

    );
}

export default memo(ButtonIcon);