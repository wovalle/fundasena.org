import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "../styles/non-profit.css";
import "../styles/style.css";
import "../styles/skin-lblue.css";
import "../styles/custom.css";

import Head from "next/head";

import { Layout } from "../components/Layout";
import { getPostsForFooter } from "../lib/api";
import constants from "../constants.json";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={constants.title}
          href={`${constants.url}/feed.xml`}
        ></link>
        <title>{constants.acronym}</title>
        <meta name="description" content={constants.description} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  console.log("ran", { footer });
  const posts = await getPostsForFooter(preview);

  return {
    props: { posts, preview },
    revalidate: 0,
  };
}

export default MyApp;
