import Link from "next/link";
import { clp } from "../lib/format";
import { featuredSlugs, getProduct, products } from "../lib/products";
import { Plate } from "../components/Plate";

export default function HomePage() {
  const featured = featuredSlugs.map((slug) => getProduct(slug));
  const hero = getProduct("pie-nube");
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
            Luminarias de interior en series cortas. Latón, lino, cerámica y madera,
            para una habitación que no necesita más ruido.
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
          <h2>Tres para empezar</h2>
          <Link href="/iluminacion" className="link-brass">
            Toda la serie
          </Link>
        </div>
        <div className="trio">
          {featured.map((product, index) => (
            <article key={product.slug}>
              <Link href={`/iluminacion/${product.slug}`} className="plate-wrap">
                <Plate slug={product.slug} title={`${product.category} ${product.name}`} />
              </Link>
              <p className="num">0{index + 1}</p>
              <div className="meta">
                <h3>
                  <Link href={`/iluminacion/${product.slug}`}>{product.name}</Link>
                </h3>
                <span className="price">{clp(product.price)}</span>
              </div>
              <p className="muted small">{product.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section wrap essay">
        <div>
          <p className="kicker">El taller</p>
          <h2>Pocas formas</h2>
          <p>
            Trabajamos una sola luz, cálida, y pocos materiales. Las piezas se arman
            en series cortas en Santiago. El catálogo no sigue temporadas: una forma
            entra cuando otra deja de servir en la mesa.
          </p>
        </div>
        <ul className="materials">
          <li>
            <span>Latón cepillado</span>
            <span>Estructura y detalle</span>
          </li>
          <li>
            <span>Lino natural</span>
            <span>Pantallas que difuminan</span>
          </li>
          <li>
            <span>Cerámica</span>
            <span>Bases de mesa</span>
          </li>
          <li>
            <span>Roble</span>
            <span>La lámpara de pie</span>
          </li>
          <li>
            <span>Andesita</span>
            <span>La base de Río</span>
          </li>
        </ul>
      </section>

      <section className="wrap index-row">
        <p>{products.length} piezas en la serie actual</p>
        <p>Desde {clp(desde)}</p>
        <Link href="/iluminacion" className="link-brass">
          Índice
        </Link>
      </section>
    </>
  );
}
