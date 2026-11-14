export const products = [
  {
    slug: "7011",
    name: "7011",
    category: "Aplique",
    price: 94000,
    summary: "Medio cilindro horizontal. Tres haces arriba y tres abajo.",
    description:
      "Una banda curva, más ancha que alta, con textura oscura. Tres LED en el borde de arriba y tres en el de abajo.",
    material: "Aluminio negro mate texturado",
    size: "Medio cilindro horizontal",
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
    summary: "El mismo arco de tres haces, más grande en el encuadre.",
    description:
      "La misma curva horizontal de 7011. Tres haces arriba y tres abajo, con el cuerpo más presente.",
    material: "Aluminio negro mate texturado",
    size: "Medio cilindro horizontal",
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
    summary: "Cilindro alto. El LED circular está en la base.",
    description:
      "La luz sale solo hacia abajo, por el LED circular de la cara inferior. Arriba no hay haz.",
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
    summary: "Cuadrado compacto, con una lente rectangular de vidrio.",
    description:
      "Un paso de luz pequeño. La lente es vidrio claro, rehundida en el frente, con el reflector a la vista.",
    material: "Aluminio negro mate y vidrio",
    size: "Cuadrado compacto",
  },
  {
    slug: "7308",
    name: "7308",
    category: "Aplique",
    price: 124000,
    summary: "Barra curva con cristal facetado. Tres haces arriba y tres abajo.",
    description:
      "Más ancha que alta. El cristal va en el frente, en facetas, y la luz sale en tres haces arriba y tres abajo.",
    material: "Aluminio negro mate y cristal texturado",
    size: "17 × 8 cm",
  },
  {
    slug: "7309",
    name: "7309",
    category: "Aplique",
    price: 118000,
    summary: "La misma barra de cristal, sin cotas.",
    description:
      "La misma pieza de 17 × 8 cm. Cristal facetado al frente y tres haces a cada lado.",
    material: "Aluminio negro mate y cristal texturado",
    size: "17 × 8 cm",
  },
  {
    slug: "7312",
    name: "7312",
    category: "Aplique",
    price: 39000,
    summary: "Escalón corto, ranura en zigzag y cuatro LED.",
    description:
      "El más corto de la serie. El cuerpo sigue el escalón, la ranura hace zigzag y hay un LED en cada esquina.",
    material: "Aluminio negro mate",
    size: "80 × 105 × 42 mm",
  },
  {
    slug: "7313",
    name: "7313",
    category: "Aplique",
    price: 52000,
    summary: "Tres escalones y seis LED.",
    description:
      "La misma ranura, en un cuerpo más ancho. Seis LED, uno en cada esquina del escalón.",
    material: "Aluminio negro mate",
    size: "120 × 130 × 42 mm",
  },
  {
    slug: "7314",
    name: "7314",
    category: "Aplique",
    price: 64000,
    summary: "Cuatro escalones y ocho LED.",
    description:
      "El zigzag más largo. Ocho LED siguen el corte, uno en cada esquina.",
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
