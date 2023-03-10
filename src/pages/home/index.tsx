import React, { useEffect, useState } from "react";
import Layout from "layout";
import {
  useCreateArticleMutation,
  useGetArticlesQuery,
  useGetArticlesBySearchQuery,
} from "redux/services/articleApi";
import ArticleCard from "components/articleCard";
import styles from "./home.module.scss";
import { IArticle } from "types.ts";
import Loader from "components/loader";
import Error from "components/error";
import { useAppDispatch } from "app/hooks";

const Home = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { data: allArticles, isFetching, isError } = useGetArticlesQuery();
  const {
    data: searchData,
    isFetching: isFetchingSearch,
    error,
  } = useGetArticlesBySearchQuery(searchTerm);

  useEffect(() => {}, [searchTerm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (isFetching) return <Loader title="Loading articles..." />;
  if (isFetchingSearch) return <Loader title="Searching articles..." />;
  if (isError || error) return <Error />;
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div>
          <p className={`${styles.homeTitle} mb-20 mt-50`}>Blog posts</p>
          <p className={`${styles.homeSubtitle} mb-30`}>
            Our latest updates and blogs about managing your team
          </p>
        </div>
        <div
          className={`${styles.search} d-flex justify-content-between align-items-center`}
        >
          <input
            type="search"
            name="search"
            placeholder="Search"
            autoComplete="off"
            value={searchTerm}
            onChange={handleChange}
          />
          <button className={`${styles.btn} pv-10`}>Add Post</button>
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
    </Layout>
  );
};

export default Home;
