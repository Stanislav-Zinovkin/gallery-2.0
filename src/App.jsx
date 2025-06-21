import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMore from "./components/loadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [loading, setLoading] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState(null);
  const myApiKey = "QZISFSen2b0BM38Ec0hNTK8ZDw23fcBV4MezLamP5Uc";

  const prevPageRef = useRef(1);

  useEffect(() => {
    if (!query) return;

    async function fetchGallery() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            headers: {
              Authorization: `Client-ID ${myApiKey}`,
            },
            params: { query: query, page: page },
          }
        );

        setGallery((prevGallery) =>
          page === 1
            ? response.data.results
            : [...prevGallery, ...response.data.results]
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, [query, page]);

  const handleSubmit = (newQuery) => {
    setQuery(newQuery);
    setGallery([]);
    setPage(1);
  };
  const openModal = (imageUrl) => {
    setModalIsOpen(true);
    setModalImageUrl(imageUrl);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (page > 1 && page !== prevPageRef.current) {
      setTimeout(() => {
        window.scrollBy({
          top: 1000,
          behavior: "smooth",
        });
      }, 300);
      prevPageRef.current = page;
    }
  }, [page]);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <Loader loading={loading} />
      <ImageGallery gallery={gallery} onImageClick={openModal} />
      <ErrorMessage error={error} />
      <LoadMore
        loading={loading}
        gallery={gallery}
        handleLoadMore={() => setPage((prevPage) => prevPage + 1)}
      />
      <ImageModal
        isOpen={modalIsOpen}
        imageUrl={modalImageUrl}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
