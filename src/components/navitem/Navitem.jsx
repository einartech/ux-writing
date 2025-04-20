import styles from "./Navitem.module.css";

export default function NavItem({ href, text }) {
  return (
    <li className={styles.navItem}>
      <a href={href} className={styles.navLink}>
        {text}
      </a>
    </li>
  );
}
