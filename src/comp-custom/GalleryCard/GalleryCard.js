import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'gestalt';
import styles from './GalleryCard.module.css';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import { ReactComponent as CloseIcon } from '../../assets/icons/x.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as TagIcon } from '../../assets/icons/share.svg';
import ImageBasic from '../../components/ImageBasic/ImageBasic';

const GalleryCard = ({ data, location, onControlClick }) => {
    return (


        <Link
            push
            key={data.id}
            to={{
                pathname: `/photo/${data.id}`,
                state: { background: location }
            }}
        >
            <div className={styles.postCard}>

                <Image
                    alt={data.alt_description}
                    color={data.color}
                    naturalHeight={data.height}
                    naturalWidth={data.width}
                    src={data.urls.small}

                    // srcSet = {`${data.urls.small} 400w,${data.urls.regular} 800w, ${data.urls.full} 1000w`}
                    loading='lazy'
                />

                <div className={styles.postControls}>

                    <h2 className={styles.title}>{data.alt_description}</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>

                        <Link to={`/@${data.user.username}`}>
                            <ImageBasic rounded type='post' src={data.user.profile_image.medium} />

                        </Link>

                        <div className={styles.postControlButtons}>

                            <ButtonIcon icon={<CloseIcon />} size='medium' title='Close' type='link'
                                onClick={(e) => onControlClick(e, data.id, 'close')}
                            />
                            <ButtonIcon icon={<HeartIcon />} size='medium' title='Like' type='link'
                                onClick={(e) => onControlClick(e, data.id, 'heart')}
                            />
                            <ButtonIcon icon={<TagIcon />} size='medium' title='Save' type='link'
                                onClick={(e) => onControlClick(e, data.id, 'tag')}
                            />


                        </div>
                    </div>


                </div>

            </div>
        </Link>


    );
}

export default GalleryCard;