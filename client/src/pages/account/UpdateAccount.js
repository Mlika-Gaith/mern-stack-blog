import img from "../../images/avatar.png";
import styles from "./UpdateAccount.module.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
function UpdateAccount() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:8081/images/";
  const [file, setFile] = useState("");
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [confirmPassword, setConfirmPassword] = useState(user.password);
  const [lastName, setLastName] = useState(user.lastName);
  const [firstName, setFirstName] = useState(user.firstName);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const old_username = user.username;
    const old_profil_picture = user.profilPicture;
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
      firstName,
      lastName,
      profilPicture: "",
    };
    if (password === confirmPassword) {
      if (email && username && password) {
        if (file) {
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          updatedUser.profilPicture = filename;
          try {
            let response = await axios.post(
              "http://localhost:8081/file/upload/",
              data
            );
          } catch (error) {
            console.log(error);
          }
        }
        try {
          const response = await axios.put(
            "http://localhost:8081/users/update/" + user._id,
            updatedUser
          );
          setSuccess(true);
          //perform update posts and comments here
          /* update posts' username*/
          try {
            await axios.post("http://localhost:8081/posts/post/username", {
              old_username: old_username,
              username: username,
            });
          } catch (err) {
            console.log(err);
          }
          /* update user comments here*/
          try {
            await axios.post("http://localhost:8081/comments/comment/update", {
              old_username: old_username,
              new_username: username,
              old_profil_picture: old_profil_picture,
              new_profil_picture: updatedUser.profilPicture,
            });
          } catch (err) {
            console.log(err);
          }
          const newUser = {
            userId: response.data._id,
            username: response.data.username,
            email: response.data.email,
            lastName: response.data.lastName,
            firstName: response.data.firstName,
            profilPicture: response.data.profilPicture,
            createdAt: response.data.createdAt,
          };
          dispatch({ type: "UPDATE_SUCCESS", payload: newUser });
        } catch (error) {
          dispatch({ type: "UPDATE_FAILURE" });
        }
      } else {
        window.alert("username, email and password are obligatory !!");
      }
    } else {
      window.alert("passwords don't match !!");
    }
  };

  return (
    <div className={styles.infoContainer}>
      <h2>Edit your Account</h2>
      <div className={styles.profilImgContainer}>
        {user.profilPicture ? (
          <img src={PF + user.profilPicture} alt="" />
        ) : (
          <img src={file ? URL.createObjectURL(file) : img} alt="" />
        )}

        <input
          type="file"
          id="imgUpload"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="imgUpload">
          change profil image : <i className="fa-solid fa-images"></i>
        </label>
      </div>
      <form action="" className={styles.accountInfo} onSubmit={handleSubmit}>
        <div className={styles.name_email}>
          <h2>Account Inforamtion</h2>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="first name "
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="last name "
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="example@host.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.password}>
          <h2>Change Password</h2>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password1"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="password2">Confrim Password</label>
          <input
            type="password"
            id="password2"
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">save changes</button>
          {success && (
            <span className={styles.success}>Profile updated Sucessfully</span>
          )}
        </div>
      </form>
    </div>
  );
}
export default UpdateAccount;
