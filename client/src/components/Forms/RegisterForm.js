import styles from "./Form.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    // when clicking submit prevent page from refreching
    e.preventDefault();
    // set error to empty string
    setError("");
    // verify same password
    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("all fields required");
    } else {
      if (password === confirmPassword) {
        // send data to server
        try {
          const response = await axios.post("/register/", {
            username,
            email,
            password,
          });
          //console.log(response);
          navigate("/login");
        } catch (error) {
          setError(error.response.data);
        }
      } else {
        setError("passwords don't match");
      }
    }
  };

  return (
    <form action="" className={styles.form}>
      {error ? (
        <div className={styles.error_container}>
          <span>{error}</span>
        </div>
      ) : null}

      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label htmlFor="email">email</label>
      <input
        type="email"
        id="email"
        placeholder="example@host.com"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        placeholder="password"
        id="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <label htmlFor="password2">confirm password</label>
      <input
        type="password"
        placeholder="confirm password"
        id="password2"
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <button className={styles.form_btn} onClick={onSubmit}>
        Sign up
      </button>
    </form>
  );
}
export default Form;
