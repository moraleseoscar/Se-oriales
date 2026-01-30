import "./styles.css";
import {
  BuyHere,
  Footer,
  Gallery,
  Header,
  Hero,
  Highlight,
  Products,
  Promo,
  Recipes,
} from "./sections";

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
