import React from 'react';
import styles from './Navbar.module.css';
import NavItem from '../NavItem/NavItem';
import { ReactComponent as HomeIcon } from '../../../assets/icons/home.svg';
import { ReactComponent as MessageIcon } from '../../../assets/icons/mail.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/icons/settings.svg';
import DropDownItem from '../../DropDown/DropDownItem/DropDownItem';
import DropDownMenu from '../../DropDown/DropDownMenu/DropDownMenu';

const Navbar = ({bottomnav}) => {


    return (

        <nav className={`${styles.navbar} ${bottomnav ? styles.bottomnav : ''}`}>

            <ul className={styles.navbarList}>


                <NavItem icon={<HomeIcon />} to='/' title='Home' activeOnlyWhenExact />
                <NavItem icon={<MessageIcon />} to='/requests' activeOnlyWhenExact title='Requests' />
                <NavItem icon={<SettingsIcon />} to='/settings' activeOnlyWhenExact title='Settings'/>

                {/* <NavItem icon={<SettingsIcon />} to='#' activeOnlyWhenExact title='Settings'>

                    <DropDownMenu>

                        <DropDownItem>Item</DropDownItem>
                        <DropDownItem>Item</DropDownItem>
                        <DropDownItem>Item</DropDownItem>

                    </DropDownMenu>
                </NavItem> */}



            </ul>

        </nav>

    );
}

export default Navbar;