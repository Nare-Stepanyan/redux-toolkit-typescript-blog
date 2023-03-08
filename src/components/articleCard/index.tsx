import React from "react";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import styles from "./articleCard.module.scss";
import avatar from "assets/images/avatar.png";
import cover from "assets/images/cover.png";

const articleSample = {
  cover: cover,
  title: "The Emotional Toll of Being in UX",
  text: "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand,acknowledgeacknowledge acknowledge ",
  avatar: avatar,
  name: "Wade Warren",
  date: new Date(),
};

const ArticleCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.wrapper} mv-30`}
      onClick={() => navigate("/article/id")}
    >
      <div className={`${styles.cover} mb-25`}>
        <img src={articleSample.cover} alt="cover" />
      </div>
      <p className={`${styles.title} mb-25 pl-35 pr-25`}>
        {articleSample.title}
      </p>
      <p className={`${styles.text} pl-35 pr-25 mb-40`}>
        {articleSample.text.substring(0, 100)}
      </p>
      <div
        className={`${styles.articleFooter} mb-20 ph-25 d-flex justify-content-start align-items-center`}
      >
        <div className="mr-20">
          <img src={articleSample.avatar} alt="avatar" />
        </div>
        <p className="mr-10">{articleSample.name}</p>
        <p className="mr-10">|</p>
        <p>
          <Moment format="Do MMM YYYY">
            {articleSample.date.toDateString()}
          </Moment>
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
