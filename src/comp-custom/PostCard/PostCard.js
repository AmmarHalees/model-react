import React from 'react';
import styles from './PostCard.module.css'
import PaperBasic from '../../components/PaperBasic/PaperBasic';
import ImageBasic from '../../components/ImageBasic/ImageBasic';
import data from '../../utils/constants/strings.json';




const PostCard = ({ title = data['default title'], paragraph = data["default paragraph"], src = data['fake normal sized image'] }) => {
    return (


        <PaperBasic>

            <div className={styles.postCard}>

                <ImageBasic src={src} alt="car" />

                <div className={styles.postControls}>
                    <h2 className={styles.title}>sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</h2>

                </div>


            </div>



        </PaperBasic>



    );
}

export default PostCard;