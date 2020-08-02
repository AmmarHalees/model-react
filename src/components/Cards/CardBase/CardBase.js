import React from 'react';
import styles from './CardBase.module.css'

const CardBase = ({children}) => {
    return ( 
        <div className={styles.card}>


            {children}

        </div>

     );
}
 
export default CardBase;