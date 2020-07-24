import React from 'react';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import styles from './ModalPost.module.css';


const ModalPost = ({ closeModal, CloseIcon, data }) => {
    return (

        <div className={styles.container}>

            <div className={styles.close}>

                <ButtonIcon onClick={closeModal} icon={<CloseIcon />} type="terinary" />

            </div>

            <img style={{

                width: "auto",
                maxHeight: "80vh",
                maxWidth: '100%',








                transform: 'translate(-50%, -50%)',
                position: 'absolute',
                top: '50%',
                left: '50%'

            }}
                alt="hi"

                src={data['fake normal sized image']} />



        </div>


    );
}

export default ModalPost;