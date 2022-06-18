import Categories from "../Categories/Categories";
import Filters from "../Filters/Filters";
import styles from "./Searcharea.module.css";
export default function SearchArea() {
  return (
    <div className={styles.search_box}>
      <form className={styles.search_form}>
        <p className={styles.area_title}>Search</p>
        <div className={styles.area_form}>
          <input type="text" placeholder="Search ...." />
          <button className={styles.search_btn}>search</button>
        </div>
      </form>
      <form className={styles.search_form}>
        <p className={styles.area_title}>Filter</p>
        <div className={styles.filters}>
          <Filters />
        </div>
      </form>
    </div>
  );
}
