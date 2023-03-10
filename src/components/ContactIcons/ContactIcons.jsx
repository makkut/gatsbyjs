import styles from "./ContactIcons.module.scss";
import { TbPhoneCall, TbMail, TbBrandWhatsapp } from "react-icons/tb";
import React from "react";
import { Link } from "gatsby";

export default function Contact() {
  return (
    <div className={styles.iconBlock}>
      <Link className={styles.a} to="tel:+79285502551">
        <TbPhoneCall />
      </Link>
      <Link className={styles.a} to="mailto:gmail@gmail.org">
        <TbMail />
      </Link>
      <Link className={styles.a} to="https://wa.me/+79285502551">
        <TbBrandWhatsapp />
      </Link>
    </div>
  );
}
