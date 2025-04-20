import styles from "./Header.module.css";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import NavItem from "../navitem/NavItem";
import Button from "../button/Button";
import clsx from "clsx";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <Navbar>
        <NavItem href="/welcome" text="Home" />
        <NavItem href="/about" text="About" />
        <NavItem href="/home" text="Comics" />
      </Navbar>
      <Button className={clsx(styles.button, styles.logIn)} text="Log in" />
      <Button className={clsx(styles.button, styles.sell)} text="Sell" />
    </header>
  );
}
