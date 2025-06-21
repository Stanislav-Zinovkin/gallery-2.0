import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";
const ImageModal = ({ isOpen, imageUrl, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      ariaHideApp={false}
      className={styles.content}
      overlayClassName={styles.overlay}
    >
      <div className={styles.wrapper}>
        <img src={imageUrl} alt="Large image" />
      </div>
    </Modal>
  );
};

export default ImageModal;
