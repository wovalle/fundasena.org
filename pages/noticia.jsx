import Link from "next/link";

export default function Article() {
  const page = {
    slug: "taller-la-piedra",
    title: "TALLER FORMATIVO EN LA PIEDRA",
    imgSrc: "https://fundasena.org/uploads/posts/reunion_piedra.jpg",
    url: "/noticia/taller-la-piedra",
    summary: "a",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis animi, dolor incidunt tempore dignissimos vel. Voluptatem tenetur voluptates quia. Molestias harum illum dolorum neque magni officiis, laudantium impedit quasi ratione?",
    date: "19/06/29",
    author: "Fundasena",
  };

  return (
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
                <a href="blog-single.html">{page.title}</a>
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={page.imgSrc} alt="" />
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
              <p>{page.body}</p>
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
  );
}
