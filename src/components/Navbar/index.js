import Button from "../UI/Button";
import { LogoImage } from "../../assets";


import styles from "./Navbar.module.css";
const Navbar = ({ onShowForm }) => {
  const showFormHandler = () => {
    onShowForm(true);
  };

  return (
    <header className={styles.navbar}>
      <img src={LogoImage} className={styles.logo} alt="book bookshelf" />
      <Button title="Add Books" variant="outline" onClick={showFormHandler} />
    </header>
  );
};

export default Navbar;
