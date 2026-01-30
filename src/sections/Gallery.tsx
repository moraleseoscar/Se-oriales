import Media from "../components/Media";
import { galleryImages, socialLinks } from "../models/content";

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <h3 className="gallery__title nachos-font">Mira lo que hemos hecho</h3>

        <div className="gallery__grid">
          {galleryImages.map((src, index) => (
            <Media
              key={`${src}-${index}`}
              src={src}
              alt={`Galería ${index + 1}`}
              ratio="4/3"
              fit="cover"
              className="gallery__item"
            />
          ))}
        </div>

        <div className="follow">
          <div className="follow__row">
            <div className="follow__label">SÍGUENOS</div>
            <div className="follow__icons">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} aria-label={link.label} className="icon">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
