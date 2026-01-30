import Media from "../components/Media";
import { navLinks } from "../models/content";

export default function Header() {
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
          {navLinks.map((link) => (
            <a key={link.href} className="nav__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
