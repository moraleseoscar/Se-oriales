import Media from "./Media";

export type RecipeCardProps = {
  title: string;
  time: string;
  image: string;
  variant?: "dark";
};

export default function RecipeCard({
  title,
  time,
  image,
  variant,
}: RecipeCardProps) {
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
