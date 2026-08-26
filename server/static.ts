import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // extensions: ['html'] faz /otoneurologia servir otoneurologia.html —
  // o arquivo pré-renderizado — sem redirect e sem barra no fim da URL.
  app.use(express.static(distPath, { extensions: ["html"] }));

  // URL desconhecida recebe a pagina de erro pre-renderizada, com status 404.
  // Servir a home aqui devolveria conteudo errado sob a URL errada.
  app.use("/{*path}", (_req, res) => {
    const notFound = path.resolve(distPath, "404.html");
    if (fs.existsSync(notFound)) {
      return res.status(404).sendFile(notFound);
    }
    return res.status(404).sendFile(path.resolve(distPath, "index.html"));
  });
}
