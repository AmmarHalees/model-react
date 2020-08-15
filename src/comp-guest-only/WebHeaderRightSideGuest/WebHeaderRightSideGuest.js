import React, { memo } from 'react';
import styles from './WebHeaderRightSideGuest.module.css';
import ButtonPlain from '../../components/ButtonPlain/ButtonPlain';

import { useHistory } from 'react-router-dom';


const WebHeaderRightSideGuest = () => {

    const history = useHistory();

    return (

        <div className={styles.WebHeaderRightSideGuest}>

            <ButtonPlain type='link' onClick={() => history.push('/out/signin')} title='Sign in'>
                Sign in
            </ButtonPlain>


            <ButtonPlain type='terinary' onClick={() => history.push('/out/register')} title='Register'>
                Register
            </ButtonPlain>
        </div>
    );
}

export default memo(WebHeaderRightSideGuest)