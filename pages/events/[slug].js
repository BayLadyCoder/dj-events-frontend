import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

const EventPage = ({ events }) => {
  const router = useRouter();
  const slug = router.query.slug;
  //   console.log(router);
  console.log("events", events);
  return (
    <Layout>
      <h1>Dynamic URL Page (Slug)</h1>
      <h3>{events.name}</h3>
      <button onClick={() => router.push("/")}>{"< "}Back to Homepage</button>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  const paths = events.map((evt) => ({ params: { slug: evt.slug } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  console.log(slug);
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();

  return {
    props: { events: events[0] },
    revalidate: 1,
  };
};

// export const getServerSideProps = async ({ query: { slug } }) => {
//   console.log(slug);
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const events = await res.json();

//   return {
//     props: { events: events[0] },
//   };
// };

export default EventPage;
