import Link from "next/link";
import Image from "next/image";

import { getAllPostsForActivities } from "../lib/api";
import { urlFor } from "../lib/sanity";

export default function Activities({ posts }) {
  const activities = posts.map((p) => ({
    title: p.title,
    imgSrc: p.mainImage ? urlFor(p.mainImage).url() : "/logos/logo.jpg",
    summary: p.summary,
    url: `/actividades/${p.slug}`,
    slug: p.slug,
  }));

  const activityList = activities.map((a) => (
    <div className="item col-md-4 col-sm-12 col-xs-12" key={a.slug}>
      {/* <!-- Entry for each grid --> */}
      <div className="grid-entry">
        {/* <!-- Grid Image Container --> */}
        <div className="grid-img">
          {/* <!-- Image --> */}
          <Image
            src={a.imgSrc}
            className="img-responsive"
            alt={a.title}
            layout="responsive"
            objectFit="contain"
            width={350}
            height={260}
          />
          {/* <!-- Grid Image Hover Effect --> */}
          <span className="grid-img-hover"></span>
          <Link href={a.url} passHref>
            <i className="fa fa-search hover-icon"></i>
          </Link>
        </div>
        {/* <!-- Grid entry information --> */}
        <div className="entry-info">
          {/* <!-- Heading --> */}
          <h4>
            <Link href={a.url}>{a.title}</Link>
          </h4>
          <div className="bor"></div>
          {/* <!-- Paragraph --> */}

          <p>{a.summary}</p>

          <Link href={a.url} passHref>
            <a className="read-more">
              Leer mas <i className="fa fa-angle-double-right" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="blog-masonry">
        {/* <!-- Grid Item - Image, Heading and Para --> */}
        {activityList}
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts = await getAllPostsForActivities(preview);

  return {
    props: { posts, preview },
    revalidate: 60,
  };
}
