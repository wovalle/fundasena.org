import Link from "next/link";
import constants from "../constants.json";

export function Footer() {
  return (
    <>
      <div className="foot">
        {/* <!-- Container --> */}
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              {/* <!-- Foot Item --> */}
              <div className="foot-item">
                {/* <!-- Heading --> */}
                <h5 className="bold">
                  <i className="fa fa-user"></i> Sobre nosotros
                </h5>
                <p>{constants.description}</p>
                <div className="brand-bg">
                  {/* <!-- Social Media Icons --> */}
                  <Link href="https://www.facebook.com/fundasenard" passHref>
                    <a className="facebook">
                      <i className="fa fa-facebook circle-3"></i>
                    </a>
                  </Link>
                  <Link href="https://instagram.com/fundasenard" passHref>
                    <a className="instagram">
                      <i className="fa fa-instagram circle-3"></i>
                    </a>
                  </Link>
                  <Link href="/feed.xml" passHref>
                    <a className="google-plus">
                      <i className="fa fa-rss circle-3"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              {/* <!-- Foot Item --> */}
              <div className="foot-item">
                {/* <!-- Heading --> */}
                <h5 className="bold">
                  <i className="fa fa-building-o"></i> Contáctenos
                </h5>
                {/* <!-- Foot Item Content --> */}
                <div className="foot-item-content address">
                  {/* <!-- Heading --> */}
                  <h6 className="bold">
                    <i className="fa fa-home"></i> Fundación Mamá Sena
                  </h6>
                  {/* <!-- Paragraph --> */}
                  <p className="add">
                    Calle Paco Saviñón No. 64, Fantino <br />
                    Sánchez Ramírez, R.D.
                  </p>
                  <p className="tel">
                    <i className="fa fa-phone"></i>
                    <b>José Adames</b>, Tel: +1 (809)-(924)-8889
                  </p>
                  <p className="tel">
                    <i className="fa fa-phone"></i>
                    <b>María Adames</b>, Tel: +1 (809)-(610)-2595
                  </p>
                  <p className="mail">
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:fundacionmamasena@gmail.com">
                      fundacionmamasena@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Foot Ends --> */}

      {/* <!-- Footer Starts --> */}
      <footer>
        {/* <!-- Container --> */}
        <div className="container">
          {/* <!-- Footer Content --> */}
          {/* <!-- Paragraph --> */}
          <p className="pull-left">Copyright {new Date().getFullYear()}</p>
          <ul className="list-inline pull-right">
            {/* <!-- List --> */}
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/nosotros">Sobre Nosotros</Link>
            </li>
            <li>
              <Link href="/actividades">Actividades</Link>
            </li>
            <li>
              <Link href="/contactos">Contactos</Link>
            </li>
          </ul>
          {/* <!-- Clearfix --> */}
          <div className="clearfix"></div>
        </div>
      </footer>
    </>
  );
}
