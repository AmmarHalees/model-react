import React from 'react';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
// import styles from './ModalPost.module.css';
import data from '../../utils/constants/strings.json';


const ModalPost = ({ closeModal, CloseIcon }) => {
    return (

        <div >

            {/* <div className={styles.close}>

                <ButtonIcon onClick={closeModal} icon={<CloseIcon />} type="terinary" />

            </div> */}

            <img style={{

                width: "auto",
                maxHeight: "80vh",
                maxWidth: '100%',
                display:'block'



            }}
                alt="hi"

                src="https://besthqwallpapers.com/Uploads/9-10-2017/23332/thumb2-hyundai-accent-2018-rear-view-sedan-red-accent.jpg" />



        </div>


    );
}

export default ModalPost;