import styles from "./Header.module.css";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import NavItem from "../navitem/NavItem";
import Button from "../button/Button";
import clsx from "clsx";
import { useState} from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const { t, i18n } = useTranslation();
  const [uxMode, setUxMode] = useState('good');
  const navigate = useNavigate();

  const toggleUxMode = () => {
    const newMode = uxMode === 'good' ? 'bad' : 'good';
    setUxMode(newMode);
    i18n.changeLanguage(newMode);
  };

  const handleRegisterClick = () => {
    navigate("/registration");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header className={styles.headerContainer}>
      <Logo />
      <Navbar>
      <NavItem href="/welcome" text={t("nav.home")} />
        <NavItem href="/about" text={t("nav.about")} />
        <NavItem href="/home" text={t("nav.comics")} />
      </Navbar>
      <Button 
        className={clsx(styles.button, styles.register)} 
        text={t("button.register")}
        onClick={handleRegisterClick}
      />
      <Button 
        className={clsx(styles.button, styles.logIn)} 
        text={t("button.login")}
        onClick={handleLoginClick}
      />
      <Button 
        className={clsx(styles.button, styles.sell)} 
        text={t("button.sell")}
      />
      <Button 
        className={clsx(styles.button, styles.toggle)} 
        onClick={toggleUxMode}
        text={t("button.toggle")}
      >
        {uxMode === 'good' ? 'Bad' : 'Good'} UX
      </Button>
    </header>
  );
}
