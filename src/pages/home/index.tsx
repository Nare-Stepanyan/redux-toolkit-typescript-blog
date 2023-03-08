import React from "react";
import Layout from "layout";
import ArticleCard from "components/articleCard";
import styles from "./home.module.scss";

const Home = () => {
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
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
        <div className={`mb-110 d-flex justify-content-center mt-10`}>
          <button className={`${styles.btn} pv-10`}>Next &gt;</button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
