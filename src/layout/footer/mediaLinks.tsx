import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./footer.module.scss";

const MediaLinks = () => {
  return (
    <>
      <div className={`${styles.mediaItem} mb-5`}>
        <p>
          <FontAwesomeIcon icon={faInstagram} />
        </p>
        <Link to="#">
          <p className="ml-10">instagram</p>
        </Link>
      </div>
      <div className={`${styles.mediaItem} mb-5`}>
        <FontAwesomeIcon icon={faFacebookSquare} />
        <Link to="#">
          <p className="ml-10">Facebook</p>
        </Link>
      </div>
      <div className={`${styles.mediaItem} mb-5`}>
        <FontAwesomeIcon icon={faTwitter} />
        <Link to="#">
          <p className="ml-10">Twitter</p>
        </Link>
      </div>
      <div className={`${styles.mediaItem} mb-5`}>
        <FontAwesomeIcon icon={faInstagram} />
        <Link to="#">
          <p className="ml-10">instagram</p>
        </Link>
      </div>
      <div className={`${styles.mediaItem} mb-5`}>
        <FontAwesomeIcon icon={faFacebookSquare} />
        <Link to="#">
          <p className="ml-10">Facebook</p>
        </Link>
      </div>
      <div className={`${styles.mediaItem} mb-5`}>
        <FontAwesomeIcon icon={faTwitter} />
        <Link to="#">
          <p className="ml-10">Twitter</p>
        </Link>
      </div>
    </>
  );
};

export default MediaLinks;
