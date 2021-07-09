import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="non-profit-home">
        <div className="contact-us-one">
          <div className="contact-map">
            {/* <!-- Map Link --> */}
            <iframe
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/search?q=19.121651%2C-70.296830&key=AIzaSyCFuQf8Rjq-nxLYN1Hdiv6o2owl3J18ulo"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-6">
            {/* <!-- Contact Item --> */}
            <div className="text-center">
              {/* <!-- Contact No --> */}
              <div className="contact-item">
                {/* <!-- Icon --> */}
                <i className="fa fa-phone bg-lblue circle-3"></i>
                {/* <!-- Heading --> */}
                <h5>¡Contacto @ Santo Domingo!</h5>
                {/* <!-- Paragraph --> */}
                <p>
                  Digna María Adames Núñez
                  <br />
                  Tel : 809-369-1309
                  <br />
                  Cel : 809-610-2595
                </p>
              </div>
              {/* <!-- Contact Mail --> */}
              <div className="contact-item">
                <i className="fa fa-envelope bg-green circle-3"></i>
                <h5>¡Escríbenos!</h5>
                <p>
                  fundacionmamasena@gmail.com
                  <br />
                  mariaelena087@hotmail.com
                  <br />
                  digna.adames@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-6">
            {/* <!-- Contact Item --> */}
            <div className="text-center">
              <div className="contact-item">
                {/* <!-- Icon --> */}
                <i className="fa fa-phone bg-lblue circle-3"></i>
                {/* <!-- Heading --> */}
                <h5>¡Contacto @ Fantino!</h5>
                {/* <!-- Paragraph --> */}
                <p>
                  María Elena Adames Núñez
                  <br />
                  Tel : 809-574-8284
                  <br />
                  Cel : 809-855-2623
                  <br />
                  <span></span>
                </p>
              </div>
              {/* <!-- Contact Address --> */}
              <div className="contact-item">
                <i className="fa fa-building-o bg-red circle-3"></i>
                <h5>¡Visítanos!</h5>
                <p>
                  Paco Saviñón #64,
                  <br />
                  Fantino, Sanchez Ramírez
                  <br />
                  República Dominicana
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="contact-item">
              {/* <!-- Contact Form --> */}
              <div className="contact-form">
                <h5>Formulario de contacto</h5>
                {/* <!-- Form --> */}
                <form
                  className="form"
                  role="form"
                  action="https://formspree.io/fundacionmamasena@gmail.com"
                  method="POST"
                >
                  {/* <!-- Form Group --> */}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="_replyto"
                      placeholder="Correo electrónico"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="name"
                      rows="7"
                      placeholder="Mensaje"
                    ></textarea>
                  </div>
                  {/* <!-- Button --> */}
                  <button className="btn btn-red" type="submit" value="Send">
                    Enviar
                  </button>
                  &nbsp;
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="contact-item">
              {/* <!-- Social --> */}
              <div className="brand-bg">
                {/* <!-- Heading --> */}
                <h5>Redes sociales</h5>
                {/* <!-- Order List --> */}
                <ul className="list-unstyled">
                  {/* <!-- Social Media Icons --> */}
                  <li>
                    <a
                      href="https://www.facebook.com/fundasenard"
                      className="facebook"
                    >
                      <i className="fa fa-facebook circle-2"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/fundasenard"
                      className="instagram"
                    >
                      <i className="fa fa-instagram circle-2"></i> Instagram
                    </a>
                  </li>
                  <li>
                    <Link href="/feed.xml" passHref>
                      <a className="google-plus">
                        <i className="fa fa-rss circle-2"> </i> RSS Feed
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
