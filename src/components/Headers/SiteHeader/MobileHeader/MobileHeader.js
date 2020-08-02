import React , {memo} from 'react';
import mobileHeaderStyles from './MobileHeader.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as SiteLogo } from '../../../../assets/images/FAKE_LOGO.svg';
import WebHeaderRightSideGuest from '../../../../comp-guest-only/WebHeaderRightSideGuest/WebHeaderRightSideGuest';



const MobileHeader = ({auth_state}) => {
    return (



        <header className={mobileHeaderStyles.header}>

            {/* <div className={`${mobileHeaderStyles.innerHeader} _layout`}>

                <Link to='/' style={{ width: 'fit-content', height: 'fit-content' }} >

                    <SiteLogo style={{ width: '50px', height: '50px' }} />


                </Link>

                <Link to='/list' className={mobileHeaderStyles.announcement}>Announcment!</Link >


                {

                    auth_state ? 'in' : <MobileHeaderRightSideGuest />


                }


            </div> */}

        </header>

    );
}

export default memo(MobileHeader);