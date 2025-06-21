import React from "react";
import styles from "./LoadMoreBtn.module.css";
type LoadMoreProps = {
  loading: boolean;
  gallery: any[];
  handleLoadMore: () => void;
};


const LoadMore: React.FC<LoadMoreProps> = ({ loading, gallery, handleLoadMore }) => {
  return (
    <>
      {gallery.length > 0 && !loading && (
        <button onClick={handleLoadMore} className={styles.btn}>
          Load more
        </button>
      )}
    </>
  );
};
export default LoadMore;
