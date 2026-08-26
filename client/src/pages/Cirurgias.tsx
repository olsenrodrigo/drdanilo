import { useSeo } from "@/hooks/useSeo";
import {
  PageHero,
  Section,
  Eyebrow,
  InfoCard,
  CTABand,
  WhatsAppButton,
} from "@/components/site/Primitives";
import { Wind, Droplets, Shield, Moon } from "lucide-react";

const procedimentos = [
  {
    icon: Wind,
    title: "Septoplastia",
    text: "Correção do desvio de septo nasal, quando ele compromete a respiração.",
  },
  {
    icon: Droplets,
    title: "Cirurgia de sinusite (sinusectomia)",
    text: "Indicada para sinusites crônicas que não respondem ao tratamento clínico.",
  },
  {
    icon: Shield,
    title: "Remoção de amígdalas e adenoide",
    text: "Para infecções de repetição ou obstrução importante das vias aéreas.",
  },
  {
    icon: Moon,
    title: "Cirurgia do ronco",
    text: "Avaliação e tratamento cirúrgico para casos selecionados em que o ronco tem origem estrutural.",
  },
];

export default function Cirurgias() {
  useSeo("/cirurgias");

  return (
    <>
      <PageHero
        eyebrow="Cirurgias e procedimentos"
        title="Cirurgia com decisão informada, do começo ao fim"
        lead="Quem indica a cirurgia é o mesmo médico que opera e acompanha antes e depois dela."
      >
        <WhatsAppButton origem="cirurgias — topo" />
      </PageHero>

      <Section tone="white">
        <div className="container-narrow !px-0">
          <p className="text-pretty text-[0.9375rem] leading-relaxed">
            Nem toda queixa otorrino se resolve sem cirurgia — e quando ela é o
            caminho certo, você merece decidir com clareza sobre riscos,
            expectativas e recuperação. Atuo como otorrinolaringologista clínico e
            cirúrgico desde 2016, o que significa que quem indica a cirurgia é o
            mesmo médico que opera e acompanha antes e depois dela.
          </p>
        </div>
      </Section>

      <Section tone="sand">
        <Eyebrow>Procedimentos</Eyebrow>
        <h2 className="h-section text-balance max-w-2xl">
          O que eu opero
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {procedimentos.map((p) => (
            <InfoCard key={p.title} title={p.title} icon={p.icon}>
              {p.text}
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="container-narrow !px-0">
          <Eyebrow>A decisão</Eyebrow>
          <h2 className="h-section text-balance">
            Como decidimos juntos se a cirurgia é o caminho certo
          </h2>
          <p className="text-pretty mt-6 text-[0.9375rem] leading-relaxed">
            Toda indicação cirúrgica passa por avaliação clínica completa e
            conversa objetiva sobre alternativas, riscos e benefícios — a decisão
            final é sempre compartilhada com você.
          </p>
        </div>
      </Section>

      <CTABand
        title="Recebeu indicação de cirurgia e quer uma segunda opinião, ou já decidiu seguir?"
        text="Vamos conversar."
        origem="cirurgias — CTA final"
      />
    </>
  );
}
