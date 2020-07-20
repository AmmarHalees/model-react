import React from 'react';
import styles from './Chip.module.css';

const Chip = ({ text }) => {
    return (<span className={styles.chip}>{text}</span>);
}

export default Chip;