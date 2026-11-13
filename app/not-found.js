import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap page-intro" style={{ paddingBottom: 96 }}>
      <p className="kicker">404</p>
      <h1>Esa página no está.</h1>
      <p className="dek">La pieza o la ruta no forma parte de esta muestra.</p>
      <p style={{ marginTop: 24 }}>
        <Link href="/iluminacion" className="link-brass">
          Ver iluminación
        </Link>
      </p>
    </div>
  );
}
