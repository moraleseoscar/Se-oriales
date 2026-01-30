export type NavLink = {
  label: string;
  href: string;
};

export type Recipe = {
  title: string;
  time: string;
  image: string;
  variant?: "dark";
};

export type FooterColumn = {
  title: string;
  items: string[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Recetas", href: "#recetas" },
  { label: "Compra", href: "#compra" },
  { label: "Contacto", href: "#contacto" },
];

export const heroImages = [
  "/assets/S-Tik-Tok-1200x628.jpg",
  "/assets/Gemini_Generated_Image_c3d71oc3d71oc3d7.png",
  "/assets/S-Tik-Tok-1200x628.jpg",
  "/assets/Gemini_Generated_Image_c3d71oc3d71oc3d7.png",
];

export const galleryImages = Array.from(
  { length: 12 },
  () => "/assets/Gemini_Generated_Image_c3d71oc3d71oc3d7.png",
);

export const recipeCards: Recipe[] = [
  {
    title: "Para una noche casual",
    time: "15min",
    image: "/assets/Gemini_Generated_Image_c3d71oc3d71oc3d7.png",
  },
  {
    title: "Para la reunión con amigos",
    time: "15min",
    image: "/assets/Gemini_Generated_Image_c3d71oc3d71oc3d7.png",
    variant: "dark",
  },
  {
    title: "Para ver el partido",
    time: "25min",
    image: "/assets/Gemini_Generated_Image_c3d71oc3d71oc3d7.png",
  },
];

export const footerColumns: FooterColumn[] = [
  { title: "Producto", items: ["Nachos Queso", "Nachos Jalapeño"] },
  {
    title: "Recetas",
    items: ["Con amigos", "El partido", "Noche casual", "Sin complicarse"],
  },
  {
    title: "Promociones",
    items: [
      "Promociones activas",
      "Dinámicas",
      "Bases y participación",
      "Actualización de ganadores",
    ],
  },
  { title: "Contacto", items: ["Tiendas de barrio", "Supermercados", "Mayoreo"] },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "f" },
  { label: "Instagram", href: "#", icon: "in" },
  { label: "TikTok", href: "#", icon: "♪" },
];

export const buyBullets = ["Tiendas de barrio", "Supermercados", "Mayoreo"];
