"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

export function BuyBox({ slug }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <form
      className="buy"
      onSubmit={(event) => {
        event.preventDefault();
        add(slug, qty);
      }}
    >
      <div className="qty" role="group" aria-label="Cantidad">
        <button
          type="button"
          onClick={() => setQty((value) => Math.max(1, value - 1))}
          disabled={qty <= 1}
          aria-label="Disminuir cantidad"
        >
          -
        </button>
        <span>{qty}</span>
        <button
          type="button"
          onClick={() => setQty((value) => Math.min(12, value + 1))}
          disabled={qty >= 12}
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>
      <button type="submit" className="btn-add">
        Agregar al carro
      </button>
    </form>
  );
}
