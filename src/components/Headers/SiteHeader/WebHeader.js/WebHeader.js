import React , {memo} from 'react';
import webHeaderStyles from './WebHeader.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as SiteLogo } from '../../../../assets/images/FAKE_LOGO.svg';
import WebHeaderRightSideGuest from '../../../../comp-guest-only/WebHeaderRightSideGuest/WebHeaderRightSideGuest';
import WebHeaderRightSide from './WebHeaderRightSide/WebHeaderRightSide';



const WebHeader = ({auth_state}) => {

    return (



        <header className={webHeaderStyles.header}>

            <div className={`${webHeaderStyles.innerHeader} _layout`}>

                <Link to='/' style={{ width: 'fit-content', height: 'fit-content' }} >

                    <SiteLogo style={{ width: '50px', height: '50px' }} />


                </Link>

                <Link to='/list' className={webHeaderStyles.announcement}> Announcment!</Link >


                {

                    auth_state ? <WebHeaderRightSide/> : <WebHeaderRightSideGuest />


                }


            </div>

        </header>

    );
}

export default memo(WebHeader);