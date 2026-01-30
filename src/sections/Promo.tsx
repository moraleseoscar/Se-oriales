import Media from "../components/Media";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__marquee" aria-hidden="true" />
      <div className="container promo__inner">
        <h2 className="sectionTitle sectionTitle--center sectionTitle--promo nachos-font">
          LA PROMO QUE FALTABA
        </h2>

        <div className="promo__grid">
          <div className="promo__left">
            <p className="promo__text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis.
            </p>
            <p className="promo__text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
            </p>

            <a className="btn btn--yellow btn--pill" href="#promo">
              VER PROMO
            </a>
          </div>

          <div className="promo__right" aria-hidden="true">
            <Media src="/assets/Montaje.png" alt="Promo Nachos" ratio="16/10" fit="contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
