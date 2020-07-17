import React from 'react';
import styles from './PaperBasic.module.css'

const PaperBasic = ({children}) => {
    return ( 

        <div className={styles.paper} >

            
            {children}


        </div>

     );
}
 
export default PaperBasic;