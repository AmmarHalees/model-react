import React from 'react';
import styles from './InfoCard.module.css'
import PaperBasic from '../../components/PaperBasic/PaperBasic';
import ImageBasic from '../../components/ImageBasic/ImageBasic';
import data from '../../utils/constants/strings.json';


console.log(data['fake normal sized image'])


const InfoCard = ({ title = data['default title'], paragraph = data["default paragraph"], src = data['fake normal sized image'] }) => {
    return (

        <PaperBasic>

            <div className={styles.card} >

                <div className={styles.cardImage}>

                    <ImageBasic src={src} />

                </div>

                <div className={styles.cardBody}>

                    <h3>{title}</h3>

                    <p>{paragraph}</p>

                </div>

            </div>

        </PaperBasic>

    );
}

export default InfoCard;