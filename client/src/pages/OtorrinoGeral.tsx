import { useSeo } from "@/hooks/useSeo";
import {
  PageHero,
  Section,
  Eyebrow,
  InfoCard,
  CTABand,
  WhatsAppButton,
} from "@/components/site/Primitives";
import { Droplets, Ear, Thermometer, Sparkles, Zap } from "lucide-react";

const blocos = [
  {
    icon: Droplets,
    title: "Sinusite aguda e crônica",
    text: "Diagnóstico e tratamento, com avaliação cirúrgica quando o caso exige.",
  },
  {
    icon: Ear,
    title: "Dor de ouvido e infecções",
    text: "Avaliação e tratamento de otites e outras infecções do ouvido.",
  },
  {
    icon: Thermometer,
    title: "Dor e inflamação na garganta",
    text: "Investigação e tratamento de faringites, amigdalites e quadros recorrentes.",
  },
  {
    icon: Sparkles,
    title: "Remoção de cerume",
    text: "Procedimento simples e seguro, feito em consultório.",
  },
  {
    icon: Zap,
    title: "Pronto atendimento otorrino",
    text: "Encaixes disponíveis para queixas agudas que não podem esperar a próxima consulta de rotina.",
  },
];

export default function OtorrinoGeral() {
  useSeo("/otorrinolaringologia");

  return (
    <>
      <PageHero
        eyebrow="Otorrinolaringologia geral"
        title="Do pronto atendimento ao acompanhamento — cuidado completo de ouvido, nariz e garganta"
        lead="Queixas do dia a dia que merecem atendimento rápido e resolutivo."
      >
        <WhatsAppButton origem="otorrino geral — topo" />
      </PageHero>

      <Section tone="white">
        <div className="container-narrow !px-0">
          <p className="text-pretty text-[0.9375rem] leading-relaxed">
            Sinusite que não passa, dor de ouvido, dor de garganta recorrente ou
            aquele incômodo de cerume acumulado — são queixas do dia a dia que
            merecem atendimento rápido e resolutivo. Atendo o espectro completo da
            otorrinolaringologia clínica, com a possibilidade de encaixe para casos
            que não podem esperar.
          </p>
        </div>
      </Section>

      <Section tone="sand">
        <Eyebrow>O que eu atendo</Eyebrow>
        <h2 className="h-section text-balance max-w-2xl">
          Ouvido, nariz e garganta — do agudo ao crônico
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blocos.map((b) => (
            <InfoCard key={b.title} title={b.title} icon={b.icon}>
              {b.text}
            </InfoCard>
          ))}
        </div>
      </Section>

      <CTABand
        title="Uma queixa simples também merece atendimento especializado."
        origem="otorrino geral — CTA final"
      />
    </>
  );
}
