import styles from "./Filters.module.css";
import { useState } from "react";
export default function Filters(props) {
  function handleClick(event) {
    event.preventDefault();
    props.filter(event.target.value);
  }
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
    <button className={styles.filter} value={filter} onClick={handleClick}>
      {filter}
    </button>
  ));
}
