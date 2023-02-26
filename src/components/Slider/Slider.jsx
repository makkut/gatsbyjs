import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import styles from "./Slider.module.scss";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const slider = useStaticQuery(
    graphql`
      query {
        allContentfulSlider {
          nodes {
            foto {
              file {
                url
              }
            }
          }
        }
      }
    `
  );
  const nodes = slider.allContentfulSlider.nodes;
  nodes.map((el) => console.log(el.foto.file.url));
  console.log("slider >>", nodes);
  return (
    <div className={styles.container} id="portfolio">
      <h2 className={styles.h2}>Наши работы</h2>
      {/* <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.wrap}>
          <StaticImage
            className={styles.img}
            src="../../images/1.jpg"
            alt="logo"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.wrap}>
          <StaticImage
            className={styles.img}
            src="../../images/2.jpg"
            alt="logo"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.wrap}>
          <StaticImage
            className={styles.img}
            src="../../images/3.jpg"
            alt="logo"
          />
        </SwiperSlide>
      </Swiper> */}
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {nodes.map((el, index) => {
          return (
            <SwiperSlide key={index} className={styles.wrap}>
              <img src={el.foto.file.url} alt="title" className={styles.img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Slider;
