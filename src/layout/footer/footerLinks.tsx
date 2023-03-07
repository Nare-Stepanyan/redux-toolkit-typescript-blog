import styles from "./footer.module.scss";
import { Link } from "react-router-dom";

type IArguments = {
  title: string;
  list: string[];
};

const FooterLinks = ({ title, list }: IArguments): JSX.Element => {
  return (
    <div className="mb-30 mr-30">
      <p className={`${styles.title} mb-30`}>{title}</p>
      <div>
        {list.map((item, i) => {
          return (
            <Link to="#">
              <p key={i} className={`${styles.link} mb-5`}>
                {item}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterLinks;
