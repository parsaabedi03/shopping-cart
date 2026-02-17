import { Heart } from "lucide-react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Developed by parsa with <Heart className="icon" />
      </p>
    </footer>
  );
}

export default Footer;
