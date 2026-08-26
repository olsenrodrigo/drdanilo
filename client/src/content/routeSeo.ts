/**
 * Opções de SEO por rota (FAQ que vira FAQPage, rótulo do breadcrumb).
 *
 * Existe para que o navegador e o pré-renderizador do build leiam exatamente
 * a mesma coisa: o HTML estático e o que a SPA aplica depois nunca divergem.
 */
import { faq, homeFaq, asSeoFaq } from "./faq";
import { geoPages } from "./geo";
import type { SeoFaq, SeoOptions } from "@/lib/seo";

export interface RouteSeo {
  faq?: SeoFaq[];
  breadcrumb?: string;
}

const pick = (...perguntas: string[]) =>
  asSeoFaq(faq.filter((f) => perguntas.includes(f.q)));

const base: Record<string, RouteSeo> = {
  "/": { faq: asSeoFaq(homeFaq) },
  "/como-eu-cuido": {},
  "/otoneurologia": {
    faq: pick(
      "O que é o exame vHIT e quando ele é indicado?",
      "O que é VPPB?",
      "Toda tontura precisa de cirurgia?",
    ),
  },
  "/cirurgias": {
    faq: pick(
      "O Dr. Danilo também opera?",
      "Quais cirurgias otorrino o Dr. Danilo realiza?",
    ),
  },
  "/otorrinolaringologia": {
    faq: pick(
      "Consigo atendimento para um caso agudo, que não pode esperar?",
      "Vocês atendem por convênio?",
    ),
  },
  "/consultorio": {
    faq: pick(
      "Em quais endereços o Dr. Danilo atende?",
      "Vocês atendem por convênio?",
      "Quanto tempo dura a consulta?",
    ),
  },
  "/duvidas": { faq: asSeoFaq(faq) },
  "/agendar": {},
};

/** As rotas de bairro tiram o FAQ do próprio conteúdo do bairro. */
for (const g of geoPages) {
  base[g.path] = { faq: asSeoFaq(g.perguntas), breadcrumb: g.bairro };
}

export const routeSeo = base;

export const seoForRoute = (path: string): RouteSeo => routeSeo[path] ?? {};

/** Perguntas de uma rota, no formato que os componentes exibem na tela. */
export const perguntasDaRota = (path: string) => {
  const alvo = new Set((routeSeo[path]?.faq ?? []).map((f) => f.q));
  const doGeo = geoPages.find((g) => g.path === path)?.perguntas;
  if (doGeo) return doGeo;
  return faq.filter((f) => alvo.has(f.q));
};

/** Rota falsa que nao casa com nenhuma <Route>: o wouter cai no NotFound. */
export const ROTA_404 = "/__404__";

/** Pacote de SEO da pagina de erro. Sem canonical e sem schema: uma URL
 *  inexistente nao pode se apresentar como duplicata da home. */
export const SEO_404: SeoOptions = {
  title: "Página não encontrada | Dr. Danilo Real",
  description: "A página que você procurava não existe ou mudou de endereço.",
  canonical: null,
  robots: "noindex, follow",
  schema: false,
};
