import { ChartBar } from "lucide-react";

import styles from "./Categories.module.css";

function Categories() {
  const data = [
    { id: 1, name: "All" },
    { id: 2, name: "Electronics" },
    { id: 3, name: "Jewelery" },
    { id: 4, name: "Men's clothing" },
    { id: 5, name: "Women's clothing" },
  ];
  return (
    <div className={styles.categories}>
      <p>
        <ChartBar className={styles.icon} />
        Categories
      </p>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
