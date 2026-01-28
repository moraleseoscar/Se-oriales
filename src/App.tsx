import { useEffect, useState } from "react";
import "./styles.css";
import Media from "./components/Media";

const heroImages = [
  "/assets/S-Tik-Tok-1200x628.jpg",
  "/assets/Gemini_Generated_Image_c3d71oc3d71oc3d7.png",
  "/assets/S-Tik-Tok-1200x628.jpg",
  "/assets/Gemini_Generated_Image_c3d71oc3d71oc3d7.png",
];

const galleryImages = Array.from(
  { length: 12 },
  () => "/assets/Gemini_Generated_Image_c3d71oc3d71oc3d7.png",
);

export default function App() {
  return (
    <div className="page">
      <Header />

      <main>
        <Hero />
        <Products />
        <Highlight />
        <Recipes />
        <Promo />
        <Gallery />
        <BuyHere />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header" aria-label="Top navigation">
      <div className="container header__inner">
        <a className="brand" href="#inicio" aria-label="Nachos señorial">
          <div className="brand__logo brand__logo--solo">
            <Media
              src="/assets/señorial-nachos-nachos.png"
              alt="Logo señorial"
              ratio="6/2"
              fit="contain"
            />
          </div>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a className="nav__link" href="#inicio">
            Inicio
          </a>
          <a className="nav__link" href="#recetas">
            Recetas
          </a>
          <a className="nav__link" href="#compra">
            Compra
          </a>
          <a className="nav__link" href="#contacto">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero__carousel">
        <button className="hero__arrow hero__arrow--left" type="button" onClick={goPrev} aria-label="Anterior">
          ‹
        </button>

        <div className="hero__slides">
          {heroImages.map((src, index) => (
            <div
              key={src}
              className={`hero__slide ${index === activeIndex ? "is-active" : ""}`}
              aria-hidden={index !== activeIndex}
            >
              <Media src={src} alt={`Nachos señorial ${index + 1}`} ratio="16/7" fit="cover" />
            </div>
          ))}
        </div>

        <button className="hero__arrow hero__arrow--right" type="button" onClick={goNext} aria-label="Siguiente">
          ›
        </button>

        <div className="hero__dots" role="tablist" aria-label="Carrusel de imágenes">
          {heroImages.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              className={`dot ${index === activeIndex ? "dot--active" : ""}`}
              aria-label={`Ir a imagen ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="productos" className="products">
      <div className="container products__inner">
        <div className="products__media">
          <Media src="/assets/Montaje.png" alt="Productos señorial" ratio="5/4" fit="contain" />
          <img className="products__pepper" src="/assets/Objeto inteligente vectorial copia.png" alt="" />
          <img className="products__pepper products__pepper--right" src="/assets/Objeto inteligente vectorial copia 3.png" alt="" />
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

function Highlight() {
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

function Recipes() {
  return (
    <section id="recetas" className="recipes">
      <div className="container">
        <h2 className="sectionTitle sectionTitle--center sectionTitle--green nachos-font">LA RECETA QUE FALTABA</h2>

        <div className="recipes__grid">
          <RecipeCard title="Para una noche casual" time="15min" image="/assets/Gemini_Generated_Image_c3d71oc3d71oc3d7.png" />
          <RecipeCard
            title="Para la reunión con amigos"
            time="15min"
            image="/assets/Gemini_Generated_Image_c3d71oc3d71oc3d7.png"
            variant="dark"
          />
          <RecipeCard title="Para ver el partido" time="25min" image="/assets/Gemini_Generated_Image_c3d71oc3d71oc3d7.png" />
        </div>

        <div className="center">
          <a className="btn btn--green-dark btn--pill" href="#recetas">
            VER TODAS LAS RECETAS
          </a>
        </div>
      </div>
    </section>
  );
}

function RecipeCard({
  title,
  time,
  image,
  variant,
}: {
  title: string;
  time: string;
  image: string;
  variant?: "dark";
}) {
  return (
    <article className={`recipeCard ${variant === "dark" ? "recipeCard--dark" : ""}`}>
      <div className="recipeCard__image">
        <Media src={image} alt={title} ratio="3/4" fit="cover" />
      </div>

      <div className="recipeCard__bar">
        <div className="recipeCard__barLeft">
          <div className="recipeCard__title">{title}</div>
          <div className="recipeCard__time">{time}</div>
        </div>

        <div className="recipeCard__play" aria-hidden="true">
          ››
        </div>
      </div>
    </article>
  );
}

function Promo() {
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

function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <h3 className="gallery__title nachos-font">Mira lo que hemos hecho</h3>

        <div className="gallery__grid">
          {galleryImages.map((src, i) => (
            <Media key={src + i} src={src} alt={`GalerÃ­a ${i + 1}`} ratio="4/3" fit="cover" className="gallery__item" />
          ))}
        </div>

        <div className="follow">
          <div className="follow__row">
            <div className="follow__label">SÍGUENOS</div>
            <div className="follow__icons">
              <a href="#" aria-label="Facebook" className="icon">
                f
              </a>
              <a href="#" aria-label="Instagram" className="icon">
                in
              </a>
              <a href="#" aria-label="TikTok" className="icon">
                â™ª
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BuyHere() {
  return (
    <section id="compra" className="buy">
      <img
        className="buy__triangle buy__triangle--tl"
        src="/assets/Objeto inteligente vectorial copia 10.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="buy__triangle buy__triangle--tr"
        src="/assets/Objeto inteligente vectorial copia 11.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="buy__triangle buy__triangle--ml"
        src="/assets/Objeto inteligente vectorial copia 5.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="buy__triangle buy__triangle--mr"
        src="/assets/Objeto inteligente vectorial copia 8.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="buy__triangle buy__triangle--bl"
        src="/assets/Objeto inteligente vectorial copia 2.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="buy__triangle buy__triangle--br"
        src="/assets/Objeto inteligente vectorial copia 3.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="buy__triangle buy__triangle--tl2"
        src="/assets/Objeto inteligente vectorial copia.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="buy__triangle buy__triangle--br2"
        src="/assets/Objeto inteligente vectorial.png"
        alt=""
        aria-hidden="true"
      />

      <div className="container buy__inner">
        <div className="buy__left">
          <div className="buy__media" aria-hidden="true">
            <Media src="/assets/NACHO.png" alt="Nacho" ratio="1/1" fit="contain" />
          </div>

          <div className="buy__headline">
            <h2 className="sectionTitle sectionTitle--light buy__title nachos-font">COMPRA AQUÍ</h2>

            <ul className="buy__bullets">
              <li>Tiendas de barrio</li>
              <li>Supermercados</li>
              <li>Mayoreo</li>
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

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Media src="/assets/logo_señorial.png" alt="señorial" ratio="5/2" fit="contain" />
          <Media src="/assets/textoNachos.png" alt="Nachos" ratio="5/2" fit="contain" />
        </div>

        <div className="footer__cols">
          <FooterCol title="Producto" items={["Nachos Queso", "Nachos Jalapeño"]} />
          <FooterCol title="Recetas" items={["Con amigos", "El partido", "Noche casual", "Sin complicarse"]} />
          <FooterCol
            title="Promociones"
            items={["Promociones activas", "Dinámicas", "Bases y participación", "Actualización de ganadores"]}
          />
          <FooterCol title="Contacto" items={["Tiendas de barrio", "Supermercados", "Mayoreo"]} />
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="footerCol">
      <div className="footerCol__title">{title}</div>
      <ul className="footerCol__list">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

