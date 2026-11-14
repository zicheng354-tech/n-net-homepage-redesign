# Senda

Muestra de tienda para una serie de dieciséis apliques de muro. La interfaz está en español y los precios en pesos chilenos. El carro vive en el navegador (`localStorage`). No hay pago, cuentas ni pedidos.

## Cómo verla en local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Export estático

```bash
npm run build
npx --yes serve out
```

El pago queda fuera de alcance: la página del carro termina en el estado «El pago no está conectado».
