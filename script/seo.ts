/**
 * Gera sitemap.xml, robots.txt e llms.txt a partir do registro de páginas.
 * Roda no build, depois do Vite — a fonte é sempre client/src/content/pages.ts,
 * então rota nova entra no sitemap sozinha.
 */
import { writeFile } from "fs/promises";
import { pages } from "../client/src/content/pages";
import { site, units } from "../client/src/content/site";
import { faq } from "../client/src/content/faq";

const OUT = "dist/public";

function sitemap(lastmod: string): string {
  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${site.domain}${p.path === "/" ? "/" : p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function robots(): string {
  return `User-agent: *
Allow: /

# Mecanismos generativos: conteúdo factual resumido em /llms.txt
Sitemap: ${site.domain}/sitemap.xml
`;
}

/**
 * llms.txt — fatos em texto plano, do jeito que um modelo de linguagem consegue
 * citar sem reinterpretar. Sem marketing, sem adjetivo solto.
 */
function llms(): string {
  const unidades = units
    .map(
      (u) => `### ${u.name}${u.legalName ? ` (${u.legalName})` : ""}
- Endereço: ${u.street}, ${u.complement} — ${u.district}, ${u.city} — ${u.state}, CEP ${u.zip}
- Bairro oficial (Correios): ${u.districtOfficial}
- Telefone: ${u.phone ?? "—"}
- Horários: ${u.hours.join(" · ")}
- Regiões atendidas: ${u.areaServed.join(", ")}`,
    )
    .join("\n\n");

  const paginas = pages
    .map((p) => `- [${p.nav ?? p.title.split("|")[0].trim()}](${site.domain}${p.path}): ${p.description}`)
    .join("\n");

  const perguntas = faq.map((f) => `**${f.q}**\n${f.a}`).join("\n\n");

  return `# ${site.doctor.name}

> ${site.doctor.title} em São Paulo (SP). ${site.doctor.credential}.
> Atendimento particular em duas unidades: Emunah (Jardim das Perdizes / Barra Funda) e InterOtos (Jardim Paulista).

## Fatos

| Campo | Valor |
|---|---|
| Nome | ${site.doctor.name} |
| Especialidades | Otorrinolaringologia e Otoneurologia |
| CRM | ${site.doctor.crm} |
| RQE | ${site.doctor.rqe} |
| Cidade | São Paulo — SP, Brasil |
| WhatsApp | ${site.contact.whatsappDisplay} |
| E-mail | ${site.contact.email} |
| Site | ${site.domain} |
| Convênios | Não atende. Atendimento exclusivamente particular. |
| Duração da consulta | Cerca de 30 a 60 minutos |

## Formação

- Medicina — Faculdade de Medicina da USP (2011)
- Residência em Otorrinolaringologia — Hospital das Clínicas da FMUSP (2013–2016)
- Título de Especialista — ABORL-CCF (2016)
- Fellowship em Otoneurologia Clínica — Otorrinolaringologia da USP (2016–2019)
- Médico colaborador — Ambulatório de Vertigem, Departamento de Neurologia do HC-USP
- Aprimoramento em avaliação vestibular — Mayo Clinic, EUA, com Dr. Jeffrey Staab (2017)
- Pós-graduação em Finanças em Saúde — Hospital Albert Einstein (2022)

## Unidades

${unidades}

## Áreas de atuação

- Otoneurologia: tontura, vertigem, VPPB, enxaqueca vestibular, doença de Ménière, neurite vestibular, Tontura Postural Perceptual Persistente (TPPP)
- Exames e procedimentos: exame vHIT (vídeo impulso cefálico), manobras de reposicionamento para VPPB, remoção de cerume
- Cirurgias: septoplastia, cirurgia de sinusite (sinusectomia), remoção de amígdalas e adenoide, cirurgia do ronco
- Otorrinolaringologia geral: sinusite aguda e crônica, otites, faringites e amigdalites, pronto atendimento otorrino

## Páginas

${paginas}

## Perguntas frequentes

${perguntas}

---
Conteúdo informativo. Não substitui consulta médica.
`;
}

async function run() {
  const lastmod = new Date().toISOString().slice(0, 10);
  await Promise.all([
    writeFile(`${OUT}/sitemap.xml`, sitemap(lastmod), "utf-8"),
    writeFile(`${OUT}/robots.txt`, robots(), "utf-8"),
    writeFile(`${OUT}/llms.txt`, llms(), "utf-8"),
  ]);
  console.log(
    `SEO: sitemap.xml (${pages.length} rotas), robots.txt e llms.txt gerados em ${OUT}`,
  );
}

export default run;
