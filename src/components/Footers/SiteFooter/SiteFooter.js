import React, { memo } from 'react';
import FooterStyles from './SiteFooter.module.css';

const SiteFooter = () => {
    return (
        <footer className={FooterStyles.footer} >

            <div className="_container">

                footer

            </div>

        </footer>


    );
}

export default memo(SiteFooter);