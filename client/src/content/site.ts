/**
 * Fonte única de verdade sobre o Dr. Danilo Martin Real.
 * Todo dado exibido no site sai daqui — nada de string solta em componente.
 */

export const site = {
  doctor: {
    name: "Dr. Danilo Martin Real",
    shortName: "Dr. Danilo Real",
    title: "Otorrinolaringologista e Otoneurologista",
    crm: "CRM/SP 150.640",
    rqe: "RQE 81846",
    /** Exigência do CFM: identificação profissional visível. */
    credential: "CRM/SP 150.640 · RQE 81846",
  },

  domain: "https://drdaniloreal.com.br",

  contact: {
    /** Confirmado no link wa.me do site atual do Dr. Danilo. */
    whatsapp: "5511932219644",
    whatsappDisplay: "(11) 93221-9644",
    /** TODO cliente: a copy indica este e-mail; o site atual usa contato@daniloreal.com.br. */
    email: "dr.danilo.real@gmail.com",
    instagram: "https://www.instagram.com/dr.danilo.real/",
    instagramHandle: "@dr.danilo.real",
    linkedin: "https://www.linkedin.com/in/danilomreal/",
  },

  /** Monta o link do WhatsApp já identificando de que página veio o contato. */
  whatsappLink(origem: string): string {
    const texto = `Olá! Vim pelo site do Dr. Danilo Real (${origem}) e gostaria de agendar uma consulta.`;
    return `https://wa.me/5511932219644?text=${encodeURIComponent(texto)}`;
  },
} as const;

export interface Unit {
  id: string;
  name: string;
  legalName?: string;
  street: string;
  complement: string;
  district: string;
  districtOfficial: string;
  city: string;
  state: string;
  zip: string;
  phone?: string;
  phoneRaw?: string;
  hours: string[];
  /** Formato schema.org openingHours (Mo, Tu, We, Th, Fr). */
  openingHours: string[];
  mapsQuery: string;
  /** Bairros que a unidade atende de fato — base das páginas de bairro. */
  areaServed: string[];
}

export const units: Unit[] = [
  {
    id: "emunah",
    name: "Emunah",
    legalName: "EMNH Instituto de Medicina",
    street: "Av. Marquês de São Vicente, 2219",
    complement: "Conj. 312 / 314 / 316",
    district: "Jardim das Perdizes",
    districtOfficial: "Água Branca / Barra Funda",
    city: "São Paulo",
    state: "SP",
    zip: "05036-040",
    phone: "(11) 3615-2474",
    phoneRaw: "+551136152474",
    hours: ["Segundas, das 13h às 17h", "Encaixes às quintas, 18h e 18h30"],
    openingHours: ["Mo 13:00-17:00"],
    mapsQuery:
      "Av. Marquês de São Vicente, 2219 - Jardim das Perdizes, São Paulo - SP, 05036-040",
    areaServed: [
      "Jardim das Perdizes",
      "Barra Funda",
      "Água Branca",
      "Perdizes",
      "Pompeia",
      "Lapa",
      "Santa Cecília",
    ],
  },
  {
    id: "interotos",
    name: "InterOtos",
    street: "R. Oscar Freire, 2250",
    complement: "Conj. 502 / 504",
    district: "Jardim Paulista",
    districtOfficial: "Pinheiros",
    city: "São Paulo",
    state: "SP",
    zip: "05409-011",
    phone: "(11) 3865-0200",
    phoneRaw: "+551138650200",
    hours: [
      "Terças, das 14h30 às 19h",
      "Quartas, das 8h30 às 13h",
      "Sextas, das 14h30 às 18h",
    ],
    openingHours: ["Tu 14:30-19:00", "We 08:30-13:00", "Fr 14:30-18:00"],
    mapsQuery:
      "R. Oscar Freire, 2250 - Jardim Paulista, São Paulo - SP, 05409-011",
    areaServed: [
      "Jardim Paulista",
      "Pinheiros",
      "Jardins",
      "Cerqueira César",
      "Vila Madalena",
      "Itaim Bibi",
    ],
  },
];

export const unitById = (id: string): Unit =>
  units.find((u) => u.id === id) ?? units[0];

export const mapsUrl = (unit: Unit): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(unit.mapsQuery)}`;

/** Depoimentos existem e são autorizados, mas o formato não foi definido no onboarding.
 *  Mantido oculto por decisão ética até haver autorização escrita. */
export const showTestimonials = false;
