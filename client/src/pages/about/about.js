import styles from "./about.module.css";
import about from "../../images/about.png";
function About() {
  return (
    <div className={styles.about_container}>
      <div className={styles.text_container}>
        <h2>Hi there !</h2>
        <p>
          Nice to meet you, I am ghaith and I am a computer science student. I
          am currently learning the MERN stack and this is my first project.
          This is a basic blog website that allows you to write edit and delete
          a blog post and browse through other posts by other users. If you
          don't have an account create one and start posting. Thank you !!
        </p>
      </div>
      <img src={about} alt="" className={styles.about_img} />
    </div>
  );
}
export default About;
