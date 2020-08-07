import React, { memo } from 'react';
import Headroom from 'react-headroom';
import WebHeader from './WebHeader.js/WebHeader';
import MobileHeader from './MobileHeader/MobileHeader';
import { getCSSvariableValue } from '../../../utils/helpers';


const SiteHeader = ({ auth_state, isDesktop ,signIn}) => {
    return (


        <Headroom 
        
        style={{zIndex:getCSSvariableValue('--header')   }}
        >

            {isDesktop ?

                <WebHeader auth_state={auth_state}/>

                :

                <MobileHeader auth_state={auth_state} />
            }



        </Headroom>

    );
}


export default memo(SiteHeader);
