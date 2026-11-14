"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clp } from "../lib/format";
import { getProduct } from "../lib/products";
import { useCart } from "./CartProvider";
import { LineItem } from "./LineItem";

export function Frame({ children }) {
  const pathname = usePathname();
  const { items, count, open, setOpen, ready } = useCart();
  const closeRef = useRef(null);
  const lines = items
    .map((item) => ({ ...item, product: getProduct(item.slug) }))
    .filter((item) => item.product);
  const total = lines.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, setOpen]);

  return (
    <div className="shell">
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="wrap bar">
          <Link href="/" className="wordmark">
            Senda
            <span>Apliques de muro</span>
          </Link>
          <nav className="nav" aria-label="Principal">
            <Link href="/iluminacion" aria-current={pathname.startsWith("/iluminacion") ? "page" : undefined}>
              Iluminación
            </Link>
            <button
              type="button"
              className="nav-btn"
              aria-current={pathname === "/carrito" ? "page" : undefined}
              onClick={() => setOpen(true)}
            >
              Carro
              {ready && count > 0 ? <span className="count"> {count}</span> : null}
            </button>
          </nav>
        </div>
      </header>
      <main id="contenido">{children}</main>
      <footer className="site-footer">
        <div className="wrap foot">
          <div>
            <strong>Senda</strong>
            <p>Negro mate sobre muro claro. La luz sale en haces, arriba o abajo.</p>
          </div>
          <div>
            <strong>Colección</strong>
            <p>
              <Link href="/iluminacion">Iluminación</Link>
            </p>
          </div>
          <div>
            <strong>Muestra</strong>
            <p>Precios en pesos chilenos. El pago no está conectado.</p>
          </div>
        </div>
      </footer>

      {open ? (
        <>
          <button type="button" className="overlay" aria-label="Cerrar carro" onClick={() => setOpen(false)} />
          <div className="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
            <header>
              <h2 id="drawer-title">Carro</h2>
              <button type="button" className="text-btn" onClick={() => setOpen(false)} ref={closeRef}>
                Cerrar
              </button>
            </header>
            {lines.length === 0 ? (
              <div className="drawer-empty">
                <p>Todavía no hay piezas.</p>
                <Link href="/iluminacion" className="link-brass">
                  Ver iluminación
                </Link>
              </div>
            ) : (
              <ul className="lines drawer-lines">
                {lines.map((item) => (
                  <LineItem key={item.slug} product={item.product} qty={item.qty} />
                ))}
              </ul>
            )}
            <footer>
              <div className="subrow">
                <span>Subtotal</span>
                <strong>{ready ? clp(total) : "—"}</strong>
              </div>
              <p className="tiny muted">El pago no está conectado.</p>
              <Link href="/carrito" className="btn-add btn-block">
                Ver carro
              </Link>
            </footer>
          </div>
        </>
      ) : null}
    </div>
  );
}
