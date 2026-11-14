"use client";

import Link from "next/link";
import { clp } from "../lib/format";
import { Plate } from "./Plate";
import { useCart } from "./CartProvider";

export function LineItem({ product, qty }) {
  const { setQty } = useCart();

  return (
    <li className="line">
      <Link href={`/iluminacion/${product.slug}`} className="thumb" aria-hidden="true" tabIndex={-1}>
        <Plate slug={product.slug} title="" />
      </Link>
      <div className="line-body">
        <div className="line-top">
          <div>
            <Link href={`/iluminacion/${product.slug}`} className="line-name">
              {product.name}
            </Link>
            <p className="muted tiny">{product.category}</p>
          </div>
          <p className="line-total">{clp(product.price * qty)}</p>
        </div>
        <p className="muted tiny">{clp(product.price)} c/u</p>
        <div className="line-actions">
          <div className="qty" role="group" aria-label={`Cantidad de ${product.name}`}>
            <button
              type="button"
              onClick={() => setQty(product.slug, qty - 1)}
              disabled={qty <= 1}
              aria-label={`Disminuir ${product.name}`}
            >
              -
            </button>
            <span>{qty}</span>
            <button
              type="button"
              onClick={() => setQty(product.slug, qty + 1)}
              disabled={qty >= 12}
              aria-label={`Aumentar ${product.name}`}
            >
              +
            </button>
          </div>
          <button type="button" className="text-btn" onClick={() => setQty(product.slug, 0)}>
            Quitar
          </button>
        </div>
      </div>
    </li>
  );
}
