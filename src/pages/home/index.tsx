import React from "react";
import Layout from "layout";
import {
  useCreateArticleMutation,
  useGetArticlesQuery,
  useGetArticleByIdQuery,
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
  const { data, isLoading, isFetching, isError } = useGetArticlesQuery();
  if (isFetching) return <Loader title="Loading articles..." />;
  if (isError) return <Error />;
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
          <input type="search" name="search" placeholder="Search" />
          <button className={`${styles.btn} pv-10`}>Add Post</button>
        </div>
        <div
          className={`${styles.articles} d-flex justify-content-around justify-content-xl-between align-items-center flex-wrap`}
        >
          {data &&
            data?.map((article: IArticle) => (
              <ArticleCard key={`${article.id}`} article={article} />
            ))}
        </div>
        <div className={`mb-110 d-flex justify-content-center mt-10`}>
          {data?.length && (
            <button className={`${styles.btn} pv-10`}>Next &gt;</button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
