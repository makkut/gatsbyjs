import styles from "./Contacts.module.scss";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Contacts() {
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
    <div className={styles.container} id="contact">
      <h2 className={styles.h2}>Контакты</h2>
      <div className={styles.wrap}>
        <div className={styles.contacts}>
          <h4 className={styles.h4}>Телефон:</h4>
          <p>
            <a className={styles.footerPhone} href={`tel:${nodes.telefon}`}>
              {nodes.telefon}
            </a>
          </p>
          <h4 className={styles.h4}>E-mail:</h4>
          <p>
            <a className={styles.footerMail} href={`mailto:${nodes.email}`}>
              {nodes.email}
            </a>
          </p>
          <h4 className={styles.h4}>Адрес:</h4>
          <p className={styles.footerAdressText}>{nodes.adress}</p>
          <h4 className={styles.h4}>Режим работы:</h4>
          <p className={styles.footerAdressText}>
            Пн-Сб. {nodes.vremya} <br />
            Перерыв: {nodes.pereriv} <br />
            Вс. Выходной
          </p>
        </div>
        <div
          className={styles.maps}
          style={{ position: "relative", overflow: "hidden" }}
        >
          <a
            href="https://yandex.ru/maps/org/yuar/1795939067/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0px",
            }}
          >
            Юар
          </a>
          <a
            href="https://yandex.ru/maps/11009/kizlyar/category/windows/184107727/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Окна в Кизляре
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=46.722764%2C43.842353&mode=poi&poi%5Bpoint%5D=46.722704%2C43.842269&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1795939067&z=20.98"
            width={560}
            height={400}
            frameBorder="1"
            allowFullScreen
            style={{ position: "relative" }}
          ></iframe>
        </div>
        {/* <div style={{ position: "relative", overflow: "hidden" }}>
          <a
            href="https://yandex.ru/maps/org/yuar/1795939067/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0px",
            }}
          >
            Юар
          </a>
          <a
            href="https://yandex.ru/maps/11009/kizlyar/category/windows/184107727/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Окна в Кизляре
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=46.724058%2C43.842470&mode=search&oid=1795939067&ol=biz&sctx=ZAAAAAgBEAAaKAoSCViMutbehxxAEbK4%2F8h0fklAEhIJTl5kAn6N3z8RwmosYW2Mxz8iBgABAgMEBSgKOABAgVZIAWIjYWRkX3NuaXBwZXQ9bmV1cm9zdW1fZW1iZWRkaW5ncy8xLnhiMmNvbGxlY3Rpb25zX3JhbmtpbmdfbW9kZWw9Y29sbGVjdGlvbnNfcmVsZXZfd19kc3NtYiVjb2xsZWN0aW9uc19yZWxldl90aHJlc2hvbGQ9MTAwNTAwMDAwYiBjb2xsZWN0aW9uc19yZXR1cm5fYnlfZ2VvaWQ9dHJ1ZWoCZGWdAc3MTD2gAQCoAQC9AXR9HyHCAQX7ta%2FYBuoBAPIBAPgBAIICE9Cu0JDQoCDQutC40LfQu9GP0YCKAgCSAgUxMDAyMZoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=46.724058%2C43.842470&sspn=0.023352%2C0.009993&text=%D0%AE%D0%90%D0%A0%20%D0%BA%D0%B8%D0%B7%D0%BB%D1%8F%D1%80&z=16.4"
            width="560"
            height="400"
            frameborder="1"
            allowfullscreen
            style={{ position: "relative" }}
          ></iframe>
        </div> */}
      </div>
    </div>
  );
}
