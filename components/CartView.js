"use client";

import Link from "next/link";
import { clp } from "../lib/format";
import { getProduct } from "../lib/products";
import { useCart } from "./CartProvider";
import { LineItem } from "./LineItem";

function Notice() {
  return (
    <div className="notice" id="pago">
      <h2>El pago no está conectado</h2>
      <p>
        Esta muestra no cobra, no pide una cuenta y no confirma un pedido. Puedes cambiar
        las cantidades o volver a la colección.
      </p>
      <button type="button" className="btn-pay" disabled>
        Ir a pagar
      </button>
    </div>
  );
}

export function CartView() {
  const { items, ready } = useCart();
  const lines = items
    .map((item) => ({ ...item, product: getProduct(item.slug) }))
    .filter((item) => item.product);
  const total = lines.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  return (
    <div className="wrap cart-page">
      <header className="page-intro">
        <p className="kicker">Carro</p>
        <h1>Tu carro</h1>
      </header>

      {!ready ? (
        <p className="muted">Cargando el carro…</p>
      ) : lines.length === 0 ? (
        <div className="empty-cart">
          <p>Todavía no hay piezas en el carro.</p>
          <Link href="/iluminacion" className="link-brass">
            Ver iluminación
          </Link>
          <Notice />
        </div>
      ) : (
        <div className="cart-layout">
          <ul className="lines">
            {lines.map((item) => (
              <LineItem key={item.slug} product={item.product} qty={item.qty} />
            ))}
          </ul>
          <aside className="summary">
            <h2 className="summary-label">Resumen</h2>
            <div className="subrow">
              <span>Subtotal</span>
              <strong>{clp(total)}</strong>
            </div>
            <div className="subrow muted">
              <span>Envío</span>
              <span>No se calcula</span>
            </div>
            <Notice />
          </aside>
        </div>
      )}
    </div>
  );
}
