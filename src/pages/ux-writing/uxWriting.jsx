import pagesStyle from "../../pages/Pages.module.css";
import styles from "./UxWriting.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function UxWriting() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2>uxWriting</h2>

        <p>
        Un texto para presentar UX Writing
        </p>

        <h6 className={styles.blueTitle}>uxWriting</h6>
      </div>
      <Footer />
    </>
  );
}
