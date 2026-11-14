import Link from "next/link";
import { clp } from "../lib/format";
import { getProduct, products } from "../lib/products";
import { Plate } from "../components/Plate";

const scenes = [
  {
    src: "/scenes/hallway.jpg",
    title: "Pasillo",
    text: "Un medio cilindro lava el muro largo.",
  },
  {
    src: "/scenes/entry.jpg",
    title: "Acceso",
    text: "El cubo queda junto a la puerta.",
  },
  {
    src: "/scenes/bedroom.jpg",
    title: "Dormitorio",
    text: "Una sola pieza sobre la cabecera.",
  },
];

export default function HomePage() {
  const hero = getProduct("7011");
  const desde = Math.min(...products.map((product) => product.price));

  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="kicker">Taller en Santiago</p>
          <h1>
            Luz baja, <em>para quedarse.</em>
          </h1>
          <p className="dek">
            Apliques de muro en aluminio negro mate. Una luz cálida, hacia arriba
            y hacia abajo, para el pasillo y el dormitorio.
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
          <p className="kicker">El taller</p>
          <h2>Pocas formas</h2>
          <p>
            Una sola familia: aluminio negro mate y una luz cálida. Los apliques
            lavan el muro hacia arriba, hacia abajo, o las dos cosas. El catálogo
            no mezcla acabados.
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
            <span>El frente de 7308</span>
          </li>
          <li>
            <span>Latón</span>
            <span>La cintura de 7275</span>
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
