export const products = [
  {
    slug: "arco",
    name: "Arco",
    category: "Aplique",
    price: 94000,
    summary: "Medio cilindro horizontal. Tres haces arriba y tres abajo.",
    description:
      "Una banda curva, más ancha que alta, con textura oscura. Tres LED en el borde de arriba y tres en el de abajo.",
    material: "Aluminio negro mate texturado",
    size: "Medio cilindro horizontal",
  },
  {
    slug: "cubo",
    name: "Cubo",
    category: "Aplique",
    price: 69000,
    summary: "Cubo negro mate. Lava el muro hacia arriba y hacia abajo.",
    description:
      "Un cubo compacto. La luz sale por arriba y por abajo y deja el frente en sombra.",
    material: "Aluminio negro mate",
    size: "Cuerpo cúbico",
  },
  {
    slug: "arco-mayor",
    name: "Arco mayor",
    category: "Aplique",
    price: 99000,
    summary: "El mismo arco de tres haces, más grande en el encuadre.",
    description:
      "La misma curva horizontal que Arco. Tres haces arriba y tres abajo, con el cuerpo más presente.",
    material: "Aluminio negro mate texturado",
    size: "Medio cilindro horizontal",
  },
  {
    slug: "reloj",
    name: "Reloj",
    category: "Aplique",
    price: 138000,
    summary: "Reloj de arena negro, con una cintura de latón.",
    description:
      "El cuerpo se abre hacia arriba y hacia abajo. Una banda de latón marca la cintura y la luz se abre en abanico.",
    material: "Aluminio negro mate y latón",
    size: "Cuerpo en reloj de arena",
  },
  {
    slug: "arco-corto",
    name: "Arco corto",
    category: "Aplique",
    price: 86000,
    summary: "Curva corta. Dos haces arriba y dos abajo.",
    description:
      "Un cuerpo curvo, más bajo. Dos haces cálidos hacia arriba y dos hacia abajo.",
    material: "Aluminio negro mate",
    size: "Cuerpo curvo corto",
  },
  {
    slug: "columna",
    name: "Columna",
    category: "Aplique",
    price: 112000,
    summary: "Cilindro alto. LED cálido abajo, y un lavado arriba.",
    description:
      "Un cuerpo alto y redondeado. El LED inferior enciende el muro y la luz también sube por detrás.",
    material: "Aluminio negro mate",
    size: "Cuerpo alto redondeado",
  },
  {
    slug: "cilindro",
    name: "Cilindro",
    category: "Aplique",
    price: 104000,
    summary: "Cilindro alto. El LED circular está en la base.",
    description:
      "La luz sale solo hacia abajo, por el LED circular de la cara inferior. Arriba no hay haz.",
    material: "Aluminio negro mate",
    size: "Cuerpo alto, LED circular",
  },
  {
    slug: "visera",
    name: "Visera",
    category: "Aplique",
    price: 74000,
    summary: "Rectángulo de exterior, difusor esmerilado y una visera corta.",
    description:
      "Para el acceso. El vidrio esmerilado cierra el frente y una visera corta marca el borde superior.",
    material: "Aluminio negro mate y vidrio esmerilado",
    size: "Cuerpo rectangular",
  },
  {
    slug: "caja",
    name: "Caja",
    category: "Aplique",
    price: 56000,
    summary: "Rectángulo. Un LED redondo en la cara inferior.",
    description:
      "La luz sale solo hacia abajo, por un LED circular en la base.",
    material: "Aluminio negro mate",
    size: "Cuerpo rectangular",
  },
  {
    slug: "pliegue",
    name: "Pliegue",
    category: "Aplique",
    price: 79000,
    summary: "Planos plegados y una ranura cálida en el borde inferior.",
    description:
      "Un cuerpo geométrico, plegado. La luz queda en una ranura a lo largo de la base.",
    material: "Aluminio negro mate",
    size: "Cuerpo plegado",
  },
  {
    slug: "paso",
    name: "Paso",
    category: "Aplique",
    price: 45000,
    summary: "Cuadrado compacto, con una lente rectangular de vidrio.",
    description:
      "Un paso de luz pequeño. La lente es vidrio claro, rehundida en el frente, con el reflector a la vista.",
    material: "Aluminio negro mate y vidrio",
    size: "Cuadrado compacto",
  },
  {
    slug: "cristal",
    name: "Cristal",
    category: "Aplique",
    price: 124000,
    summary: "Barra curva con cristal facetado. Tres haces arriba y tres abajo.",
    description:
      "Más ancha que alta. El cristal va en el frente, en facetas, y la luz sale en tres haces arriba y tres abajo.",
    material: "Aluminio negro mate y cristal texturado",
    size: "17 × 8 cm",
  },
  {
    slug: "facetas",
    name: "Facetas",
    category: "Aplique",
    price: 118000,
    summary: "La misma barra de cristal, sin cotas.",
    description:
      "La misma pieza de 17 × 8 cm. Cristal facetado al frente y tres haces a cada lado.",
    material: "Aluminio negro mate y cristal texturado",
    size: "17 × 8 cm",
  },
  {
    slug: "escalon",
    name: "Escalón",
    category: "Aplique",
    price: 39000,
    summary: "Escalón corto, ranura en zigzag y cuatro LED.",
    description:
      "El más corto de la serie. El cuerpo sigue el escalón, la ranura hace zigzag y hay un LED en cada esquina.",
    material: "Aluminio negro mate",
    size: "80 × 105 × 42 mm",
  },
  {
    slug: "escalon-ancho",
    name: "Escalón ancho",
    category: "Aplique",
    price: 52000,
    summary: "Tres escalones y seis LED.",
    description:
      "La misma ranura, en un cuerpo más ancho. Seis LED, uno en cada esquina del escalón.",
    material: "Aluminio negro mate",
    size: "120 × 130 × 42 mm",
  },
  {
    slug: "escalon-largo",
    name: "Escalón largo",
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
    "arco",
    "cubo",
    "arco-mayor",
    "reloj",
    "arco-corto",
    "columna",
    "cilindro",
    "visera",
    "caja",
    "pliegue",
    "paso",
    "cristal",
    "facetas",
    "escalon",
    "escalon-ancho",
    "escalon-largo",
  ];
  return order.map((slug) => getProduct(slug));
}
