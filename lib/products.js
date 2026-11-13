export const products = [
  {
    slug: "pie-nube",
    name: "Nube",
    category: "De pie",
    price: 268000,
    summary: "Fuste de roble claro y una pantalla ancha de lino.",
    description:
      "Un fuste de roble claro y una pantalla ancha. Para el rincón de lectura: la luz queda cerca y el resto de la habitación sigue en calma.",
    material: "Roble y lino natural",
    size: "Alto 158 cm · pantalla Ø 48 cm",
  },
  {
    slug: "colgante-lira",
    name: "Lira",
    category: "Colgante",
    price: 189000,
    summary: "Pantalla de lino sobre un aro de latón, para la mesa larga.",
    description:
      "Una pantalla de lino suspendida de un aro de latón. La luz cae amplia y baja, suficiente para una mesa sin encender toda la habitación.",
    material: "Latón cepillado y lino natural",
    size: "Ø 38 cm · cable 150 cm",
  },
  {
    slug: "mesa-orion",
    name: "Orión",
    category: "Mesa",
    price: 142000,
    summary: "Cerámica esmaltada en hueso y un cono de lino.",
    description:
      "Base de cerámica esmaltada en hueso. El cono de lino deja una luz cálida, justa para leer junto al velador.",
    material: "Cerámica esmaltada y lino",
    size: "Alto 42 cm · base Ø 14 cm",
  },
  {
    slug: "colgante-disco",
    name: "Disco",
    category: "Colgante",
    price: 176000,
    summary: "Un disco delgado de resina mineral, con luz lechosa.",
    description:
      "Un disco delgado de resina mineral deja pasar una luz lechosa. Casi un objeto plano, antes que una lámpara de techo.",
    material: "Resina mineral y latón",
    size: "Ø 45 cm · alto 6 cm",
  },
  {
    slug: "mesa-rio",
    name: "Río",
    category: "Mesa",
    price: 118000,
    summary: "Base de andesita y un cuello breve de latón.",
    description:
      "Un canto de andesita y un cuello breve de latón. Baja y estable, para el velador.",
    material: "Andesita y latón cepillado",
    size: "Alto 28 cm · base 16 × 12 cm",
  },
  {
    slug: "colgante-vela",
    name: "Vela",
    category: "Colgante",
    price: 214000,
    summary: "Dos pantallas de papel washi, a distinta altura.",
    description:
      "Dos pantallas de papel washi cuelgan de una barra de latón, a distintas alturas. Para una barra estrecha o una mesa de dos.",
    material: "Latón y papel washi",
    size: "Barra 72 cm · caída 40 a 120 cm",
  },
  {
    slug: "aplique-muro",
    name: "Muro",
    category: "Aplique",
    price: 96000,
    summary: "Brazo corto de latón y vidrio opal hacia la pared.",
    description:
      "Un brazo corto de latón y un vidrio opal. Se enciende hacia el muro y devuelve una luz pareja, sin deslumbrar.",
    material: "Latón y vidrio opal",
    size: "18 × 22 × 12 cm",
  },
  {
    slug: "aplique-arco",
    name: "Arco",
    category: "Aplique",
    price: 124000,
    summary: "Arco de acero carbón con un detalle de latón.",
    description:
      "Un arco fino de acero carbón con un detalle de latón. La luz apunta hacia abajo, sobre una consola o la cabecera.",
    material: "Acero carbón y latón",
    size: "Saliente 24 cm · alto 16 cm",
  },
];

export const featuredSlugs = ["colgante-lira", "mesa-orion", "pie-nube"];

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

export function catalogProducts() {
  const order = [
    "pie-nube",
    "colgante-lira",
    "mesa-orion",
    "colgante-disco",
    "mesa-rio",
    "colgante-vela",
    "aplique-muro",
    "aplique-arco",
  ];
  return order.map((slug) => getProduct(slug));
}
