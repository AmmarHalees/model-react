import React from 'react';

import styles from './ResponsiveList.module.css';

const ResponsiveList = ({children}) => {
    return ( 

        <div className={styles.responsiveList}>

            {children}
            
        </div>

     );
}
 
export default ResponsiveList;