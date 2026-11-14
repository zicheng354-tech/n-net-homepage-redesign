import Link from "next/link";
import { notFound } from "next/navigation";
import { clp } from "../../../lib/format";
import { getProduct, products } from "../../../lib/products";
import { Plate } from "../../../components/Plate";
import { BuyBox } from "../../../components/BuyBox";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Pieza" };
  return {
    title: `${product.category} ${product.name}`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <article className="wrap pdp">
      <div className="pdp-plate">
        <Plate slug={product.slug} title={`${product.category} ${product.name}`} />
      </div>
      <div className="pdp-info">
        <p className="kicker">{product.category}</p>
        <h1>{product.name}</h1>
        <p className="price price-lg">{clp(product.price)}</p>
        <p className="dek">{product.description}</p>
        <dl className="specs">
          <div>
            <dt>Material</dt>
            <dd>{product.material}</dd>
          </div>
          <div>
            <dt>Medidas</dt>
            <dd>{product.size}</dd>
          </div>
        </dl>
        <BuyBox slug={product.slug} />
        <p className="tiny muted note">Muestra de tienda. El pago no está conectado.</p>
        <p className="back">
          <Link href="/iluminacion" className="link-brass">
            Toda la iluminación
          </Link>
        </p>
      </div>
    </article>
  );
}
