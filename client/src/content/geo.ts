/**
 * Conteúdo das páginas de bairro. Fica aqui, e não dentro do componente,
 * porque a pré-renderização precisa ler as perguntas de cada rota para
 * montar o FAQPage sem executar o React no navegador.
 *
 * Regra: nada de texto reciclado entre bairros. Página de bairro com conteúdo
 * duplicado é doorway page e o Google trata como tal.
 */
import type { FaqItem } from "./faq";

export interface GeoContent {
  path: string;
  bairro: string;
  unitId: string;
  title: string;
  lead: string;
  intro: string;
  referencias: { icon: "map" | "train" | "nav"; title: string; text: string }[];
  perguntas: FaqItem[];
  vizinhas: { href: string; label: string }[];
}

export const geoPages: GeoContent[] = [
  {
    path: "/otorrino-jardim-das-perdizes",
    bairro: "Jardim das Perdizes",
    unitId: "emunah",
    title: "Otorrinolaringologia no Jardim das Perdizes",
    lead: "Tontura, vertigem, sinusite, dor de ouvido e de garganta — com consultório na Av. Marquês de São Vicente, dentro do Jardim das Perdizes.",
    intro:
      "O Jardim das Perdizes é um bairro planejado e recente, erguido sobre uma antiga área industrial entre a Água Branca e a Barra Funda, na zona oeste de São Paulo. É ali, na Av. Marquês de São Vicente, 2219, que fica a Emunah — onde atendo às segundas-feiras, com encaixes às quintas. Para quem mora ou trabalha na região, a vantagem prática é não atravessar a cidade para ter uma avaliação otorrinolaringológica ou otoneurológica completa: a consulta, o exame vHIT e as manobras para VPPB acontecem no mesmo lugar.",
    referencias: [
      {
        icon: "map",
        title: "Av. Marquês de São Vicente, 2219",
        text: "Conjuntos 312, 314 e 316. A avenida corta o Jardim das Perdizes no sentido Água Branca–Barra Funda e é uma das principais ligações do bairro.",
      },
      {
        icon: "train",
        title: "Transporte público",
        text: "A região é servida pelo Terminal Intermodal Palmeiras-Barra Funda, que reúne Metrô (Linha 3-Vermelha), CPTM (Linhas 7-Rubi e 8-Diamante) e o terminal rodoviário.",
      },
      {
        icon: "nav",
        title: "De carro",
        text: "Acesso rápido pela Marginal Tietê e pela Av. Francisco Matarazzo, principais vias que delimitam a região do Jardim das Perdizes e da Água Branca.",
      },
    ],
    perguntas: [
      {
        q: "O consultório fica dentro do Jardim das Perdizes?",
        a: "Sim. A Emunah fica na Av. Marquês de São Vicente, 2219, no Jardim das Perdizes. Nos Correios, o CEP 05036-040 aparece como Água Branca — o bairro oficial da região —, mas o endereço está dentro do Jardim das Perdizes.",
      },
      {
        q: "Quais são os dias de atendimento no Jardim das Perdizes?",
        a: "Segundas-feiras, das 13h às 17h, com encaixes às quintas, às 18h e 18h30. Para outros dias, atendo também na InterOtos, no Jardim Paulista.",
      },
      {
        q: "Faço o exame vHIT no próprio consultório do Jardim das Perdizes?",
        a: "Sim. A avaliação de tontura e vertigem, incluindo o exame vHIT e as manobras de reposicionamento para VPPB, é feita na própria consulta.",
      },
      {
        q: "O atendimento no Jardim das Perdizes é por convênio?",
        a: "Não. O atendimento é particular em todas as unidades.",
      },
    ],
    vizinhas: [
      { href: "/otorrino-barra-funda", label: "Otorrino na Barra Funda" },
      { href: "/otorrino-jardim-paulista", label: "Otorrino no Jardim Paulista" },
      { href: "/consultorio", label: "Todas as unidades" },
    ],
  },
  {
    path: "/otorrino-barra-funda",
    bairro: "Barra Funda",
    unitId: "emunah",
    title: "Otorrinolaringologia na Barra Funda",
    lead: "Otorrino e otoneurologista na região da Barra Funda, com consultório na Av. Marquês de São Vicente, no Jardim das Perdizes.",
    intro:
      "A Barra Funda é um dos principais entroncamentos da zona oeste de São Paulo: reúne metrô, trem, rodoviária e o acesso à Marginal Tietê num raio curto. Atendo na Emunah, na Av. Marquês de São Vicente, 2219 — endereço que fica no Jardim das Perdizes, dentro da região da Barra Funda e do distrito administrativo que leva o mesmo nome. Para quem chega de transporte público de outras zonas da cidade, é uma das unidades mais fáceis de alcançar sem carro, o que faz diferença para quem está em crise de tontura ou vertigem e não pode dirigir.",
    referencias: [
      {
        icon: "train",
        title: "Terminal Palmeiras-Barra Funda",
        text: "Metrô Linha 3-Vermelha, CPTM Linhas 7-Rubi e 8-Diamante e terminal rodoviário no mesmo complexo — a principal referência de chegada à região.",
      },
      {
        icon: "map",
        title: "Pontos conhecidos da região",
        text: "O consultório fica no entorno de referências como o Memorial da América Latina, o Parque da Água Branca e o Allianz Parque, todos na mesma faixa entre a Barra Funda e a Água Branca.",
      },
      {
        icon: "nav",
        title: "De carro",
        text: "Chegada pela Marginal Tietê ou pela Av. Francisco Matarazzo, com a Av. Marquês de São Vicente cruzando toda a região.",
      },
    ],
    perguntas: [
      {
        q: "O consultório fica na Barra Funda mesmo?",
        a: "Fica na Av. Marquês de São Vicente, 2219, no Jardim das Perdizes — dentro da região e do distrito da Barra Funda, na zona oeste de São Paulo. Nos Correios, o CEP consta como Água Branca.",
      },
      {
        q: "Dá para chegar de metrô ou trem?",
        a: "Sim. A referência de transporte é o Terminal Intermodal Palmeiras-Barra Funda, que integra Metrô Linha 3-Vermelha, CPTM Linhas 7-Rubi e 8-Diamante e a rodoviária.",
      },
      {
        q: "Atende tontura e vertigem na Barra Funda?",
        a: "Sim. A otoneurologia é a minha principal área de atuação: avaliação de VPPB, enxaqueca vestibular, doença de Ménière, neurite vestibular e TPPP, com exame vHIT e manobras de reposicionamento.",
      },
      {
        q: "Quais são os horários de atendimento na região?",
        a: "Na Emunah, segundas-feiras das 13h às 17h, com encaixes às quintas, 18h e 18h30.",
      },
    ],
    vizinhas: [
      { href: "/otorrino-jardim-das-perdizes", label: "Otorrino no Jardim das Perdizes" },
      { href: "/otorrino-jardim-paulista", label: "Otorrino no Jardim Paulista" },
      { href: "/consultorio", label: "Todas as unidades" },
    ],
  },
  {
    path: "/otorrino-jardim-paulista",
    bairro: "Jardim Paulista",
    unitId: "interotos",
    title: "Otorrinolaringologia no Jardim Paulista",
    lead: "Otorrino e otoneurologista na R. Oscar Freire, 2250, entre o Jardim Paulista e Pinheiros — três dias por semana.",
    intro:
      "A InterOtos fica na R. Oscar Freire, 2250, no trecho em que o Jardim Paulista encontra Pinheiros, perto da Av. Rebouças. É a unidade onde atendo com mais frequência: terças, quartas e sextas. A região concentra parte da referência médica da cidade e é bem servida de transporte, o que ajuda quem precisa de um retorno rápido depois de uma manobra para VPPB ou de um pós-operatório de septoplastia.",
    referencias: [
      {
        icon: "map",
        title: "R. Oscar Freire, 2250",
        text: "Conjuntos 502 e 504, no trecho da Oscar Freire próximo à Av. Rebouças — divisa entre o Jardim Paulista, Cerqueira César e Pinheiros.",
      },
      {
        icon: "train",
        title: "Metrô Oscar Freire",
        text: "A Estação Oscar Freire, da Linha 4-Amarela, fica na própria Rua Oscar Freire, a poucos números do consultório.",
      },
      {
        icon: "nav",
        title: "De carro",
        text: "Acesso pela Av. Rebouças e pela Av. Dr. Arnaldo, com ligação rápida para a Av. Paulista e para a Marginal Pinheiros.",
      },
    ],
    perguntas: [
      {
        q: "Quais os dias de atendimento no Jardim Paulista?",
        a: "Terças, das 14h30 às 19h; quartas, das 8h30 às 13h; e sextas, das 14h30 às 18h, na InterOtos.",
      },
      {
        q: "O consultório fica perto do metrô?",
        a: "Sim. A Estação Oscar Freire, da Linha 4-Amarela, fica na mesma rua, a uma curta caminhada do número 2250.",
      },
      {
        q: "É possível fazer cirurgia otorrino a partir dessa unidade?",
        a: "Sim. A avaliação cirúrgica de septoplastia, sinusite, amígdalas, adenoide e ronco é feita em consulta, e quem indica a cirurgia é o mesmo médico que opera e acompanha antes e depois.",
      },
      {
        q: "A unidade do Jardim Paulista atende convênio?",
        a: "Não. O atendimento é particular em todas as unidades.",
      },
    ],
    vizinhas: [
      { href: "/otorrino-jardim-das-perdizes", label: "Otorrino no Jardim das Perdizes" },
      { href: "/otorrino-barra-funda", label: "Otorrino na Barra Funda" },
      { href: "/consultorio", label: "Todas as unidades" },
    ],
  },
];

export const geoByPath = (path: string): GeoContent | undefined =>
  geoPages.find((g) => g.path === path);
