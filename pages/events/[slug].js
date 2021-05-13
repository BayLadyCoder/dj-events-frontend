import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const DynamicPage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  //   console.log(router);
  return (
    <Layout>
      <h1>Dynamic URL Page (Slug)</h1>
      <h3>My slug: {slug}</h3>
      <button onClick={() => router.push("/")}>{"< "}Back to Homepage</button>
    </Layout>
  );
};

export default DynamicPage;
