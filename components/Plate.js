export function Plate({ slug, title }) {
  return (
    <div className="plate">
      <img src={`/products/${slug}.jpg`} alt={title || ""} />
    </div>
  );
}
