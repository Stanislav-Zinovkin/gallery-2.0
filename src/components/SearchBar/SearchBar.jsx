import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast("The field must be filled in.");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={styles.head}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onChange}
          className={styles.inpt}
        />
        <button type="submit" className={styles.btn}>
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
