import React from "react";
import { useRouter } from "next/router";

const DynamicPage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  //   console.log(router);
  return (
    <div>
      <h1>Dynamic URL Page (Slug)</h1>
      <h3>My slug: {slug}</h3>
      <button onClick={() => router.push("/")}>{"< "}Back to Homepage</button>
    </div>
  );
};

export default DynamicPage;
