import React, { useEffect, useState } from "react";
import Layout from "layout";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import {
  useGetArticleByIdQuery,
  useAddCommentToArticleMutation,
} from "redux/services/articleApi";
import Loader from "components/loader";
import Error from "components/error";
import avatar from "assets/images/avatar.png";
import styles from "./article.module.scss";

const Article = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState<string>(" ");
  const { data, isFetching, error } = useGetArticleByIdQuery(id);
  const [addCommentToArticle, { data: updatedArticle }] =
    useAddCommentToArticleMutation();
  const [showAllComments, setShowAllComments] = useState(false);
  const [comments, setComments] = useState<Array<string>>([]);

  useEffect(() => {
    if (data && data.comments) {
      setComments([...data.comments]);
    }
    if (updatedArticle && updatedArticle.comments) {
      setComments([...updatedArticle.comments, ...comments]);
    }
  }, [data]);
  if (isFetching) return <Loader title="Loading the article..." />;
  if (error) return <Error />;

  const handleShowClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowAllComments(!showAllComments);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewComment(e.target.value);
  };

  const handleSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (newComment) {
      setNewComment("");
      setComments([newComment, ...comments]);
      const body = {
        comments: [newComment, ...comments],
      };
      addCommentToArticle({ id, body });
    }
  };

  const commentList = comments?.map((comment, i) => {
    return (
      <div
        key={i}
        className="mv-30 pa-10 d-flex justify-cotnent-start align-items-start"
      >
        <div className="mr-20">
          <img src={avatar} alt="avatar" className={styles.avatar} />
        </div>
        <p className={styles.text}>{comment}</p>
      </div>
    );
  });

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
          {comments.length > 0 && (
            <>
              <hr className={`${styles.line} mb-30`} />
              <div>
                {showAllComments
                  ? commentList
                  : commentList.filter((_comment, i) => i < 5)}
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className={`${styles.showBtn} pa-10`}
                  onClick={(e) => {
                    handleShowClick(e);
                  }}
                >
                  {showAllComments ? "View less" : "View more"}
                </button>
              </div>
            </>
          )}
          <hr className={`${styles.line} mb-50`} />
          <div className={`${styles.comment}`}>
            <p className={`${styles.join} mb-15`}>Join the conversation</p>
            <div className={`d-flex justify-content-start`}>
              <div className="mr-20">
                <img src={avatar} alt="avatar" className={styles.avatar} />
              </div>
              <div className={`${styles.textarea}`}>
                <input
                  type="textarea"
                  placeholder="Comments"
                  name="comment"
                  onChange={handleChange}
                  value={newComment}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button
                className={`${styles.showBtn} pa-10 mt-20`}
                onClick={(e) => {
                  handleSend(e);
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Article;
