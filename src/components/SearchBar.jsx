import { Search } from "lucide-react";

import styles from "./SearchBar.module.css";

function SearchBar({ search, setSearch, handleSearch }) {
  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Search..."
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>
        <Search className={styles.icon} />
      </button>
    </div>
  );
}

export default SearchBar;
