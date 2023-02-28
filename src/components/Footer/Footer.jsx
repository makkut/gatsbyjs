import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby";

import styles from "./Footer.module.scss";

export default function Footer() {
  const contact = useStaticQuery(
    graphql`
      query {
        allContentfulContacts {
          nodes {
            adress
            email
            pereriv
            vremya
            telefon
          }
        }
      }
    `
  );
  const nodes = contact.allContentfulContacts.nodes[0];
  return (
    <div className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.footerLogo}>
          <a href="#" className={styles.logoLink}>
            <StaticImage
              placeholder="blurred"
              src="../../images/logo_krais.png"
              alt="logo"
              width={80}
              height={80}
              formats={["auto", "webp", "avif"]}
              className={styles.logoImg}
            />
          </a>
        </div>

        <div className={styles.footerBox}>
          <div className={styles.footerContact}>
            <p className={styles.footerBoxTitle}>Наши контакты:</p>
            <a className={styles.footerPhone} href={`tel:${nodes.telefon}`}>
              Tel. 89285502551
            </a>
            <a className={styles.footerMail} href={`mailto:${nodes.email}`}>
              Email. safari@touristik.de
            </a>
          </div>
          <div className={styles.footerAdress}>
            <p className={styles.footerBoxTitle}>Адрес:</p>

            <p className={styles.footerAdressText}>{nodes.adress}</p>
          </div>
          <div className={styles.footerInfo}>
            <p className={styles.footerBoxTitle}>ЮАР пластиковые окна</p>
            <p className={styles.footerCopy}>
              © {new Date().getFullYear()} Все права защищены
            </p>
            <p className={styles.footerLink}>
              {/* <a href="#">Datenschutzbestimmungen</a> */}
            </p>
          </div>
        </div>
        <div className={styles.footerSocialmedia}>
          <a
            href={`https://wa.me/${nodes.telefon}`}
            className={styles.socialItem}
          >
            <BsWhatsapp color="#ff0103" />
          </a>
          <a
            href="https://www.instagram.com/okna_kizlyar_yuar/"
            className={styles.socialItem}
          >
            <BsInstagram color="#ff0103" />
          </a>
          <a
            href={`https://t.me/${nodes.telefon}`}
            className={styles.socialItem}
          >
            <FaTelegramPlane color="#ff0103" />
          </a>
        </div>
      </div>
    </div>
  );
}
