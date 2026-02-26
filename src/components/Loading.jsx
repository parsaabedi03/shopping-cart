import { Loader2 } from "lucide-react";
import styles from "./Loading.module.css";

function Loading({ size = 40 }) {
  return (
    <div className={styles.container}>
      <Loader2 size={size} className={styles.spinner} />
      <p className={styles.loading}>Loading ...</p>
    </div>
  );
}

export default Loading;
