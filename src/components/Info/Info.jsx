import styles from "./Info.module.scss";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.left}>
          <div className={styles.leftItem}>
            <div className={styles.titel}>
              <div className={styles.titelInner}>
                <span className={styles.titelNum}>БОЛЕЕ 10</span>&nbsp;ЛЕТ
              </div>
            </div>
            <div className={styles.content}>
              <p>Занимаем ведущие позиции на рынке</p>
            </div>
          </div>
          <div className={styles.leftItem}>
            <div className={styles.titel}>
              <div className={styles.titelInner}>
                <span className={styles.titelNum}>365</span>&nbsp;ДНЕЙ
              </div>
            </div>
            <div className={styles.content}>
              <p>Непрерывного сервиса и заботы о клиентах</p>
            </div>
          </div>
          <div className={styles.leftItem}>
            <div className={styles.titel}>
              <div className={styles.titelInner}>
                БОЛЕЕ&nbsp;<span className={styles.titelNum}>1000</span>
              </div>
            </div>
            <div className={styles.content}>
              <p>Клиентов ежегодно</p>
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <StaticImage
            className={styles.img}
            src="../../images/dostizheniya.jpg"
            alt="dostizheniya"
          />
        </div>
        <div className={styles.rigth}>
          <div className={styles.leftItem}>
            <div className={styles.titel}>
              <div className={styles.titelInner}>
                СВЫШЕ&nbsp;<span className={styles.titelNum}>2,1</span>
                &nbsp;МЛН.РУБ
              </div>
            </div>
            <div className={styles.content}>
              <p>Наши клиенты уже сэкономили на отоплении</p>
            </div>
          </div>
          <div className={styles.leftItem}>
            <div className={styles.titel}>
              <div className={styles.titelInner}>
                БОЛЕЕ&nbsp;<span className={styles.titelNum}>120 000</span>
                &nbsp;ОКОН
              </div>
            </div>
            <div className={styles.content}>
              <p>Непрерывного сервиса и заботы о клиентах</p>
            </div>
          </div>
          <div className={styles.leftItem}>
            <div className={styles.titel}>
              <div className={styles.titelInner}>
                <span className={styles.titelNum}>12</span>&nbsp;ЛЕТ
              </div>
            </div>
            <div className={styles.content}>
              <p>Гарантия</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
