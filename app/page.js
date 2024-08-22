import React from "react";
import HomePage from "./pages/home/page";
import styles from "./pages/style/styles";

export default function Home() {
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <HomePage />
      </div>
    </div>
  );
}
