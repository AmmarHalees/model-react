import React, { memo, useState } from 'react';
import Headroom from 'react-headroom';
import WebHeader from './WebHeader.js/WebHeader';
import MobileHeader from './MobileHeader/MobileHeader';
import { getCSSvariableValue } from '../../../utils/helpers';
import styles from './SiteHeader.module.css';

const SiteHeader = ({ auth_state, isDesktop }) => {

    const [unFixed, setUnFixed] = useState(true);

    // console.log(unFixed)

    return (


        <Headroom style={{ zIndex: getCSSvariableValue('--header') }}

            onUnfix={() => setUnFixed(true)}

            onUnpin={() => setUnFixed(false)}
            onPin ={() => setUnFixed(false)}
        >

            <header className={`${styles.header} ${unFixed? styles.unfixed : ''}`}>

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
