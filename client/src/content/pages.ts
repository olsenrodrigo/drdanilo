/**
 * Registro de rotas + SEO. É a fonte do sitemap.xml, do menu e das meta tags.
 * Uma rota nova só existe de verdade quando entra aqui.
 */

export interface PageMeta {
  path: string;
  /** Rótulo no menu; ausente = não aparece na navegação principal. */
  nav?: string;
  title: string;
  description: string;
  keywords: string[];
  /** Prioridade no sitemap. */
  priority: number;
  changefreq: "weekly" | "monthly" | "yearly";
}

export const pages: PageMeta[] = [
  {
    path: "/",
    nav: "Início",
    title:
      "Otorrinolaringologista em São Paulo | Dr. Danilo Martin Real — Otorrino e Otoneurologista",
    description:
      "Otorrino e otoneurologista em São Paulo. Diagnóstico e tratamento de tontura, vertigem, sinusite, dor de ouvido e de garganta, e cirurgias otorrino. Unidades no Jardim das Perdizes (Barra Funda) e no Jardim Paulista.",
    keywords: [
      "otorrinolaringologista são paulo",
      "otorrino são paulo",
      "otoneurologista são paulo",
      "otorrino jardim das perdizes",
      "otorrino barra funda",
    ],
    priority: 1.0,
    changefreq: "monthly",
  },
  {
    path: "/otoneurologia",
    nav: "Otoneurologia",
    title:
      "Otoneurologista em São Paulo | Tontura e Vertigem — Dr. Danilo Real",
    description:
      "Diagnóstico e tratamento de tontura, vertigem, VPPB, doença de Ménière e enxaqueca vestibular com exame vHIT. Otoneurologista em São Paulo (SP), com fellowship pela USP.",
    keywords: [
      "otoneurologista são paulo",
      "tratamento para vertigem",
      "exame vhit",
      "tratamento vppb",
      "médico para tontura são paulo",
      "labirintite tratamento",
    ],
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/cirurgias",
    nav: "Cirurgias",
    title:
      "Cirurgias Otorrino em São Paulo — Septoplastia, Sinusite, Amígdalas | Dr. Danilo Real",
    description:
      "Septoplastia, cirurgia de sinusite, remoção de amígdalas e adenoide e cirurgia do ronco com o Dr. Danilo Martin Real, otorrinolaringologista clínico e cirúrgico em São Paulo.",
    keywords: [
      "septoplastia são paulo",
      "cirurgia de sinusite",
      "cirurgia de amígdala adulto",
      "cirurgia de adenoide",
      "cirurgia do ronco são paulo",
      "otorrino cirurgião são paulo",
    ],
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/otorrinolaringologia",
    nav: "Otorrino Geral",
    title: "Otorrinolaringologista em São Paulo | Dr. Danilo Real",
    description:
      "Sinusite, dor de ouvido, dor de garganta e remoção de cerume com atendimento resolutivo. Otorrinolaringologista clínico em São Paulo (SP), com opção de pronto atendimento.",
    keywords: [
      "otorrino são paulo",
      "pronto atendimento otorrino",
      "tratamento de sinusite",
      "dor de ouvido otorrino",
      "remoção de cerume são paulo",
    ],
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/como-eu-cuido",
    nav: "Como eu cuido",
    title: "Como o Dr. Danilo Real cuida dos pacientes | Otorrino SP",
    description:
      "Consulta com escuta ativa, comunicação direta e plano de tratamento claro. Conheça o método de atendimento do Dr. Danilo Martin Real, otorrino e otoneurologista em São Paulo.",
    keywords: [
      "otorrino atencioso são paulo",
      "consulta otorrino humanizada",
      "otoneurologista são paulo",
    ],
    priority: 0.7,
    changefreq: "yearly",
  },
  {
    path: "/consultorio",
    nav: "Consultório",
    title: "Consultório do Dr. Danilo Real — Emunah e InterOtos | São Paulo",
    description:
      "Conheça as unidades Emunah (Jardim das Perdizes / Barra Funda) e InterOtos (Jardim Paulista), em São Paulo, onde o Dr. Danilo Martin Real atende como otorrino e otoneurologista.",
    keywords: [
      "consultório otorrino são paulo",
      "endereço otorrino sp",
      "otorrino jardins são paulo",
      "otorrino jardim das perdizes",
    ],
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/duvidas",
    nav: "Dúvidas",
    title: "Dúvidas frequentes sobre otorrino e tontura | Dr. Danilo Real",
    description:
      "Convênio, duração da consulta, exame vHIT, tratamento de tontura e como agendar. Respostas diretas do Dr. Danilo Martin Real, otorrinolaringologista em São Paulo.",
    keywords: [
      "otorrino atende convênio",
      "o que é exame vhit",
      "toda tontura precisa de cirurgia",
      "quanto tempo dura consulta otorrino",
    ],
    priority: 0.6,
    changefreq: "monthly",
  },
  {
    path: "/agendar",
    nav: "Agendar",
    title: "Agendar consulta com otorrino em São Paulo | Dr. Danilo Real",
    description:
      "Agende sua consulta com o Dr. Danilo Martin Real pelo WhatsApp. Unidades Emunah (Jardim das Perdizes / Barra Funda) e InterOtos (Jardim Paulista), em São Paulo. Atendimento particular.",
    keywords: [
      "agendar consulta otorrino são paulo",
      "marcar otorrino sp",
      "otorrino particular são paulo",
    ],
    priority: 0.8,
    changefreq: "monthly",
  },

  /* ---- Páginas de bairro (GEO local) ---- */
  {
    path: "/otorrino-jardim-das-perdizes",
    title:
      "Otorrinolaringologia no Jd. das Perdizes | Otorrino — Dr. Danilo Real",
    description:
      "Otorrinolaringologia no Jardim das Perdizes, São Paulo: tontura, vertigem, sinusite, dor de ouvido e de garganta. Dr. Danilo Martin Real atende na Emunah, Av. Marquês de São Vicente, 2219.",
    keywords: [
      "otorrinolaringologia jardim das perdizes",
      "otorrino jardim das perdizes",
      "otorrinolaringologista jd das perdizes",
      "otorrino jd das perdizes",
      "otorrino marquês de são vicente",
    ],
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/otorrino-barra-funda",
    title: "Otorrinolaringologia na Barra Funda | Otorrino — Dr. Danilo Real",
    description:
      "Otorrinolaringologia na Barra Funda, São Paulo: tontura, vertigem, sinusite e cirurgias otorrino. Dr. Danilo Martin Real atende na Emunah, no Jardim das Perdizes, dentro da região da Barra Funda.",
    keywords: [
      "otorrinolaringologia barra funda",
      "otorrino barra funda",
      "otorrinolaringologista barra funda",
      "otorrino água branca",
      "otorrino perto do metrô barra funda",
    ],
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/otorrino-jardim-paulista",
    title:
      "Otorrinolaringologia no Jd. Paulista | Otorrino Oscar Freire — Dr. Danilo Real",
    description:
      "Otorrinolaringologia no Jardim Paulista, São Paulo: tontura, vertigem, sinusite e cirurgias otorrino. Dr. Danilo Martin Real atende na InterOtos, R. Oscar Freire, 2250.",
    keywords: [
      "otorrinolaringologia jardim paulista",
      "otorrino jardim paulista",
      "otorrino oscar freire",
      "otorrino pinheiros",
      "otorrino jardins",
    ],
    priority: 0.8,
    changefreq: "monthly",
  },
];

export const pageByPath = (path: string): PageMeta | undefined =>
  pages.find((p) => p.path === path);

/** Itens do menu principal, na ordem em que aparecem. */
export const navPages = pages.filter((p) => p.nav);
