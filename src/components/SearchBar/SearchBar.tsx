import React, { ChangeEvent, FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
