import "./globals.css";
import { Newsreader, Outfit } from "next/font/google";
import { CartProvider } from "../components/CartProvider";
import { Frame } from "../components/Frame";

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Senda — Iluminación de interior",
    template: "%s — Senda",
  },
  description:
    "Apliques de muro en aluminio negro mate. Muestra de tienda en pesos chilenos, sin pago.",
};

export const viewport = {
  themeColor: "#f3eee6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <CartProvider>
          <Frame>{children}</Frame>
        </CartProvider>
      </body>
    </html>
  );
}
