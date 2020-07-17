import React from 'react';
import styles from './CardBasic.module.css'
import PaperBasic from '../PaperBasic/PaperBasic';
import ImageBasic from '../ImageBasic/ImageBasic';

const CardBasic = ({ title, paragraph, src }) => {
    return (


        <PaperBasic>

            <div className={styles.card} >


                <div className={styles.cardImage}>

                    <ImageBasic src="https://previews.123rf.com/images/jenyaolya/jenyaolya1906/jenyaolya190600036/124355934-little-kid-boy-walking-alone-in-the-forest-.jpg" alt="A boy walking" />
               
                </div>

                <div className={styles.cardBody}>

                    <h3>Title of card</h3>

                    <p>Hi there my name is ammar</p>

                </div>

            </div>

        </PaperBasic>


    );
}

export default CardBasic;