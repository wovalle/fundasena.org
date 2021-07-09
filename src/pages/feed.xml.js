import RSS from "rss";
import constants from "../constants.json";
import { getAllPostsForActivities } from "../lib/api";

export default function FeedXML() {
  return "feed";
}

export async function getServerSideProps(context) {
  const res = context.res;
  if (!res) {
    return;
  }
  const posts = await getAllPostsForActivities();

  const feed = new RSS({
    title: constants.title,
    description: constants.description,
    feed_url: `${constants.url}/feed.xml`,
    site_url: constants.url,
    image_url: `https://fundasena.org`,
    managingEditor: "Fundasena",
    webMaster: "Fundasena",
    copyright: `${new Date().getFullYear()} Fundasena`,
    language: "es",
    categories: [],
    pubDate: posts[0].date,
    ttl: "60",
  });

  posts.forEach((p) => {
    feed.item({
      title: p.title,
      description: p.description,
      url: `${constants.url}/actividades/${p.slug}`, // link to the item
      categories: [], // optional - array of item categories
      author: p.author.name, // optional - defaults to feed author property
      date: p.date, // any format that js Date can parse.
    });
  });

  res.setHeader("Content-Type", "text/xml");
  res.write(feed.xml());
  res.end();
  return { props: { feed } };
}
