import React, { useState } from "react";
import Layout from "layout";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { useGetArticleByIdQuery } from "redux/services/articleApi";
import Loader from "components/loader";
import Error from "components/error";
import avatar from "assets/images/avatar.png";
import styles from "./article.module.scss";

const Article = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetArticleByIdQuery(id);
  const [comments, setComments] = useState<Array<String>>([
    "Cooment1",
    "Commet2",
  ]);

  if (isFetching) return <Loader title="Loading the article..." />;
  if (error) return <Error />;
  return (
    <Layout>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.size}`}>
          <p className={`${styles.title} mb-40`}> {data?.title}</p>
          <div
            className={`${styles.subtitle} mb-20 d-flex justify-content-start align-items-center`}
          >
            <div className="mr-20">
              <img src={avatar} alt="avatar" className={styles.avatar} />
            </div>
            <p className="mr-10">{data?.author}</p>
            <p className="mr-10">|</p>
            <p>
              <Moment format="Do MM YYYY">{data?.date}</Moment>
            </p>
          </div>
        </div>
        <div className={`${styles.cover} text-center mb-60`}>
          <img src={data?.image} alt="cover-image" />
        </div>
        <div className={`${styles.size}`}>
          <div className={`${styles.text} mb-50`}>{data?.text}</div>
          <div
            className={`${styles.articleEnd} d-flex mb-100 justify-content-start align-items-center`}
          >
            <div className="mr-15">
              <img src={avatar} alt="avatar" className={styles.avatar} />
            </div>
            <div>
              <p className={`${styles.written}`}>Written by</p>
              <p className={`${styles.author}`}>{data?.author}</p>
            </div>
          </div>
          <hr className={`${styles.line} mb-30`} />
          <div>
            {comments?.map((comment, i) => {
              return (
                <p key={i} className="mv-30">
                  {comment}
                </p>
              );
            })}
          </div>
          <hr className={`${styles.line} mb-50`} />
          <div className={`${styles.comment}`}>
            <p className={`${styles.join} mb-15`}>Join the conversation</p>
            <div className={`d-flex justify-content-start`}>
              <div className="mr-20">
                <img src={avatar} alt="avatar" className={styles.avatar} />
              </div>
              <div className={`${styles.textarea}`}>
                <input type="textarea" placeholder="Comments" name="comment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Article;
