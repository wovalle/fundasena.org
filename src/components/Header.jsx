import Link from "next/link";
import constants from "../constants.json";

export function Header() {
  return (
    <header>
      {/* <!-- Outer Starts --> */}
      <div className="outer">
        {/* <!-- Top bar starts --> */}
        <div className="top-bar">
          <div className="container">
            {/* <!-- Contact starts --> */}
            <div className="tb-contact pull-left">
              {/* <!-- Email --> */}
              <i className="fa fa-envelope color"></i>{" "}
              <a href="mailto:fundacionmamasena@gmail.com">
                fundacionmamasena@gmail.com
              </a>
            </div>
            {/* <!-- Contact ends --> */}

            {/* <!-- Social media starts --> */}
            <div className="tb-social pull-right">
              <div className="brand-bg text-right">
                {/* <!-- Brand Icons --> */}
                <a
                  href="https://www.facebook.com/fundasenard"
                  className="facebook"
                >
                  <i className="fa fa-facebook square-2 rounded-1"></i>
                </a>
                <a
                  href="https://www.instagram.com/fundasenard"
                  className="instagram"
                >
                  <i className="fa fa-instagram square-2 rounded-1"></i>
                </a>
                <Link href="/feed.xml">
                  <a className="google-plus">
                    <i className="fa fa-rss square-2 rounded-1" />
                  </a>
                </Link>
              </div>
            </div>
            {/* <!-- Social media ends --> */}
            <div className="clearfix"></div>
          </div>
        </div>

        {/* <!-- Top bar ends --> */}

        {/* <!-- Header two Starts --> */}
        <div className="header-2">
          {/* <!-- Container --> */}
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                {/* <!-- Logo section --> */}
                <div className="logo">
                  <h1>
                    <Link href="/">{constants.acronym}</Link>
                  </h1>
                </div>
              </div>
              <div className="col-md-9">
                {/* <!-- Navigation starts.  --> */}
                <div className="navy">
                  <ul>
                    {/* <!-- Main menu --> */}
                    <li>
                      <Link href="/">Inicio</Link>
                    </li>
                    <li>
                      <Link href="/nosotros">Sobre Nosotros</Link>
                    </li>
                    <li>
                      <Link href="/objetivos" passHref>
                        <>
                          <a>
                            Objetivos <i className="fa fa-angle-down "></i>
                          </a>
                          <ul>
                            <li>
                              <Link href="/objetivos#mision">Misión</Link>
                            </li>
                            <li>
                              <Link href="/objetivos#vision">Visión</Link>
                            </li>
                          </ul>
                        </>
                      </Link>
                    </li>
                    <li>
                      <Link href="/programas">Programas</Link>
                    </li>
                    {/* <li>
                      <Link href="/galeria">Galería</Link>
                    </li> */}
                    <li>
                      <Link href="/actividades">Actividades</Link>
                    </li>
                    <li>
                      <Link href="/contactos">Contactos</Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- Navigation ends --> */}
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
