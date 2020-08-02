import React, { memo } from 'react';
import Headroom from 'react-headroom';
import WebHeader from './WebHeader.js/WebHeader';
import MobileHeader from './MobileHeader/MobileHeader';


const SiteHeader = ({ auth_state, isDesktop ,signIn}) => {
    return (


        <Headroom
        //  wrapperStyle={{ height: "50px", zIndex: "2" }} 
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
