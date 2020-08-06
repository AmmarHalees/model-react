import React from 'react';
import styles from './PostCard.module.css'
import PaperBasic from '../../components/PaperBasic/PaperBasic';
import ImageBasic from '../../components/ImageBasic/ImageBasic';
import data from '../../utils/constants/strings.json';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import { ReactComponent as CloseIcon } from '../../assets/icons/x.svg';
import Overlay from '../../components/Overlay/Overlay';



const PostCard = ({ title = data['default title'], onClick ,paragraph = data["default paragraph"], src = data['fake tall image'] }) => {
    return (


        <PaperBasic>

            <div className={styles.postCard} onClick={onClick}>

                <Overlay/>

                <div className={styles.postOverlay}></div>

                <ImageBasic src={src} alt="car" />

                <div className={styles.postControls}>

                        <h2 className={styles.title}>sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</h2>
        

                        <div className={styles.postControlButtons}>

                            <ButtonIcon icon={<CloseIcon />} size='small' type='primary' onClick={() => alert('hi')} />
                            <ButtonIcon icon={<CloseIcon />} size='small' type='primary' onClick={() => alert('hi')} />
                            <ButtonIcon icon={<CloseIcon />} size='small' type='primary' onClick={() => alert('hi')} />


                        </div>


                    </div>




                </div>



            </PaperBasic>



    );
}

export default PostCard;