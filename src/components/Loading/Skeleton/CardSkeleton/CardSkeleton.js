import React, { memo } from 'react';
import Skeleton from 'react-loading-skeleton';
import styles from './CardSkeleton.module.css';

const CardSkeleton = ({ columns = 1 }) => {

    let cards = [];

    for (let i = 0; i < columns; i++) {

        cards.push(
        
        
        <div key={i} className={styles.cardContainer}>

            <Skeleton duration={1} count={1} height={250} />

            <div className={styles.skeletonRepeat} >

                <Skeleton duration={1} circle={true} height={50} width={50} />
                <Skeleton duration={1} count={1} height={30} />
                <Skeleton duration={1} count={1} height={30} />


            </div>

        </div>)

    }

    return (

        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: '10px' }}>

            {cards.map(card => card)}


        </div>

    );
}

export default memo(CardSkeleton);