/**
 * Entrada usada só pela pré-renderização do build.
 * Roda no Node, monta o HTML de cada rota e devolve junto o pacote de SEO,
 * calculado pelas mesmas funções que o navegador usa.
 */
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { buildSeo } from "@/lib/seo";
import { seoForRoute, ROTA_404, SEO_404 } from "@/content/routeSeo";

export function renderPage(path: string) {
  const html = renderToString(
    <Router ssrPath={path}>
      <App />
    </Router>,
  );
  return { html, seo: buildSeo(path, seoForRoute(path)) };
}

/** Página de erro: mesma árvore React, pacote de SEO próprio. */
export function renderNotFound() {
  const html = renderToString(
    <Router ssrPath={ROTA_404}>
      <App />
    </Router>,
  );
  return { html, seo: buildSeo(ROTA_404, SEO_404) };
}

export { pages } from "@/content/pages";
