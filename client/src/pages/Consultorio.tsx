import { useSeo } from "@/hooks/useSeo";
import { units } from "@/content/site";
import { perguntasDaRota } from "@/content/routeSeo";
import {
  PageHero,
  Section,
  Eyebrow,
  AnswerBlock,
  CTABand,
  WhatsAppButton,
  Foto,
} from "@/components/site/Primitives";
import UnitCard from "@/components/site/UnitCard";
import consultorioVista from "@/assets/images/danilo-consultorio-vista.webp";

const respostas = perguntasDaRota("/consultorio");

export default function Consultorio() {
  useSeo("/consultorio");

  return (
    <>
      <PageHero
        eyebrow="Consultório"
        title="Onde você é atendido"
        lead="Duas unidades em São Paulo (SP), sempre em atendimento particular, com consultas de cerca de 30 minutos para garantir tempo real de escuta e explicação."
      >
        <WhatsAppButton origem="consultório — topo" />
      </PageHero>

      <Section tone="white" size="sm">
        <div className="container-narrow !px-0">
          <Foto
            src={consultorioVista}
            width={1600}
            height={1067}
            alt="Dr. Danilo Martin Real no consultório, com vista para São Paulo"
          />
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-5 md:grid-cols-2">
          {units.map((u) => (
            <UnitCard key={u.id} unit={u} origem={`consultório — ${u.name}`} />
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <Eyebrow>Antes de agendar</Eyebrow>
            <h2 className="h-section text-balance">O que você precisa saber</h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            <AnswerBlock question="Atendimento particular">
              Não trabalhamos com convênios — as consultas são particulares.
            </AnswerBlock>
            {respostas.map((r) => (
              <AnswerBlock key={r.q} question={r.q}>
                {r.a}
              </AnswerBlock>
            ))}
          </div>
        </div>
      </Section>

      <CTABand
        title="Escolha a unidade mais perto de você e agende sua consulta"
        origem="consultório — CTA final"
      />
    </>
  );
}
