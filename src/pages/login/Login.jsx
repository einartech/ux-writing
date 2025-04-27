import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Login.module.css";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className={styles.loginPageContainer}>
        <form className={styles.loginForm}>
          <h1>{t("login.title")}</h1>
          <button type="submit">{t("login.noAccount")}</button>
          <label htmlFor="email">{t("login.emailLabel")}</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            placeholder={t("login.emailPlaceholder")} 
          />
          
          <label htmlFor="password">{t("login.passwordLabel")}</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
            placeholder={t("login.passwordPlaceholder")} 
          />
          
          <button type="submit">{t("login.button")}</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
