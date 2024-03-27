import React from "react";
import Footer from "./Footer";
import FooterItem from "./FooterItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const FooterContainer = () => {
  return (
    <Footer>
      <FooterItem title="About" to="/about" />
      <FooterItem title="Newsroom" to="/newsroom" />
      <FooterItem title="Contact" to="/contact" />
      <FooterItem title="Careers" to="/careers" />
      <FooterItem title="ByteDance" to="/bytedance" />
      <FooterItem title="Privacy" to="/privacy" />
      <FooterItem title="Terms" to="/terms" />
      <FooterItem title="Guidelines" to="/guidelines" />
      <FooterItem title="Advertising" to="/advertising" />
      <FooterItem title="TikTok Làn sóng xanh" to="/lan-song-xanh" />
      <FooterItem title="TikTok Awards" to="/awards" />
      <FooterItem title="TikTok Foody" to="/foody" />
      <span className={cx("footer-copyright")}>
        <FontAwesomeIcon style={{ marginRight: "2.5px" }} icon={faCopyright} />
        2024 TikTok
      </span>
    </Footer>
  );
};

export default FooterContainer;
