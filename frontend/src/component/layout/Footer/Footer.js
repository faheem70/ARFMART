import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ARF MART.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Faheem</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/_faheem_9670/">Instagram</a>
        <a href="https://www.youtube.com/channel/UCWcAS836mcZwSmecex5ZsHQ">Youtube</a>
        <a href="https://www.instagram.com/_faheem_9670/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;