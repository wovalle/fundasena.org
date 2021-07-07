import Link from "next/link";

export default function News() {
  const defaultImage = "https://fundasena.org/uploads/logos/logo.jpg";

  const foo = {
    slug: "taller-la-piedra",
    title: "TALLER FORMATIVO EN LA PIEDRA",
    imgSrc: "https://fundasena.org/uploads/posts/reunion_piedra.jpg",
    url: "/noticia/taller-la-piedra",
    summary: "a",
    body: "b",
  };

  const news = [foo, foo, foo, foo, foo].map((n) => (
    <div className="item col-md-4 col-sm-12 col-xs-12" key={n.slug}>
      {/* <!-- Entry for each grid --> */}
      <div className="grid-entry">
        {/* <!-- Grid Image Container --> */}
        <div className="grid-img">
          {/* <!-- Image --> */}
          <img src={n.imgSrc} className="img-responsive" alt={n.title} />
          {/* <!-- Grid Image Hover Effect --> */}
          <span className="grid-img-hover"></span>
          <a href={n.url}>
            <i className="fa fa-search hover-icon"></i>
          </a>
        </div>
        {/* <!-- Grid entry information --> */}
        <div className="entry-info">
          {/* <!-- Heading --> */}
          <h4>
            <a href="{{ post.url }}">{n.title}</a>
          </h4>
          <div className="bor"></div>
          {/* <!-- Paragraph --> */}

          <p>{n.shortdesc ? n.summary : n.body.slice(0, 100)}</p>

          <Link href={n.url} passHref>
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
        {news}
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
