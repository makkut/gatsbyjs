import styles from "./Sale.module.scss";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { TfiRulerPencil } from "react-icons/tfi";
import { SiAdguard } from "react-icons/si";
import { BsCheck2Square } from "react-icons/bs";

export default function Info() {
  return (
    <div className={styles.container} id="sale">
      <div className={styles.wrap}>
        <h2 className={styles.h2}>Наши преимущества</h2>
        <div className={styles.items}>
          <div className={styles.item}>
            <TfiRulerPencil color="#ff0103" className={styles.itemImg} />

            <div className={styles.itemTitle}>Бесплатный замер</div>
          </div>
          <div className={styles.item}>
            <TbTruckDelivery color="#ff0103" className={styles.itemImg} />

            <div className={styles.itemTitle}>Бесплатная доставка</div>
          </div>
          <div className={styles.item}>
            <HiOutlineWrenchScrewdriver
              color="#ff0103"
              className={styles.itemImg}
            />

            <div className={styles.itemTitle}>Аккуратный монтаж</div>
          </div>
          <div className={styles.item}>
            <SiAdguard color="#ff0103" className={styles.itemImg} />

            <div className={styles.itemTitle}>Гарантия до 12 лет</div>
          </div>
          {/* <div className={styles.item}>
          <div className={styles.itemImg}></div>
          <div className={styles.itemTitle}></div>
        </div> */}
        </div>
        {/* <div style={{ position: "relative", overflow: "hidden" }}>
        <a
          href="https://yandex.ru/maps/11009/kizlyar/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        >
          Кизляр
        </a>
        <a
          href="https://yandex.ru/maps/11009/kizlyar/house/ogorodny_pereulok_28/YE8YcQdjQEQCQFppfXR1c31hYg==/?ll=46.705930%2C43.841625&utm_medium=mapframe&utm_source=maps&z=18"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          Огородный переулок, 28 — Яндекс Карты
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/-/CCUNF2hrLB"
          width="300"
          height="300"
          frameBorder="0"
          allowFullScreen
          style={{ position: "relative" }}
        ></iframe>
      </div> */}
        <h3 className={styles.h3}>
          Почему клиенты выбирают наши пластиковые окна:
        </h3>
        <div className={styles.wrap2}>
          <div className={styles.items2}>
            <div className={styles.item2}>
              <BsCheck2Square color="#ff0103" className={styles.itemImg} />
              <h4 className={styles.h4}>КАЧЕСТВЕННАЯ ПРОДУКЦИЯ</h4>
            </div>
            <p>
              Компания “ЮАР” высоко оценена клиентами. Наши пластиковые окна
              созданы специально для вас, дизайн проверен до мелочей, а
              функциональность и технические характеристики отвечают лучшим
              стандартам качества, поэтому вы можете доверять им
            </p>
          </div>
          <div className={styles.items2}>
            <div className={styles.item2}>
              <BsCheck2Square color="#ff0103" className={styles.itemImg} />
              <h4 className={styles.h4}>ОПЫТНЫЕ ПРОФЕССИОНАЛЫ</h4>
            </div>
            <p>
              Мы знаем, что вы не покупаете окна-ПВХ каждый день, поэтому у нас
              есть специалисты-консультанты и эксперты по установке, которые
              готовы помочь вам на каждом этапе пути покупки пластиковых окон.
            </p>
          </div>
          <div className={styles.items2}>
            <div className={styles.item2}>
              <BsCheck2Square color="#ff0103" className={styles.itemImg} />
              <h4 className={styles.h4}>МЫ ОТВЕЧАЕМ ЗА НАШИ ПРОДУКТЫ</h4>
            </div>
            <p>
              Чувствуйте себя уверенно в то время, как хотите купить
              металлопластиковые окна, благодаря одной из самых длительных
              гарантий на наши продукты. Наша приверженность обеспечению
              удовлетворенности клиентов остается приоритетом.
            </p>
          </div>
          <div className={styles.items2}>
            <div className={styles.item2}>
              <BsCheck2Square color="#ff0103" className={styles.itemImg} />
              <h4 className={styles.h4}>НАШИ КЛИЕНТЫ</h4>
            </div>
            <p>
              “ЮАР” предоставляет высококачественные оконные профили из ПВХ, как
              для жилых, так и для коммерческих помещений, на новых рынках
              строительства и производит замену старых
            </p>
          </div>
          <div className={styles.items2}>
            <div className={styles.item2}>
              <BsCheck2Square color="#ff0103" className={styles.itemImg} />
              <h4 className={styles.h4}>ЛУЧШЕЕ КАЧЕСТВО И ДИЗАЙН</h4>
            </div>
            <p>
              “ЮАР” предлагает высокоэффективные, не требующие обслуживания
              пластиковые окна, которые могут иметь качественный вид окрашенной
              древесины. Наш прочный композит выдерживает экстремальные
              температуры и минусовые холода. И они очень энергоэффективны.
              Изучите каждый из наших профилей пластиковых окон ниже.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
