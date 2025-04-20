import styles from "./Logo.module.css";
import Image from "../image/Image";
import logo from "../../assets/images/logo.png";

export default function Logo() {
  return (
    <>
      <div className={styles.logoContainer}>
        <Image img={logo} alt="Logo de Boom Comics" />
      </div>
    </>
  );
}
