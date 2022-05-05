import styles from "./Form.module.css";
import { useRef, useContext, useState } from "react";
import { Context } from "./../../context/Context";
import axios from "axios";
function Form() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setError("");
    try {
      const response = await axios.post("http://localhost:8081/login/", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(error.response.data);
    }
  };
  return (
    <form action="" className={styles.form} onSubmit={handleSubmit}>
      {error ? (
        <div className={styles.errorContainerLogin}>
          <span>{error}</span>
        </div>
      ) : null}
      <label htmlFor="username">Username</label>
      <input type="text" id="username" placeholder="username" ref={userRef} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="password"
        ref={passwordRef}
      />
      <button className={styles.login} type="submit" disabled={isFetching}>
        Sign in
      </button>
    </form>
  );
}
export default Form;
