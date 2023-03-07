import React from "react";
import { Link } from "react-router-dom";
import FooterLinks from "./footerLinks";
import { useCases, explore, resources } from "./../../assets/constants";
import logo from "../../assets/images/team.png";
import MediaLinks from "./mediaLinks";
import styles from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={`${styles.wrapper} pt-35 pb-55`}>
      <div className={styles.content}>
        <div className={`${styles.socialMedia} mb-30 mr-30`}>
          <div className={`mb-30`}>
            <img src={logo} alt="footer-logo" />
          </div>
          <div className={styles.media}>
            <MediaLinks />
          </div>
        </div>
        <FooterLinks title="Use Cases" list={useCases} />
        <FooterLinks title="Explore" list={explore} />
        <FooterLinks title="Resources" list={resources} />
        <div className={`${styles.subscribe} mb-30`}>
          <p className="mb-20">Subscribe</p>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="pa-15"
            />
            <span>
              <Link to="#">
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
