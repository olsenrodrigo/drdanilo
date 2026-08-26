/**
 * Dúvidas frequentes. Fonte da FAQ curta da home, da página /duvidas
 * e do JSON-LD FAQPage (que é o que mecanismos generativos leem).
 *
 * Texto derivado da copy aprovada, com os typos evidentes do arquivo corrigidos
 * ("remédiocirurgia" → cirurgia; "EntreCerca de 30 e 60" → cerca de 30 a 60).
 */

export interface FaqItem {
  q: string;
  a: string;
  /** Aparece na FAQ curta da home (a copy pede as 6 principais). */
  home?: boolean;
}

export const faq: FaqItem[] = [
  {
    q: "Vocês atendem por convênio?",
    a: "Não, o atendimento é particular.",
    home: true,
  },
  {
    q: "Quanto tempo dura a consulta?",
    a: "Cerca de 30 a 60 minutos — tempo pensado para haver escuta de verdade e espaço para explicar o diagnóstico.",
    home: true,
  },
  {
    q: "Em quais endereços o Dr. Danilo atende?",
    a: "Na Emunah, no Jardim das Perdizes (região da Barra Funda), e na InterOtos, no Jardim Paulista — ambas em São Paulo (SP). Os dias e horários de cada unidade estão na página Consultório.",
    home: true,
  },
  {
    q: "O que é o exame vHIT e quando ele é indicado?",
    a: "É um exame de vídeo impulso cefálico que avalia o funcionamento do labirinto, indicado para investigar tontura e vertigem persistentes.",
    home: true,
  },
  {
    q: "Toda tontura precisa de cirurgia?",
    a: "Não. A maioria dos casos se resolve com manobras específicas e tratamento clínico; a cirurgia só entra quando realmente é necessária.",
    home: true,
  },
  {
    q: "Como faço para agendar?",
    a: "Pelo WhatsApp, no (11) 93221-9644 — o botão de agendamento está em todas as páginas do site.",
    home: true,
  },
  {
    q: "O Dr. Danilo também opera?",
    a: "Sim. Ele atua como otorrinolaringologista clínico e cirúrgico desde 2016, o que significa que o mesmo médico que indica a cirurgia é quem opera e acompanha antes e depois dela.",
  },
  {
    q: "O que é VPPB?",
    a: "Vertigem Posicional Paroxística Benigna: a causa mais comum de tontura. Em muitos casos o alívio começa já na primeira consulta, com manobras específicas de reposicionamento.",
  },
  {
    q: "Consigo atendimento para um caso agudo, que não pode esperar?",
    a: "Há encaixes disponíveis para queixas agudas de ouvido, nariz e garganta que não podem aguardar a próxima consulta de rotina. Consulte a disponibilidade pelo WhatsApp.",
  },
  {
    q: "Quais são as principais causas de tontura investigadas na consulta?",
    a: "VPPB, enxaqueca vestibular, doença de Ménière, neurite vestibular e Tontura Postural Perceptual Persistente (TPPP), entre outras. Tontura é sintoma, não diagnóstico — a investigação existe justamente para separar essas causas.",
  },
  {
    q: "Qual a formação do Dr. Danilo?",
    a: "Medicina pela Faculdade de Medicina da USP (2011), residência em Otorrinolaringologia pelo Hospital das Clínicas da FMUSP (2013–2016), Título de Especialista pela ABORL-CCF (2016) e fellowship em Otoneurologia Clínica pela USP (2016–2019), com estágio de aprimoramento em avaliação vestibular na Mayo Clinic (EUA), em 2017.",
  },
  {
    q: "Quais cirurgias otorrino o Dr. Danilo realiza?",
    a: "Septoplastia (correção do desvio de septo), cirurgia de sinusite, remoção de amígdalas e adenoide e cirurgia do ronco em casos selecionados.",
  },
];

export const homeFaq = faq.filter((f) => f.home);

/** Formato aceito pelo useSeo para gerar o FAQPage. */
export const asSeoFaq = (items: FaqItem[]) =>
  items.map(({ q, a }) => ({ q, a }));
