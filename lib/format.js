export function clp(value) {
  const formatted = new Intl.NumberFormat("es-CL", {
    maximumFractionDigits: 0,
  }).format(value);
  return `$${formatted}`;
}
