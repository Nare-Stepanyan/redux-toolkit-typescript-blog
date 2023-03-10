import React, { useEffect, useState } from "react";
import Layout from "layout";
import {
  useGetArticlesQuery,
  useGetArticlesBySearchQuery,
} from "redux/services/articleApi";
import ArticleCard from "components/articleCard";
import styles from "./home.module.scss";
import { IArticle } from "types.ts";
import Loader from "components/loader";
import Error from "components/error";
import { useAppDispatch } from "app/hooks";
import AddPostModal from "components/addPostModal";

const Home = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [toggleAddPost, setToggleAddPost] = useState(false);
  const { data: allArticles, isFetching, isError } = useGetArticlesQuery();
  const { data: searchData, error } = useGetArticlesBySearchQuery(searchTerm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleAddPost = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setToggleAddPost(!toggleAddPost);
  };

  if (isFetching) return <Loader title="Loading articles..." />;
  if (isError || error) return <Error />;
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={`${styles.titlePart}`}>
          <p className={`${styles.homeTitle} mb-20 mt-50`}>Blog posts</p>
          <p className={`${styles.homeSubtitle} mb-30`}>
            Our latest updates and blogs about managing your team
          </p>
        </div>
        <div
          className={`${styles.search} d-flex flex-column flex-md-row justify-content-md-between justify-content-start align-items-md-center`}
        >
          <input
            type="search"
            name="search"
            placeholder="Search"
            autoComplete="off"
            value={searchTerm}
            onChange={handleChange}
            className="mb-20"
          />
          <button
            className={`${styles.btn} pv-10 mb-20`}
            onClick={(e) => handleToggleAddPost(e)}
          >
            Add Post
          </button>
        </div>
        <div
          className={`${styles.articles} d-flex justify-content-around justify-content-xl-between align-items-center flex-wrap`}
        >
          {searchData
            ? searchData?.map((article: IArticle) => (
                <ArticleCard key={`${article.id}`} article={article} />
              ))
            : allArticles?.map((article: IArticle) => (
                <ArticleCard key={`${article.id}`} article={article} />
              ))}
        </div>
        <div className={`mb-110 d-flex justify-content-center mt-10`}>
          <button className={`${styles.btn} pv-10`}>Next &gt;</button>
        </div>
      </div>
      {toggleAddPost && (
        <AddPostModal
          handleToggleAddPost={handleToggleAddPost}
          toggleAddPost={toggleAddPost}
          setToggleAddPost={setToggleAddPost}
        />
      )}
    </Layout>
  );
};

export default Home;
