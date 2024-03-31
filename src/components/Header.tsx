import logo from "./../assets/logo.svg";
import styles from "./Header.module.css";
export function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo do aplicativo" />
    </div>
  );
}
