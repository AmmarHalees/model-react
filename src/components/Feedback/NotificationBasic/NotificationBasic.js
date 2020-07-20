import React from 'react';
import PaperBasic from '../../PaperBasic/PaperBasic';
import data from '../../../utils/constants/strings.json';
import styles from './NotificationBasic.module.css';

const NotificationBasic = ({ text = data['default notification text'] }) => {
    return (

        <PaperBasic>
            <div className={styles.notification}>

                {text}

            </div>

        </PaperBasic>);
}

export default NotificationBasic;