/**
 * Montagem das meta tags e do JSON-LD de cada rota — sem tocar no DOM.
 *
 * Função pura de propósito: o hook useSeo aplica isto no navegador e o
 * script de pré-renderização injeta o mesmo resultado no HTML estático.
 * Uma fonte só, dois consumidores.
 */
import { site, units, mapsUrl } from "@/content/site";
import { pageByPath } from "@/content/pages";

export interface SeoFaq {
  q: string;
  a: string;
}

export interface SeoOptions {
  title?: string;
  description?: string;
  faq?: SeoFaq[];
  breadcrumb?: string;
  /** null remove o canonical — usado na pagina de erro. */
  canonical?: string | null;
  /** Sobrescreve a diretiva de indexacao. */
  robots?: string;
  /** false suprime o JSON-LD (uma pagina de erro nao descreve o consultorio). */
  schema?: boolean;
}

export interface MetaTag {
  attr: "name" | "property";
  key: string;
  content: string;
}

export interface SeoData {
  title: string;
  description: string;
  canonical: string | null;
  metas: MetaTag[];
  jsonLd: unknown | null;
}

/** MedicalClinic para cada unidade — reaproveitado no schema de todas as páginas. */
function clinicSchemas() {
  return units.map((u) => ({
    "@type": "MedicalClinic",
    name: `${u.name}${u.legalName ? ` — ${u.legalName}` : ""}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${u.street} — ${u.complement}`,
      addressLocality: u.city,
      addressRegion: u.state,
      postalCode: u.zip,
      addressCountry: "BR",
      // Bairro comercial usado pelo paciente, não o oficial dos Correios.
      addressSubLocality: u.district,
    },
    telephone: u.phoneRaw ?? `+${site.contact.whatsapp}`,
    openingHours: u.openingHours,
    hasMap: mapsUrl(u),
    areaServed: u.areaServed.map((a) => ({
      "@type": "Place",
      name: `${a}, São Paulo`,
    })),
    medicalSpecialty: "Otolaryngologic",
  }));
}

function physicianSchema() {
  return {
    "@type": "Physician",
    "@id": `${site.domain}/#physician`,
    name: site.doctor.name,
    alternateName: site.doctor.shortName,
    jobTitle: site.doctor.title,
    url: site.domain,
    image: `${site.domain}/opengraph.jpg`,
    email: site.contact.email,
    telephone: `+${site.contact.whatsapp}`,
    medicalSpecialty: ["Otolaryngologic", "Neurologic"],
    identifier: [
      { "@type": "PropertyValue", name: "CRM", value: "150640-SP" },
      { "@type": "PropertyValue", name: "RQE", value: "81846" },
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Faculdade de Medicina da USP" },
      { "@type": "MedicalOrganization", name: "Hospital das Clínicas da FMUSP" },
      { "@type": "MedicalOrganization", name: "Mayo Clinic" },
    ],
    knowsLanguage: ["pt-BR", "en", "es"],
    sameAs: [site.contact.instagram, site.contact.linkedin],
    worksFor: clinicSchemas(),
    availableService: [
      "Otoneurologia",
      "Tratamento de tontura e vertigem",
      "Exame vHIT",
      "Manobras para VPPB",
      "Septoplastia",
      "Cirurgia de sinusite",
      "Remoção de amígdalas e adenoide",
      "Cirurgia do ronco",
      "Remoção de cerume",
    ].map((s) => ({ "@type": "MedicalProcedure", name: s })),
  };
}

function breadcrumbSchema(path: string, label: string) {
  const items: {
    "@type": string;
    position: number;
    name: string;
    item: string;
  }[] = [{ "@type": "ListItem", position: 1, name: "Início", item: site.domain }];
  if (path !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: label,
      item: `${site.domain}${path}`,
    });
  }
  return { "@type": "BreadcrumbList", itemListElement: items };
}

export function buildSeo(path: string, options: SeoOptions = {}): SeoData {
  const page = pageByPath(path);
  const title = options.title ?? page?.title ?? site.doctor.name;
  const description = options.description ?? page?.description ?? "";
  const url = `${site.domain}${path}`;
  const image = `${site.domain}/opengraph.jpg`;

  const metas: MetaTag[] = [
    { attr: "name", key: "description", content: description },
    { attr: "name", key: "author", content: site.doctor.name },
    { attr: "name", key: "robots", content: options.robots ?? "index, follow, max-image-preview:large" },
    { attr: "name", key: "geo.region", content: "BR-SP" },
    { attr: "name", key: "geo.placename", content: "São Paulo" },
    { attr: "property", key: "og:title", content: title },
    { attr: "property", key: "og:description", content: description },
    { attr: "property", key: "og:url", content: url },
    { attr: "property", key: "og:type", content: "website" },
    { attr: "property", key: "og:locale", content: "pt_BR" },
    { attr: "property", key: "og:site_name", content: site.doctor.shortName },
    { attr: "property", key: "og:image", content: image },
    { attr: "name", key: "twitter:card", content: "summary_large_image" },
    { attr: "name", key: "twitter:title", content: title },
    { attr: "name", key: "twitter:description", content: description },
    { attr: "name", key: "twitter:image", content: image },
  ];

  if (page?.keywords?.length) {
    metas.splice(1, 0, {
      attr: "name",
      key: "keywords",
      content: page.keywords.join(", "),
    });
  }

  const graph: unknown[] = [
    {
      "@type": "WebSite",
      "@id": `${site.domain}/#website`,
      url: site.domain,
      name: `${site.doctor.shortName} — ${site.doctor.title}`,
      inLanguage: "pt-BR",
      publisher: { "@id": `${site.domain}/#physician` },
    },
    physicianSchema(),
    breadcrumbSchema(path, options.breadcrumb ?? page?.nav ?? title),
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${site.domain}/#website` },
      about: { "@id": `${site.domain}/#physician` },
      inLanguage: "pt-BR",
    },
  ];

  if (options.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: options.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  const canonical = options.canonical === null ? null : (options.canonical ?? url);

  return {
    title,
    description,
    canonical,
    metas,
    jsonLd:
      options.schema === false
        ? null
        : { "@context": "https://schema.org", "@graph": graph },
  };
}

export const LD_ID = "ld-json-page";
