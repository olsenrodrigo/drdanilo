import { useEffect } from "react";
import { buildSeo, LD_ID, type SeoOptions } from "@/lib/seo";
import { seoForRoute } from "@/content/routeSeo";

/** Cria ou atualiza uma <meta> pelo atributo indicado. */
function meta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function link(rel: string, href: string | null) {
  const existente = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (href === null) {
    existente?.remove();
    return;
  }
  const el = existente ?? document.head.appendChild(document.createElement("link"));
  el.setAttribute("rel", rel);
  el.setAttribute("href", href);
}

/**
 * Aplica title, description, canonical, Open Graph e JSON-LD da rota atual.
 * No primeiro carregamento o HTML já vem pré-renderizado com isso; o hook
 * cobre as trocas de rota, em que a SPA não recarrega o <head>.
 */
export function useSeo(path: string, overrides: SeoOptions = {}) {
  useEffect(() => {
    const data = buildSeo(path, { ...seoForRoute(path), ...overrides });

    document.title = data.title;
    for (const m of data.metas) meta(m.attr, m.key, m.content);
    link("canonical", data.canonical);

    const ldExistente = document.getElementById(LD_ID);
    if (data.jsonLd === null) {
      ldExistente?.remove();
    } else {
      const el = ldExistente ?? document.head.appendChild(
        Object.assign(document.createElement("script"), {
          id: LD_ID,
          type: "application/ld+json",
        }),
      );
      el.textContent = JSON.stringify(data.jsonLd);
    }

    window.scrollTo({ top: 0, behavior: "auto" });
    // overrides é recriado a cada render; a rota é o que de fato dispara a troca.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);
}
