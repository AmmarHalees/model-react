import React from 'react';
import PaperBasic from '../../components/PaperBasic/PaperBasic';
import styles from './InnerContent.module.css';

const InnerContent = ({children}) => {
    return ( 

        <PaperBasic>

            <div className={`${styles.innerContent}  _layout`}> {/* ((NOTE)) Semantic issue */}


                {children}

            </div>

        </PaperBasic>

     );
}
 
export default InnerContent;