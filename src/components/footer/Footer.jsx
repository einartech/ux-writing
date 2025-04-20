import styles from "./Footer.module.css";
import Navbar from "../navbar/Navbar";
import NavItem from "../navitem/NavItem";
import Logo from "../logo/Logo";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Logo />
      <Navbar>
        <NavItem href="/privacypolicy" text="Privacy Policy" />
        <NavItem href="#terms" text="Terms of Service" />
        <NavItem href="#contact" text="Contact Us" />
      </Navbar>
      <div className={styles.iconContainer}>
        <FaFacebook className={styles.icon} />
        <FaGithub className={styles.icon} />
        <FaInstagram className={styles.icon} />
      </div>
    </footer>
  );
}
