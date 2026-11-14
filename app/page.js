import Link from "next/link";
import { clp } from "../lib/format";
import { getProduct, products } from "../lib/products";
import { Plate } from "../components/Plate";

const scenes = [
  {
    src: "/scenes/hallway.jpg",
    title: "Pasillo",
    text: "El Arco, en horizontal. Tres haces arriba y tres abajo.",
  },
  {
    src: "/scenes/entry.jpg",
    title: "Acceso",
    text: "El Cubo, abierto arriba y abajo.",
  },
  {
    src: "/scenes/bedroom.jpg",
    title: "Dormitorio",
    text: "La Columna sobre la cama. LED abajo y haz hacia arriba.",
  },
];

export default function HomePage() {
  const hero = getProduct("arco");
  const desde = Math.min(...products.map((product) => product.price));

  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="kicker">Serie de muro</p>
          <h1>
            Negro mate, <em>luz en el muro.</em>
          </h1>
          <p className="dek">
            Dieciséis apliques. El cuerpo es el de la foto: cubo, arco, zigzag o
            cilindro. El haz cae sobre el mismo muro claro.
          </p>
          <Link href="/iluminacion" className="link-brass">
            Ver la colección
          </Link>
        </div>
        <figure className="hero-plate">
          <Plate slug={hero.slug} title={`${hero.category} ${hero.name}`} />
          <figcaption>
            {hero.category} {hero.name} · {hero.material}
          </figcaption>
        </figure>
      </section>

      <section className="section wrap">
        <div className="section-head">
          <h2>En la casa</h2>
          <Link href="/iluminacion" className="link-brass">
            Toda la serie
          </Link>
        </div>
        <div className="trio">
          {scenes.map((scene, index) => (
            <article key={scene.title}>
              <div className="plate-wrap">
                <div className="plate">
                  <img src={scene.src} alt={scene.title} />
                </div>
              </div>
              <p className="num">0{index + 1}</p>
              <div className="meta">
                <h3>{scene.title}</h3>
              </div>
              <p className="muted small">{scene.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section wrap essay">
        <div>
          <p className="kicker">La serie</p>
          <h2>Un muro, un acabado</h2>
          <p>
            Todo el catálogo es aluminio negro mate sobre muro claro. Cambia el
            corte: cubo abierto, medio cilindro, cristal al frente, escalón en
            zigzag. El haz de la foto es el de la pieza.
          </p>
        </div>
        <ul className="materials">
          <li>
            <span>Aluminio negro mate</span>
            <span>El cuerpo</span>
          </li>
          <li>
            <span>Vidrio esmerilado</span>
            <span>Difusores y lentes</span>
          </li>
          <li>
            <span>Cristal texturado</span>
            <span>El frente de Cristal y Facetas</span>
          </li>
          <li>
            <span>Latón</span>
            <span>La cintura del Reloj</span>
          </li>
        </ul>
      </section>

      <section className="wrap index-row">
        <p>{products.length} apliques en la serie actual</p>
        <p>Desde {clp(desde)}</p>
        <Link href="/iluminacion" className="link-brass">
          Índice
        </Link>
      </section>
    </>
  );
}
