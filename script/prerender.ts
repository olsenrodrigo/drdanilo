/**
 * Pré-renderização estática. Para cada rota do registro, gera um .html completo
 * com o conteúdo já no corpo e o <head> correto.
 *
 * Por que existe: o site é uma SPA. Sem isto, todas as 11 rotas entregam o mesmo
 * shell vazio para quem não executa JavaScript — o que inclui a maioria dos
 * crawlers de LLM (GEO) e vários bots de preview de link. O Google renderiza JS,
 * mas depende de uma segunda passada; com HTML pronto, não depende.
 */
import { readFile, writeFile } from "fs/promises";
import { build as viteBuild } from "vite";
import path from "path";
import { pathToFileURL } from "url";

const OUT = "dist/public";
const SSR_DIR = "dist/ssr";

const escapeAttr = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** JSON dentro de <script> precisa escapar "</" para não fechar a tag antes da hora. */
const safeJson = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

interface MetaTag {
  attr: string;
  key: string;
  content: string;
}

function montarHead(
  title: string,
  metas: MetaTag[],
  canonical: string | null,
  jsonLd: unknown | null,
): string {
  const linhas = [`<title>${escapeAttr(title)}</title>`];
  if (canonical) linhas.push(`<link rel="canonical" href="${escapeAttr(canonical)}" />`);
  for (const m of metas) {
    linhas.push(`<meta ${m.attr}="${m.key}" content="${escapeAttr(m.content)}" />`);
  }
  if (jsonLd) {
    linhas.push(
      `<script type="application/ld+json" id="ld-json-page">${safeJson(jsonLd)}</script>`,
    );
  }
  return linhas.join("\n    ");
}

const MARCADOR = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;

function montarPagina(template: string, head: string, corpo: string): string {
  if (!MARCADOR.test(template)) {
    throw new Error(
      "client/index.html perdeu os marcadores <!-- seo:start --> / <!-- seo:end -->",
    );
  }
  return template
    .replace(MARCADOR, head)
    .replace('<div id="root"></div>', `<div id="root">${corpo}</div>`);
}

export default async function prerender() {
  // 1) Compila a árvore React para Node, resolvendo aliases e assets.
  await viteBuild({
    build: {
      ssr: path.resolve("client/src/entry-server.tsx"),
      outDir: path.resolve(SSR_DIR),
      emptyOutDir: true,
      copyPublicDir: false,
    },
    logLevel: "warn",
  });

  const mod = await import(
    pathToFileURL(path.resolve(SSR_DIR, "entry-server.js")).href
  );
  interface Renderizado {
    html: string;
    seo: {
      title: string;
      canonical: string | null;
      metas: MetaTag[];
      jsonLd: unknown | null;
    };
  }
  const { renderPage, renderNotFound, pages } = mod as {
    renderPage: (p: string) => Renderizado;
    renderNotFound: () => Renderizado;
    pages: { path: string }[];
  };

  const template = await readFile(`${OUT}/index.html`, "utf-8");

  for (const page of pages) {
    const { html, seo } = renderPage(page.path);
    const head = montarHead(seo.title, seo.metas, seo.canonical, seo.jsonLd);
    const file = page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`;
    await writeFile(`${OUT}/${file}`, montarPagina(template, head, html), "utf-8");
  }

  // 2) Página de erro própria. Sem ela, uma URL inexistente serviria o HTML da
  //    home — conteúdo errado sob canonical errado, e mismatch na hidratação.
  const { html: html404, seo: seo404 } = renderNotFound();
  const head404 = montarHead(seo404.title, seo404.metas, seo404.canonical, seo404.jsonLd);
  await writeFile(`${OUT}/404.html`, montarPagina(template, head404, html404), "utf-8");

  console.log(`prerender: ${pages.length} rotas + 404.html geradas em ${OUT}`);
}
