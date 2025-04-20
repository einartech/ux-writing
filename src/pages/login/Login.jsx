import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <>
      <Header />
      <main className={styles.loginPageContainer}>
        <form className={styles.loginForm}>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Login</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
