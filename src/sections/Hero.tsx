import { useEffect, useState } from "react";
import Media from "../components/Media";
import { heroImages } from "../models/content";

export default function Hero() {
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
        <button
          className="hero__arrow hero__arrow--left"
          type="button"
          onClick={goPrev}
          aria-label="Anterior"
        >
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

        <button
          className="hero__arrow hero__arrow--right"
          type="button"
          onClick={goNext}
          aria-label="Siguiente"
        >
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
