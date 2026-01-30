import Media from "../components/Media";

export default function Products() {
  return (
    <section id="productos" className="products">
      <div className="container products__inner">
        <div className="products__media">
          <Media src="/assets/Montaje.png" alt="Productos señorial" ratio="5/4" fit="contain" />
          <img className="products__pepper" src="/assets/Objeto inteligente vectorial copia.png" alt="" />
          <img
            className="products__pepper products__pepper--right"
            src="/assets/Objeto inteligente vectorial copia 3.png"
            alt=""
          />
        </div>

        <div className="products__content">
          <div className="products__titleImage">
            <Media src="/assets/textoNachos.png" alt="Nachos" ratio="6/2" fit="contain" />
          </div>

          <a className="btn btn--green btn--pill" href="#productos">
            VER PRODUCTOS
          </a>
        </div>
      </div>
    </section>
  );
}
