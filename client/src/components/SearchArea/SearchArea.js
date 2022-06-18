import Filters from "../Filters/Filters";
import styles from "./Searcharea.module.css";

export default function SearchArea(props) {
  return (
    <div className={styles.search_box}>
      <form className={styles.search_form}>
        <p className={styles.area_title}>Search</p>
        <div className={styles.area_form}>
          <input
            type="text"
            placeholder="Search ...."
            onChange={(e) => {
              let filter = e.target.value;
              if (filter) {
                props.setSearch({ filter });
              } else {
                props.setSearch({});
              }
            }}
            value={props.search.get("filter") || ""}
          />
        </div>
      </form>
      <form className={styles.search_form}>
        <p className={styles.area_title}>Filter</p>
        <div className={styles.filters}>
          <Filters filter={props.filter} />
        </div>
      </form>
    </div>
  );
}
