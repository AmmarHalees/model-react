import React from 'react';
import styles from './DropDownMenu.module.css';



const DropDownMenu = ({ children }) => {
    return (<ul className={styles.dropdown}>

        {children}
    </ul>);
}

export default DropDownMenu;