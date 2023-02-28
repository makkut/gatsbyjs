import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styles from "./Banner.module.scss";
import { useStaticQuery, graphql } from "gatsby";

const Banner3 = () => {
  const contact = useStaticQuery(
    graphql`
      query {
        allContentfulBanner {
          nodes {
            title
            title2
            zakaz
          }
        }
      }
    `
  );
  const nodes = contact.allContentfulBanner.nodes[0];
  return (
    <div className={styles.container}>
      <StaticImage
        // style={{ position: "absolute" }}
        width={3880}
        // height={1500}
        src="../../images/banner3.jpg"
        alt="banner"
        className={styles.wrap}
        // layout="responsive"
      />
      <div className={styles.titelBlock}>
        <h1 className={styles.h1}>{nodes.title}</h1>
        <p className={styles.p}>{nodes.title2}</p>

        <a
          href={`https://wa.me/${nodes.zakaz}`}
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
