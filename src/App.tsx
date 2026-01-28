import "./styles.css";
import Media from "./components/Media";

export default function App() {
  return (
    <div className="page">
      <Header />

      <main>
        <Hero />
        <Products />
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
        <a className="brand" href="#inicio" aria-label="Nachos Señorial">
          {/* Placeholder logo */}
          <div className="brand__logo">
            <Media src="/assets/NACHO.png" alt="Señorial Nachos" ratio="6/1" fit="contain" />
          </div>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a className="nav__link" href="#inicio">Inicio</a>
          <a className="nav__link" href="#recetas">Recetas</a>
          <a className="nav__link" href="#compra">Compra</a>
          <a className="nav__link" href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <div className="hero__left">
          <h1 className="hero__title">
            PARA LA <span className="hero__titleStrong">FAMILIA</span>
          </h1>

          <p className="hero__subtitle">
            ¡EL NACHO QUE FALTABA!
          </p>

          <div className="hero__ctaRow">
            <a className="btn btn--primary" href="#productos">
              VER PRODUCTOS
            </a>
          </div>
        </div>

        <div className="hero__right" aria-hidden="true">
          {/* Placeholder for product-bags montage (right side in PDF) */}
          <Media src="/assets/NACHO.png" alt="Hero placeholder" ratio="16/9" fit="contain" />
        </div>

        <div className="hero__dots" aria-hidden="true">
          <span className="dot dot--active" />
          <span className="dot" />
          <span className="dot" />
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
          {/* Placeholder for big product composition */}
          <Media src="/assets/NACHO.png" alt="Producto placeholder" ratio="16/10" fit="contain" />
        </div>

        <div className="products__content">
          <h2 className="products__title">NACHOS</h2>

          <a className="btn btn--primary btn--pill" href="#productos">
            VER PRODUCTOS
          </a>

          <p className="products__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis.
          </p>
        </div>
      </div>
    </section>
  );
}

function Recipes() {
  return (
    <section id="recetas" className="recipes">
      <div className="container">
        <h2 className="sectionTitle sectionTitle--center">LA RECETA QUE FALTABA</h2>

        <div className="recipes__grid">
          <RecipeCard title="Para una noche casual" time="15min" />
          <RecipeCard title="Para la reunión con amigos" time="15min" />
          <RecipeCard title="Para ver el partido" time="25min" />
        </div>

        <div className="center">
          <a className="btn btn--dark btn--pill" href="#recetas">
            VER TODAS LAS RECETAS
          </a>
        </div>
      </div>
    </section>
  );
}

function RecipeCard({ title, time }: { title: string; time: string }) {
  return (
    <article className="recipeCard">
      <div className="recipeCard__image">
        <Media src="/assets/NACHO.png" alt={title} ratio="16/10" fit="cover" />
      </div>

      <div className="recipeCard__bar">
        <div className="recipeCard__barLeft">
          <div className="recipeCard__title">{title}</div>
          <div className="recipeCard__time">{time}</div>
        </div>

        <div className="recipeCard__play" aria-hidden="true">
          ▶
        </div>
      </div>
    </article>
  );
}

function Promo() {
  return (
    <section className="promo">
      <div className="container promo__inner">
        <h2 className="sectionTitle sectionTitle--center sectionTitle--light">
          LA PROMO QUE FALTABA
        </h2>

        <div className="promo__grid">
          <div className="promo__left">
            <p className="promo__text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis.
            </p>

            <a className="btn btn--ghost btn--pill" href="#promo">
              VER PROMO
            </a>
          </div>

          <div className="promo__right" aria-hidden="true">
            {/* Placeholder for montage */}
            <Media src="/assets/NACHO.png" alt="Promo placeholder" ratio="16/9" fit="contain" />
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
        <h3 className="gallery__title">Mira lo que hemos hecho</h3>

        <div className="gallery__grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <Media
              key={i}
              src="/assets/NACHO.png"
              alt={`Galería ${i + 1}`}
              ratio="4/3"
              fit="cover"
              className="gallery__item"
            />
          ))}
        </div>

        <div className="follow">
          <div className="follow__label">SÍGUENOS</div>
          <div className="follow__icons">
            <a href="#" aria-label="Facebook" className="icon" />
            <a href="#" aria-label="Instagram" className="icon" />
            <a href="#" aria-label="TikTok" className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BuyHere() {
  return (
    <section id="compra" className="buy">
      <div className="container buy__inner">
        <div className="buy__left">
          <h2 className="sectionTitle sectionTitle--light">COMPRA AQUÍ</h2>

          <ul className="buy__bullets">
            <li>Tiendas de barrio</li>
            <li>Supermercados</li>
            <li>Mayoreo</li>
          </ul>

          <p className="buy__text">
            Si te hace falta el Nacho Señorial, <br />
            puedes dejarnos tus datos aquí:
          </p>
        </div>

        <form id="contacto" className="form">
          <label className="field">
            <span>Nombre:</span>
            <input type="text" />
          </label>

          <label className="field">
            <span>Teléfono</span>
            <input type="tel" />
          </label>

          <label className="field">
            <span>Correo electónico</span>
            <input type="email" />
          </label>

          <label className="field">
            <span>Mensaje</span>
            <textarea rows={4} />
          </label>

          <button type="submit" className="btn btn--primary btn--pill">
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
          <Media src="/assets/NACHO.png" alt="Nachos" ratio="6/2" fit="contain" />
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
