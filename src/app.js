import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/ssr", (req, res) => {
  const name = "Usuario SSR";
  res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>SSR - Renderizado en el Servidor</title>
            <style>body { font-family: Arial, sans-serif; }</style>
        </head>
        <body>
            <h1>Bienvenido, ${name}!</h1>
            <p>Este contenido fue generado en el servidor.</p>
            <p><a href="/csr">Ver ejemplo de CSR</a></p>
        </body>
        </html>
    `);
});

app.get("/api/user", (req, res) => {
  res.json({
    name: "Usuario CSR",
    message: "Este contenido fue cargado desde la API.",
  });
});

app.get("/csr", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/csr.html"));
});

app.get("/puppeteer", async (req, res) => {});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
