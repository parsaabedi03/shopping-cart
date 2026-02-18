import { Search } from "lucide-react";

import styles from "./SearchBar.module.css";

function SearchBar() {
  const handleSearch = () => {};

  return (
    <div className={styles.searchBarContainer}>
      <input type="text" placeholder="Search..." name="" />
      <button onClick={handleSearch}>
        <Search className={styles.icon} />
      </button>
    </div>
  );
}

export default SearchBar;
