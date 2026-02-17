import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <p>Shopping website</p>
      <Link to="/checkout">
        <div className={styles.linkButton}>
          <ShoppingCart color="#f97316" size={20} />
        </div>
      </Link>
    </header>
  );
}

export default Header;
