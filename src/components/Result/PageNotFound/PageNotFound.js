import React from 'react';
import { ReactComponent as PageNotFoundVector } from '../../../assets/images/pagenotfound.svg';
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
    return (

        <div className={styles.pageNotFound}>

            <PageNotFoundVector style={{ width: "100%", height: "100%"}} />

        </div>
    );
}

export default PageNotFound;