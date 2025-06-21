import React from "react";
import Masonry from "react-masonry-css";
import ImageCard from "./ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

type Image = {
  id: string;
  urls: {
    small: string;
    regular?: string;
    full?: string;
  };
  alt_description: string;
  likes: number;
  user: {
    name: string;
  };
};
type ImageGalleryProps = {
  gallery: Image[];
  onImageClick: (url: string) => void;
};
const ImageGallery: React.FC<ImageGalleryProps> = ({ gallery, onImageClick }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className={styles.container}>
      {gallery.length > 0 ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.masonryGrid}
          columnClassName={styles.masonryColumn}
        >
          {gallery.map((image) => (
            <div key={image.id} className={styles.item}>
              <ImageCard image={image} onImageClick={onImageClick} />
            </div>
          ))}
        </Masonry>
      ) : (
        <p className={styles.paragraph}>Still nothing found</p>
      )}
    </div>
  );
};

export default ImageGallery;
