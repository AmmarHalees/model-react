import React from 'react';
import styles from './SliderCard.module.css';
import Overlay from '../../components/Overlay/Overlay';

const SliderCard = ({title,background}) => {
    return (




        <div className={styles.card}

            style={{

                background: `url(${background})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

            }}

        >

            <h3>{title}</h3>

            {/* <Overlay/> */}

        
        </div>



    );
}

export default SliderCard;