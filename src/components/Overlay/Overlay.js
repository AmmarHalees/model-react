import React from 'react';
import styles from './Overlay.module.css';

const Overlay = ({background}) => {
    return (   <div style={{background}} className={styles.overlay}></div>      );
}
 
export default Overlay;