import * as React from "react";
import Footer from "../components/Footer/Footer";
import Sale from "../components/Sale/Sale";
import Info from "../components/Info/Info";
import Header from "../components/Header/Header";
import ContactIcons from "../components/ContactIcons/ContactIcons";
import Banner2 from "../components/Banner2/Banner2";
import Slider from "../components/Slider/Slider";
import { ParallaxProvider } from "react-scroll-parallax";

const IndexPage = () => {
  const ref = React.useRef(null);
  const transformBanner = (x, y) => {
    if (ref && ref.current) {
      let banner = ref.current;
      banner.style.transform =
        "translate(-" + x * 10 + "px, -" + y * 10 + "px)";
    }
  };
  const prellaxHandler = (e) => {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    transformBanner(x, y);
  };
  const prellaxHandlerMobile = (e) => {
    const touch = e.changedTouches[0];
    let x = touch.clientX / window.innerWidth;
    let y = touch.clientY / window.innerHeight;
    transformBanner(x, y);
  };
  return (
    <ParallaxProvider>
      <div onMouseMove={prellaxHandler} onTouchMove={prellaxHandlerMobile}>
        <Header />
        <main>
          <ContactIcons />
          <Banner2 />
          {/* <Banner ref={ref} /> */}
          <Sale />
          <Info />
          <Slider />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ParallaxProvider>
  );
};

export default IndexPage;
