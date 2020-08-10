import React from 'react';
import styles from './PaperBasic.module.css'

const PaperBasic = ({children}) => {
    return ( 

        <section className={styles.paper} > {/* ((NOTE)) Semantic issue */}

            
            {children}


        </section>

     );
}
 
export default PaperBasic;