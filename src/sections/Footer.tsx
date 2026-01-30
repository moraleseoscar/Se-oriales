import Media from "../components/Media";
import FooterCol from "../components/FooterCol";
import { footerColumns } from "../models/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Media src="/assets/logo_señorial.png" alt="señorial" ratio="5/2" fit="contain" />
          <Media src="/assets/textoNachos.png" alt="Nachos" ratio="5/2" fit="contain" />
        </div>

        <div className="footer__cols">
          {footerColumns.map((column) => (
            <FooterCol key={column.title} title={column.title} items={column.items} />
          ))}
        </div>
      </div>
    </footer>
  );
}
