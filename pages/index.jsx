export default function Home() {
  return (
    <div className="non-profit-home">
      <div className="container">
        {/* <!-- Slides. You can also add captions --> */}
        <div className="carousel-inner">
          {/* <!-- Item, First item should have extra class "active" --> */}
          <div className="item active">
            {/* <!-- Image --> */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/logo_wide.png" alt="Fundasena Logo" />
            {/* <!-- Right big --> */}
          </div>
        </div>

        {/* <!-- Carousel ends --> */}
        <div className="divider-1"></div>

        {/* <!-- About starts --> */}
        <div className="np-about">
          <div className="row">
            <div className="col-md-6">
              <div className="block-heading-two">
                <h3>
                  <span>¿Quiénes somos?</span>
                </h3>
              </div>
              <p className="text-justify">
                Fundación Mamá Sena es una institución sin fines de lucro que se
                propone la recomposición de la sociedad a través de procesos de
                reflexión, capacitación y acción comunitaria para el crecimiento
                en valores humanos, relaciones interculturales y proyectos de
                solidaridad sostenidos con personas y grupos excluidos que opten
                por entrar en un proceso de crecimiento y formas hermanas de
                relacionarse y de organizarse. Fundación Mamá Sena es una
                iniciativa de la Familia Adames Núñez que está abierta a la
                participación activa de personas y familias que estén en
                comunión con los ideales, programas y acciones de la
                Institución.
              </p>

              <br />
            </div>

            <div className="col-md-6">
              <div className="block-heading-two">
                <h3>
                  <span>Frases célebres</span>
                </h3>
              </div>
              <div className="quote-one">
                <div className="clearfix"></div>
                <div className="quote-one-item">
                  <span className="color">&#8220;</span>
                  <div className="quote-one-right">
                    <p>
                      Amarás al Señor tu Dios con todo tu corazón, y con toda tu
                      alma, y con todas tus fuerzas y con toda tu mente; y a tu
                      prójimo como a ti mismo.
                    </p>
                    - Lucas 10:27
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
