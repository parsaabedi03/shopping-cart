import { ChartBar } from "lucide-react";

import styles from "./Categories.module.css";

function Categories({ handleCategories, categoryQuery }) {
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
          <li
            key={item.id}
            className={
              item.name.toLowerCase() === categoryQuery ? styles.selected : ""
            }
            onClick={() => handleCategories(item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
