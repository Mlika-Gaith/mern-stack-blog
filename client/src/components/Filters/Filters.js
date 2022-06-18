import styles from "./Filters.module.css";
export default function Filters(props) {
  const filters = [
    "tech",
    "sports",
    "culture",
    "science",
    "student life",
    "entertainement",
    "certifications",
    "camping",
    "social media",
    "leadership",
    "arts",
    "academic",
  ];
  return filters.map((filter) => (
    <button className={styles.filter}>{filter}</button>
  ));
}
