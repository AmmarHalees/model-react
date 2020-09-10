import React from 'react';
import Modal from 'react-modal';
import styles from './ModalBasic.module.css';

Modal.setAppElement('#root');

const ModalBasic = ({ children, isOpen, onAfterOpen, onRequestClose, contentLabel }) => {

  return (

    <Modal

      isOpen={isOpen}
      onAfterOpen={() => {
        document.body.style.overflow = "hidden";

        if (onAfterOpen) {

          onAfterOpen();

        }
      }}

      onRequestClose={() => {
        
        document.body.style.overflow = ""; 
    
      if (onRequestClose) {

        onRequestClose();

      }
    }}

      contentLabel={contentLabel}
    //   closeTimeoutMS={300}
      overlayClassName={styles.overlay}
      className={styles.content}

    >
      <h1>hiii</h1>
      <div className={styles.imageContainer}>

              {children}

      </div>

    </Modal>


  );
}

export default ModalBasic;