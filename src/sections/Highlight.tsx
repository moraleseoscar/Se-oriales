import Media from "../components/Media";

export default function Highlight() {
  return (
    <section className="highlight">
      <div className="container highlight__inner">
        <div className="highlight__left">
          <h2 className="highlight__title">
            ¡EL <span className="nachos-font">NACHO</span> QUE FALTABA!
          </h2>
          <div className="highlight__logo">
            <Media src="/assets/logo_es_señorial.png" alt="Es señorial" ratio="5/2" fit="contain" />
          </div>
        </div>
        <div className="highlight__copy">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
          </p>
        </div>
        <img className="highlight__chip" src="/assets/Objeto inteligente vectorial copia 8.png" alt="" />
      </div>
    </section>
  );
}
