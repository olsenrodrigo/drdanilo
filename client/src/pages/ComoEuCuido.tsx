import { Ear, MessageSquare, PhoneCall, RefreshCw } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import {
  PageHero,
  Section,
  Eyebrow,
  InfoCard,
  CTABand,
  WhatsAppButton,
} from "@/components/site/Primitives";

const blocos = [
  {
    icon: Ear,
    title: "Escuta ativa antes do diagnóstico",
    text: "Cada sintoma tem uma história por trás — o histórico completo direciona o exame certo, não o contrário.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação direta, sem rodeios",
    text: "Você sai da consulta sabendo o diagnóstico, as opções de tratamento e o que esperar de cada uma.",
  },
  {
    icon: PhoneCall,
    title: "Disponibilidade real",
    text: "Dúvidas depois da consulta não ficam sem resposta.",
  },
  {
    icon: RefreshCw,
    title: "Abertura para rever a hipótese",
    text: "Quando um exame ou a evolução do quadro pedem um novo caminho, eu reavalio sem apego à primeira impressão.",
  },
];

export default function ComoEuCuido() {
  useSeo("/como-eu-cuido");

  return (
    <>
      <PageHero
        eyebrow="Como eu cuido"
        title="Consulta com tempo certo e plano claro"
        lead="Antes de qualquer diagnóstico, eu escuto."
      >
        <WhatsAppButton origem="como eu cuido — topo" />
      </PageHero>

      <Section tone="white">
        <div className="container-narrow !px-0">
          <p className="text-pretty text-[0.9375rem] leading-relaxed">
            Antes de qualquer diagnóstico, eu escuto. Cada consulta começa
            entendendo o que você sente, há quanto tempo e o que já tentou —
            porque tontura, dor de ouvido, de garganta ou uma indicação cirúrgica
            raramente têm uma única explicação óbvia. Depois de ouvir, sou direto:
            explico o que está acontecendo, sem enrolação e sem termos técnicos
            desnecessários, para que você saia da consulta sabendo exatamente qual
            é o próximo passo.
          </p>
          <p className="text-pretty mt-5 text-[0.9375rem] leading-relaxed">
            Isso não significa rigidez. Tenho total abertura para rever uma
            hipótese diagnóstica sempre que novos exames ou sintomas pedem isso —
            flexibilidade intelectual faz parte do cuidado tanto quanto a técnica.
          </p>
        </div>
      </Section>

      <Section tone="sand">
        <Eyebrow>Na prática</Eyebrow>
        <h2 className="h-section text-balance max-w-2xl">
          Quatro compromissos em toda consulta
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {blocos.map((b) => (
            <InfoCard key={b.title} title={b.title} icon={b.icon}>
              {b.text}
            </InfoCard>
          ))}
        </div>
      </Section>

      <CTABand
        title="Quer uma consulta assim?"
        text="Agende um horário na Emunah ou na InterOtos."
        origem="como eu cuido — CTA final"
      />
    </>
  );
}
