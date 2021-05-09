import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>This is an app to find the latest DJ and other musical events</p>
      <p>Version: 1.0.0</p>
      <Link href="/">Link to Home Page</Link>
    </Layout>
  );
};

export default About;
