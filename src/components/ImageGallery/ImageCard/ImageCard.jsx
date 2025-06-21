import React from "react";
import styles from "./ImageCard.module.css";
const ImageCard = ({ image, onImageClick }) => {
  return (
    <div
      className={styles.card}
      tabIndex={0}
      onClick={() => onImageClick(image.urls.regular)}
    >
      {image.urls?.small ? (
        <>
          <img
            className={styles.item}
            src={image.urls.small}
            alt={image.alt_description}
          />

          <div className={styles.overlay}>
            <p>❤️ {image.likes}</p>
            <p>📸 {image.user.name}</p>
          </div>
        </>
      ) : (
        <p className={styles.paragraph}>No images available</p>
      )}
    </div>
  );
};

export default ImageCard;
