import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Registration.module.css"; 
import { useTranslation } from "react-i18next";

export default function Registration() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className={styles.registrationPageContainer}>
        <form className={styles.registrationForm}>
          <h1>{t("registration.title")}</h1>
          <label htmlFor="name">{t("registration.nameLabel")}</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            placeholder={t("registration.namePlaceholder")} 
          />
          <label htmlFor="email">{t("registration.emailLabel")}</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            placeholder={t("registration.emailPlaceholder")} 
          />
          <div className={styles.checkboxContainer}>
            <input 
              type="checkbox" 
              id="agree" 
              name="agree" 
              required 
            />
            <label htmlFor="agree">{t("registration.agreeText")}</label>
          </div>
          <button type="submit">{t("registration.button")}</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
