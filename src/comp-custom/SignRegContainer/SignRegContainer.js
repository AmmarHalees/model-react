import React from 'react';
import styles from './SignRegContainer.module.css';

const SignRegContainer = ({children}) => {


    return (

        <div className={styles.signRegContainer}>

                {children}

        </div>

    );
}

export default SignRegContainer;