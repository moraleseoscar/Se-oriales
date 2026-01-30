import RecipeCard from "../components/RecipeCard";
import { recipeCards } from "../models/content";

export default function Recipes() {
  return (
    <section id="recetas" className="recipes">
      <div className="container">
        <h2 className="sectionTitle sectionTitle--center sectionTitle--green nachos-font">LA RECETA QUE FALTABA</h2>

        <div className="recipes__grid">
          {recipeCards.map((card) => (
            <RecipeCard
              key={card.title}
              title={card.title}
              time={card.time}
              image={card.image}
              variant={card.variant}
            />
          ))}
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
