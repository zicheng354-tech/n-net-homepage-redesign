export const products = [
  {
    slug: "7011",
    name: "7011",
    category: "Aplique",
    price: 94000,
    summary: "Medio cilindro texturado. Tres haces arriba y tres abajo.",
    description:
      "Un medio cilindro de aluminio negro mate, con textura oscura. Tres haces cálidos suben por el muro y tres bajan.",
    material: "Aluminio negro mate texturado",
    size: "Medio cilindro",
  },
  {
    slug: "7010",
    name: "7010",
    category: "Aplique",
    price: 69000,
    summary: "Cubo negro mate. Lava el muro hacia arriba y hacia abajo.",
    description:
      "Un cubo compacto. La luz sale por arriba y por abajo y deja el frente en sombra.",
    material: "Aluminio negro mate",
    size: "Cuerpo cúbico",
  },
  {
    slug: "7013",
    name: "7013",
    category: "Aplique",
    price: 99000,
    summary: "Cuerpo curvo. Tres haces arriba y tres abajo.",
    description:
      "La misma lectura de tres haces, en un arco más presente sobre el muro.",
    material: "Aluminio negro mate",
    size: "Cuerpo curvo",
  },
  {
    slug: "7275",
    name: "7275",
    category: "Aplique",
    price: 138000,
    summary: "Reloj de arena negro, con una cintura de latón.",
    description:
      "El cuerpo se abre hacia arriba y hacia abajo. Una banda de latón marca la cintura y la luz se abre en abanico.",
    material: "Aluminio negro mate y latón",
    size: "Cuerpo en reloj de arena",
  },
  {
    slug: "7273",
    name: "7273",
    category: "Aplique",
    price: 86000,
    summary: "Curva corta. Dos haces arriba y dos abajo.",
    description:
      "Un cuerpo curvo, más bajo. Dos haces cálidos hacia arriba y dos hacia abajo.",
    material: "Aluminio negro mate",
    size: "Cuerpo curvo corto",
  },
  {
    slug: "7257",
    name: "7257",
    category: "Aplique",
    price: 112000,
    summary: "Cilindro alto. LED cálido abajo, y un lavado arriba.",
    description:
      "Un cuerpo alto y redondeado. El LED inferior enciende el muro y la luz también sube por detrás.",
    material: "Aluminio negro mate",
    size: "Cuerpo alto redondeado",
  },
  {
    slug: "7266",
    name: "7266",
    category: "Aplique",
    price: 104000,
    summary: "Cuerpo alto con el extremo redondo y un LED circular abajo.",
    description:
      "La misma familia alta. El extremo superior es redondo y el LED circular queda a la vista, en la base.",
    material: "Aluminio negro mate",
    size: "Cuerpo alto, LED circular",
  },
  {
    slug: "7256",
    name: "7256",
    category: "Aplique",
    price: 74000,
    summary: "Rectángulo de exterior, difusor esmerilado y una visera corta.",
    description:
      "Para el acceso. El vidrio esmerilado cierra el frente y una visera corta marca el borde superior.",
    material: "Aluminio negro mate y vidrio esmerilado",
    size: "Cuerpo rectangular",
  },
  {
    slug: "7258",
    name: "7258",
    category: "Aplique",
    price: 56000,
    summary: "Rectángulo. Un LED redondo en la cara inferior.",
    description:
      "La luz sale solo hacia abajo, por un LED circular en la base.",
    material: "Aluminio negro mate",
    size: "Cuerpo rectangular",
  },
  {
    slug: "7259",
    name: "7259",
    category: "Aplique",
    price: 79000,
    summary: "Planos plegados y una ranura cálida en el borde inferior.",
    description:
      "Un cuerpo geométrico, plegado. La luz queda en una ranura a lo largo de la base.",
    material: "Aluminio negro mate",
    size: "Cuerpo plegado",
  },
  {
    slug: "7264",
    name: "7264",
    category: "Aplique",
    price: 45000,
    summary: "Cuadrado compacto, con una lente rectangular rehundida.",
    description:
      "Un paso de luz pequeño. La lente esmerilada va rehundida en el cuadrado.",
    material: "Aluminio negro mate y lente esmerilada",
    size: "Cuadrado compacto",
  },
  {
    slug: "7308",
    name: "7308",
    category: "Aplique",
    price: 124000,
    summary: "Frente de cristal texturado. Tres haces arriba y tres abajo.",
    description:
      "Un cuerpo curvo y estrecho. El cristal del frente rompe la luz en tres haces hacia arriba y tres hacia abajo.",
    material: "Aluminio negro mate y cristal texturado",
    size: "17 × 8 cm",
  },
  {
    slug: "7309",
    name: "7309",
    category: "Aplique",
    price: 118000,
    summary: "El mismo frente de cristal, visto más de cerca.",
    description:
      "La misma pieza de cristal texturado y tres haces a cada lado, sin marcas de medida.",
    material: "Aluminio negro mate y cristal texturado",
    size: "17 × 8 cm",
  },
  {
    slug: "7312",
    name: "7312",
    category: "Aplique",
    price: 39000,
    summary: "Placa pequeña, ranura en zigzag y cuatro LED en las esquinas.",
    description:
      "El más corto de la serie de paso. Una ranura en zigzag y un LED en cada esquina.",
    material: "Aluminio negro mate",
    size: "80 × 105 × 42 mm",
  },
  {
    slug: "7313",
    name: "7313",
    category: "Aplique",
    price: 52000,
    summary: "Zigzag más ancho, con seis LED.",
    description:
      "La misma ranura, en una placa más ancha. Seis puntos de luz a lo largo del corte.",
    material: "Aluminio negro mate",
    size: "120 × 130 × 42 mm",
  },
  {
    slug: "7314",
    name: "7314",
    category: "Aplique",
    price: 64000,
    summary: "El zigzag más largo, con ocho LED.",
    description:
      "La placa más larga de la serie. Ocho LED siguen el corte en zigzag.",
    material: "Aluminio negro mate",
    size: "160 × 160 × 42 mm",
  },
];

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

export function catalogProducts() {
  const order = [
    "7011",
    "7010",
    "7013",
    "7275",
    "7273",
    "7257",
    "7266",
    "7256",
    "7258",
    "7259",
    "7264",
    "7308",
    "7309",
    "7312",
    "7313",
    "7314",
  ];
  return order.map((slug) => getProduct(slug));
}
