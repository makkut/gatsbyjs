import * as React from "react";
import Footer from "../components/Footer/Footer";
import Sale from "../components/Sale/Sale";
import Info from "../components/Info/Info";
import Header from "../components/Header/Header";
import ContactIcons from "../components/ContactIcons/ContactIcons";
import Slider from "../components/Slider/Slider";
import Contacts from "../components/Contacts/Contacts.jsx";
import Banner3 from "../components/Banner3/Banner3";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <main>
        <ContactIcons />
        <Banner3 />
        {/* <Banner ref={ref} /> */}
        <Sale />
        <Info />
        <Slider />
        <Contacts />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default IndexPage;
