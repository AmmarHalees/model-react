import React, { memo } from 'react';
import Headroom from 'react-headroom';
import WebHeader from './WebHeader.js/WebHeader';
import MobileHeader from './MobileHeader/MobileHeader';
import { getCSSvariableValue } from '../../../utils/helpers';
import styles from './SiteHeader.module.css';

const SiteHeader = ({ auth_state, isDesktop }) => {
    return (


        <Headroom style={{ zIndex: getCSSvariableValue('--header') }}   >

            <header className={styles.header}>

                {isDesktop ?



                    <WebHeader auth_state={auth_state} />

                    :

                    <MobileHeader auth_state={auth_state} />
                }


            </header>


        </Headroom>

    );
}


export default memo(SiteHeader);
