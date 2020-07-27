import React from 'react';
import styles from './ResultBase.module.css';
import ResultConfig from './result.config.json';


const ResultBase = ({ type }) => {
    return (

        <div className={`${styles.resultBase} _layout _center`}>


            <h1>
                {ResultConfig[type]['title']}
            </h1>

            <p>
                {ResultConfig[type]['description']}

            </p>



        </div>

    );
}

export default ResultBase;