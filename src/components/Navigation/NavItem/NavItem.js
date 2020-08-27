import React, { useState } from 'react';
import styles from './NavItem.module.css';
import { Link } from 'react-router-dom';

const NavItem = ({ icon, to, title, children, selected =false }) => {

    const [open, setOpen] = useState(false);


    function handleMouseEvents () {

        setOpen(!open);

    }


    return (
        <li className={`${styles.navItem} ${selected? styles.selected : ''}`} onClick={handleMouseEvents} >

            <Link to={to}  title={title} >

                {icon}

            </Link>

            {open && children}


        </li>

    );
}

export default NavItem;