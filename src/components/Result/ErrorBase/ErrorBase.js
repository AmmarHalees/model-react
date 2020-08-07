import React from 'react';
import styles from './ErrorBase.module.css';
import data from './ErrorMap.config.json';
import ButtonBase from '../../ButtonBase/ButtonBase';
import { useHistory } from "react-router-dom";

const ErrorBase = ({ type , callToAction ,props }) => {

    const error_object = data[type];

    const { className, src, title, description } = error_object;

    return (


        <div className={`${styles[className]} ${styles.errorBase} _layout _center`}  >

            <img src={src} alt={title} />

            <h1>
                {title}
            </h1>

            <p>{description}</p>

            <ButtonBase type='primary' onClick={callToAction}>

                Go back home

            </ButtonBase>


        </div>

    );
}

export default ErrorBase;