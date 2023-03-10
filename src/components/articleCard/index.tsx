import React from "react";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import styles from "./articleCard.module.scss";
import avatar from "assets/images/avatar.png";
import { IArticle } from "types.ts";

type IArticleCardProps = {
  article: IArticle;
};

const articleSample = {
  avatar: avatar,
  date: new Date().toISOString(),
};

const ArticleCard = ({ article }: IArticleCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.wrapper} mv-30`}
      onClick={(e) => {
        e.preventDefault();
        navigate(`/article/${article.id}`);
      }}
    >
      <div className={`${styles.cover} mb-25`}>
        <img src={article.image} alt="cover" />
      </div>
      <p className={`${styles.title} mb-25 pl-35 pr-25`}>{article.title}</p>
      <p className={`${styles.text} pl-35 pr-25 mb-40`}>
        {article.text.substring(0, 100)}
      </p>
      <div
        className={`${styles.articleFooter} mb-20 ph-25 d-flex justify-content-start align-items-center`}
      >
        <div className="mr-20">
          <img src={articleSample.avatar} alt="avatar" />
        </div>
        <p className="mr-10">{article.author}</p>
        <p className="mr-10">|</p>
        <p>
          <Moment format="Do MM YYYY">{articleSample.date}</Moment>
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
