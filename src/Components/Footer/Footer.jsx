import React from "react";
import "./Footer.css";
import Heading from "../Heading/Heading";
import CustomButton from "../CustomButton/CustomButton";
import LightEffectBg from "../LightEffectBg/LightEffectBg";
import footerimg from "../../Assets/Images/logo-white.png";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerHeading">
          <Heading HT1="Time To" HT2="Roar" />
          <CustomButton text="contact us" />
        </div>
        <div className="contactInfo">
          <hr className="hr" />
          <div className="subInfoDiv">
            <div className="email">
              <p>Email</p>
              <a href="#">email@email.com</a>
            </div>
            <div className="call">
              <p>Call</p>
              <a href="#">+009988776655</a>
            </div>
            <div className="skype">
              <p>Skype</p>
              <a href="#">syscomatrix.skype</a>
            </div>
          </div>
          <hr className="hr" />
        </div>
      </div>
      <div className="footerImg">
        <LightEffectBg image={footerimg} />
      </div>
    </div>
  );
}

export default Footer;