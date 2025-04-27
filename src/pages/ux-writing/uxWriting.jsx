import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import pagesStyle from "../../pages/Pages.module.css";
import styles from "./UxWriting.module.css";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button"; 
import Footer from "../../components/footer/Footer";
import comics from "../../assets/images/comic-books.jpg";

export default function UxWriting() {
  const { t, i18n } = useTranslation();
  const [uxMode, setUxMode] = useState(i18n.language);
  const [error, setError] = useState("");
    const handleCtaClick = () => {
    console.log(t("home.ctaError"));
    setError(t("home.ctaError")); 
    };

  return (
    <>
      <Header />
      <main className={styles.homePageContainer}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>{t("home.heroTitle")}</h1>
          <p className={styles.heroSubtitle}>{t("home.heroSubtitle")}</p>

          <div className={styles.imageContainer}>
            <img 
              src={ comics } 
              alt={uxMode === "good" ? t("home.goodAlt") : t("home.badAlt")}
              className={styles.heroImage}
            />
              {/* Este butón no nos lleva a ningún lado - A PROPÓSITO! */}
              <Button 
              className={styles.ctaButton} 
              text={t("home.ctaButton")} 
              onClick={handleCtaClick} 
              />
              {error && <p className={styles.errorMessage}>{error}</p>}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
