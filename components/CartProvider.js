"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getProduct } from "../lib/products";

const CartContext = createContext(null);
const STORAGE_KEY = "senda-carro";

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) =>
        item &&
        typeof item.slug === "string" &&
        getProduct(item.slug) &&
        Number.isInteger(item.qty) &&
        item.qty > 0 &&
        item.qty <= 12
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setItems(readStored());
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  function add(slug, qty = 1) {
    const amount = Math.max(1, Math.min(12, qty));
    setItems((prev) => {
      const found = prev.find((item) => item.slug === slug);
      if (!found) return [...prev, { slug, qty: amount }];
      return prev.map((item) =>
        item.slug === slug ? { ...item, qty: Math.min(12, item.qty + amount) } : item
      );
    });
    setOpen(true);
  }

  function setQty(slug, qty) {
    setItems((prev) => {
      if (qty <= 0) return prev.filter((item) => item.slug !== slug);
      return prev.map((item) =>
        item.slug === slug ? { ...item, qty: Math.min(12, qty) } : item
      );
    });
  }

  const count = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider value={{ items, ready, add, setQty, open, setOpen, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
}
