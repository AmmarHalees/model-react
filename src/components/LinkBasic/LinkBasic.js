import React from 'react';
import styles from './LinkBasic.module.css';


const LinkBasic = ({children,to, title="external website"}) => {
    return ( <a className={styles.link} href={to} title={title}>{children}</a> );
}
 
export default LinkBasic;