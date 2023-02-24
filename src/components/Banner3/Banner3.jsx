import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styles from "./Banner.module.scss";

const Banner3 = () => {
  return (
    <div className={styles.container}>
      <StaticImage
        // style={{ position: "absolute" }}
        // width={3880}
        // height={1500}
        src="../../images/banner3.jpg"
        alt="banner"
        className={styles.wrap}
        // layout="responsive"
      />
      <div className={styles.titelBlock}>
        <h1 className={styles.h1}>ПЛАСТИКОВЫЕ ОКНА В КИЗЛЯРЕ ОТ ЮАР</h1>
        <p className={styles.p}>
          Изготовления пластиковых и алюминиевых окон и дверей, жалюзей,
          рольставней.
        </p>

        <a
          href="https://wa.me/+79285502551"
          className={`${styles.slideBtn} ${styles.mainBtn}`}
        >
          Заказать
        </a>
      </div>
    </div>
  );
};

Banner3.displayName = "Banner3";

export default Banner3;
