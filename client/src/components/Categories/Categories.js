import "./Categories.css";
import { useState } from "react";
function Categories(props) {
  const categories = [
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
  const [checkedState, setCheckedSate] = useState(
    new Array(categories.length).fill(false)
  );
  const handleChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedSate(updatedCheckedState);
    let cats = [];
    for (var key in updatedCheckedState) {
      if (updatedCheckedState[key] === true) {
        cats.push(categories[key]);
      }
    }
    props.categories(cats);
  };

  return (
    <ul className="categories">
      {categories.map((item, index) => {
        return (
          <li className="category" key={index}>
            <input
              type="checkbox"
              id={"checkbox" + index}
              value={item}
              checked={checkedState[index]}
              onChange={() => handleChange(index)}
            />
            <label htmlFor={"checkbox" + index}>{item}</label>
          </li>
        );
      })}
    </ul>
  );
}
export default Categories;
