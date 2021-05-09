import React from "react";
import Head from "next/head";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

const Layout = ({ title, description, keywords, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}></div>
      {children}
    </div>
  );
};

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest DJ and  and other musical events",
  keywords: "music, dj, edm, events",
};

export default Layout;
