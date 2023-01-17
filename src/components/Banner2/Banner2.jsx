import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import styles from "./Banner2.module.scss";

export default function Banner2() {
  const background = {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 50],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl text-white font-thin">
          Пластиковые окна
        </h1>
      </div>
    ),
  };

  const foreground1 = {
    // children: <StaticImage src="../../images/banner_okna.png" alt="banner" />,
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const foreground = {
    children: <StaticImage src="../../images/banner_okna.png" alt="banner" />,
    // image: "/images/banner_okna.png",
    //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground1, gradientOverlay]}
      className="aspect-[2/1] bg-gray-900"
    />
  );
}
