import Link from "next/link";
import { clp } from "../../lib/format";
import { catalogProducts } from "../../lib/products";
import { Plate } from "../../components/Plate";

export const metadata = { title: "Iluminación" };

const wide = new Set(["7011", "7275"]);

export default function CollectionPage() {
  const list = catalogProducts();

  return (
    <div className="wrap">
      <header className="page-intro">
        <p className="kicker">Colección</p>
        <h1>Iluminación</h1>
        <p className="dek">
          Dieciséis apliques. Cada foto es esa pieza, sobre el mismo muro. Precios en pesos chilenos.
        </p>
      </header>
      <div className="catalog">
        {list.map((product) => {
          const span = wide.has(product.slug);
          const flip = product.slug === "7275";
          return (
            <article
              key={product.slug}
              className={span ? `span${flip ? " flip" : ""}` : undefined}
            >
              <Link href={`/iluminacion/${product.slug}`} className="plate-wrap">
                <Plate slug={product.slug} title={`${product.category} ${product.name}`} />
              </Link>
              <div className="cap">
                <p className="kicker">{product.category}</p>
                <h2>
                  <Link href={`/iluminacion/${product.slug}`}>{product.name}</Link>
                </h2>
                <p className="muted">{product.summary}</p>
                <p className="price">{clp(product.price)}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
