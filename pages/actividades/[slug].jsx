import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { isValid, parseISO, format } from "date-fns";

import { getPostBySlug, getAllPostsWithSlug } from "../../lib/api";
import { urlFor, parseBody } from "../../lib/sanity";

const parseDate = (dateString) => {
  if (!isValid(parseISO(dateString))) {
    return "No date";
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
};

export default function Post({ post }) {
  const page = {
    slug: post.slug,
    title: post.title,
    imgSrc: urlFor(post.mainImage).url(),
    body: parseBody(post.body),
    date: parseDate(post.date),
    author: post.author.name,
    url: `/actividades/${post.slug}`,
  };

  return (
    <>
      <Head>
        <title>{post.title} | fundasena.org</title>
        {/* <meta property="og:image" content={post.ogImage.url} /> */}
      </Head>

      <div className="blog-two">
        <div className="row">
          {/* <!-- Mainbar column --> */}
          <div className="col-md-8">
            {/* <!-- Blog item starts --> */}
            <div className="blog-two-item">
              {/* <!-- blog two Content --> */}
              <div className="blog-two-content">
                {/* <!-- Heading --> */}
                <h3>
                  <a href="blog-single.html">{post.title}</a>
                </h3>
                {/* <!-- Blog meta --> */}
                <div className="blog-meta">
                  {/* <!-- Date --> */}
                  <a href="#">
                    <i className="fa fa-calendar"></i> {page.date}{" "}
                  </a>{" "}
                  &nbsp;
                  {/* <!-- Author --> */}
                  <a href="#">
                    <i className="fa fa-user"></i> &nbsp; {page.author}
                  </a>{" "}
                  &nbsp;
                  {/* <a href="{{content.absolute_url}}#disqus_thread"><i className="fa fa-comments"></i> &nbsp; Comenta</a> */}
                </div>

                {/* <!-- Carousel --> */}

                {/* <!-- Bootstrap carousel usage
            Bootstrap carousel should have id. Below i am using "bs-carousel-X". Where "X" denotes number". If a page has more than 1 carousel, then add the new carousel with the id "bs-carousel-1", "bs-carousel-2". You also need to update the id in, "carousel indicators" section and "carousel control" section.

            Carousel comes with 3 main data attributes which you can customize. They are...
            data-interval - Time delay between item cycle. Default value "5000".
            data-pause - Pause on hover. Default value "pause".
            data-wrap - Continues cycle or stop at the end. Default value "true".
          --> */}

                {/* <!-- Outer layer --> */}
                <div
                  id="bs-carousel-1"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="5000"
                  data-pause="hover"
                  data-wrap="true"
                >
                  {/* <!-- Bootstrap indicators. If you don't need indicators, remove the below section --> */}
                  <ol className="carousel-indicators">
                    <li
                      data-target="#bs-carousel-1"
                      data-slide-to="0"
                      className="active"
                    ></li>
                  </ol>
                  {/* <!-- Slides. You can also add captions --> */}
                  <div className="carousel-inner">
                    {/* <!-- Item, First item should have extra class "active" --> */}
                    <div className="item active">
                      {/* <!-- Image --> */}

                      <Image
                        src={page.imgSrc}
                        alt={page.title}
                        layout="responsive"
                        objectFit="contain"
                        width={350}
                        height={260}
                      />
                    </div>
                  </div>
                  {/* <!-- Carousel controls (arrows). If you don't need controls, remove the below section --> */}
                  <a
                    className="left carousel-control"
                    href="#bs-carousel-1"
                    role="button"
                    data-slide="prev"
                  >
                    <span className="fa fa-chevron-left"></span>
                  </a>
                  <a
                    className="right carousel-control"
                    href="#bs-carousel-1"
                    role="button"
                    data-slide="next"
                  >
                    <span className="fa fa-chevron-right"></span>
                  </a>
                </div>

                {/* <!-- Paragraph --> */}
                {page.body}
              </div>
            </div>
            {/* <!-- Blog item ends --> */}

            {/* <!-- Pager --> */}
            {/* <!-- <ul className="pager">
        <li className="previous"><a href="#">&larr; Older</a></li>
        <li className="next"><a href="#">Newer &rarr;</a></li>
      </ul> -->*/}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getPostBySlug(params.slug, preview);

  return {
    props: {
      preview,
      post: post || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
