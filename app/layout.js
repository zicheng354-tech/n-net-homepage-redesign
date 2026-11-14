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
    default: "Senda — Apliques de muro",
    template: "%s — Senda",
  },
  description:
    "Apliques de muro en aluminio negro mate. Cada foto corresponde a esa pieza. Muestra en pesos chilenos, sin pago.",
};

export const viewport = {
  themeColor: "#e7e4df",
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
