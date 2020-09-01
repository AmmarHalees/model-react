import React, { useState } from 'react';
import styles from './NavItem.module.css';
import { Link, useRouteMatch } from 'react-router-dom';

const NavItem = ({ icon, to, title, children, activeOnlyWhenExact}) => {


    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
      });

      console.log(match)



    const [open, setOpen] = useState(false);


    function handleMouseEvents () {

        setOpen(!open);

    }


    return (
        <li className={`${styles.navItem} ${match? styles.selected : ''}`} onClick={handleMouseEvents} >

            <Link to={to}  title={title} >

                {icon}

            </Link>

            {open && children}


        </li>

    );
}

export default NavItem;