import Media from "../components/Media";
import { buyBullets } from "../models/content";

const triangles = [
  { className: "buy__triangle--tl", src: "/assets/Objeto inteligente vectorial copia 10.png" },
  { className: "buy__triangle--tr", src: "/assets/Objeto inteligente vectorial copia 11.png" },
  { className: "buy__triangle--ml", src: "/assets/Objeto inteligente vectorial copia 5.png" },
  { className: "buy__triangle--mr", src: "/assets/Objeto inteligente vectorial copia 8.png" },
  { className: "buy__triangle--bl", src: "/assets/Objeto inteligente vectorial copia 2.png" },
  { className: "buy__triangle--br", src: "/assets/Objeto inteligente vectorial copia 3.png" },
  { className: "buy__triangle--tl2", src: "/assets/Objeto inteligente vectorial copia.png" },
  { className: "buy__triangle--br2", src: "/assets/Objeto inteligente vectorial.png" },
];

export default function BuyHere() {
  return (
    <section id="compra" className="buy">
      {triangles.map((triangle) => (
        <img
          key={triangle.className}
          className={`buy__triangle ${triangle.className}`}
          src={triangle.src}
          alt=""
          aria-hidden="true"
        />
      ))}

      <div className="container buy__inner">
        <div className="buy__left">
          <div className="buy__media" aria-hidden="true">
            <Media src="/assets/NACHO.png" alt="Nacho" ratio="1/1" fit="contain" />
          </div>

          <div className="buy__headline">
            <h2 className="sectionTitle sectionTitle--light buy__title nachos-font">COMPRA AQUÍ</h2>

            <ul className="buy__bullets">
              {buyBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          <p className="buy__text">
            Si te hace falta el Nacho señorial, <br />
            puedes dejarnos tus datos aquí:
          </p>
        </div>

        <form id="contacto" className="form form--buy">
          <label className="field">
            <span>Nombre:</span>
            <input type="text" />
          </label>

          <label className="field">
            <span>Teléfono</span>
            <input type="tel" />
          </label>

          <label className="field">
            <span>Correo electrónico</span>
            <input type="email" />
          </label>

          <label className="field">
            <span>Mensaje</span>
            <textarea rows={4} />
          </label>

          <button type="submit" className="btn btn--primary btn--square">
            ENVIAR
          </button>
        </form>
      </div>
    </section>
  );
}
