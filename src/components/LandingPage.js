import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LandingPage.module.css";

export default function LandingPage() {
  return (
    <>
      <div className={styles.LandingPage}>
        <h1 className={styles.Landingh1}>Hello!</h1>
        <h2 className={styles.Landingh2}>welcome to your personal todo list</h2>
        <div>
          <Link to="/todolist" className={styles.LandingLink}>
            Let's do this.
          </Link>
        </div>
      </div>
    </>
  );
}
