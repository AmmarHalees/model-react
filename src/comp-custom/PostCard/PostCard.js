import React from 'react';
import styles from './PostCard.module.css'
import PaperBasic from '../../components/PaperBasic/PaperBasic';
import ImageBasic from '../../components/ImageBasic/ImageBasic';
import data from '../../utils/constants/strings.json';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import { ReactComponent as CloseIcon } from '../../assets/icons/x.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as TagIcon } from '../../assets/icons/share.svg';



const PostCard = ({ title =data["default title"],onControlClick, onPostClick, paragraph = data["default paragraph"], url = data['fake tall image'] , id }) => {


    return (


        <PaperBasic>

            <button  className={styles.postCard} onClick={(e)=>onPostClick(e,id)}>

                <div className={styles.postOverlay}></div>

                <ImageBasic src={url} alt="car" />

                <div className={styles.postControls}>

                    <h2 className={styles.title}>{title}</h2>


                    <div className={styles.postControlButtons}>

                        <ButtonIcon icon={<CloseIcon />} size='small' title='Close' type='link' onClick={(e) => onControlClick(e,id,'close')} />
                        <ButtonIcon icon={<HeartIcon />} size='small' title='Like' type='link' onClick={(e) => onControlClick(e,id,'heart')} />
                        <ButtonIcon icon={<TagIcon />} size='small' title='Save' type='link' onClick={(e) => onControlClick(e,id,'tag')} />


                    </div>


                </div>


            </button>


        </PaperBasic>

    );
}

export default PostCard;