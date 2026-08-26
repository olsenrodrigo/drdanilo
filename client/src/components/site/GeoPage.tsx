import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Train, Navigation } from "lucide-react";
import { unitById } from "@/content/site";
import { useSeo } from "@/hooks/useSeo";
import { geoByPath } from "@/content/geo";
import {
  PageHero,
  Section,
  Eyebrow,
  AnswerBlock,
  CTABand,
  WhatsAppButton,
  fadeUp,
} from "./Primitives";
import UnitCard from "./UnitCard";

const icons = { map: MapPin, train: Train, nav: Navigation };

const atendimentos = [
  "Tontura, vertigem e labirintite",
  "Exame vHIT e manobras para VPPB",
  "Sinusite aguda e crônica",
  "Dor de ouvido e otites",
  "Dor de garganta e amigdalites",
  "Remoção de cerume",
  "Septoplastia e cirurgia de sinusite",
  "Cirurgia de amígdalas, adenoide e ronco",
];

/** Recebe só a rota: todo o conteúdo do bairro vem de content/geo.ts,
 *  que é a mesma fonte lida pela pré-renderização. */
export default function GeoPage({ path }: { path: string }) {
  const geo = geoByPath(path);
  if (!geo) throw new Error(`Bairro não registrado em content/geo.ts: ${path}`);
  const { bairro, title, lead, intro, referencias, perguntas, vizinhas } = geo;
  const unit = unitById(geo.unitId);

  useSeo(path);

  return (
    <>
      <PageHero eyebrow={`Otorrinolaringologia · ${bairro}`} title={title} lead={lead}>
        <WhatsAppButton origem={`${bairro} — topo`} />
      </PageHero>

      <Section tone="white">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <p className="text-pretty text-[0.9375rem] leading-relaxed">{intro}</p>

            <h2 className="h-section text-balance mt-12">
              Como chegar ao consultório
            </h2>
            <ul className="mt-7 space-y-6">
              {referencias.map((r) => {
                const Icon = icons[r.icon];
                return (
                  <motion.li {...fadeUp} key={r.title} className="flex gap-4">
                    <span
                      className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md"
                      style={{ backgroundColor: "rgba(78,141,147,0.10)" }}
                    >
                      <Icon size={16} style={{ color: "var(--teal)" }} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="h-card" style={{ color: "var(--ink)" }}>
                        {r.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed">{r.text}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <div className="md:col-span-5">
            <UnitCard unit={unit} origem={`${bairro} — unidade`} highlight />
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <Eyebrow>Atendimento</Eyebrow>
            <h2 className="h-section text-balance">
              O que é atendido {bairro.startsWith("Barra") ? "na" : "no"} {bairro}
            </h2>
          </div>
          <ul className="md:col-span-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {atendimentos.map((a) => (
              <li
                key={a}
                className="border-b pb-3 text-[0.9375rem]"
                style={{ borderColor: "var(--hairline)", color: "var(--body-text)" }}
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <Eyebrow>Dúvidas da região</Eyebrow>
            <h2 className="h-section text-balance">Perguntas frequentes</h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            {perguntas.map((p) => (
              <AnswerBlock key={p.q} question={p.q}>
                {p.a}
              </AnswerBlock>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="mist" size="sm">
        <h2
          className="font-sans-ui text-[0.6875rem] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "var(--teal)" }}
        >
          Outras regiões
        </h2>
        <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
          {vizinhas.map((v) => (
            <li key={v.href}>
              <Link
                href={v.href}
                className="font-sans-ui text-[0.9375rem] hover:underline"
                style={{ color: "var(--petrol)" }}
              >
                {v.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CTABand
        title={`Precisa de um otorrino ${bairro.startsWith("Barra") ? "na" : "no"} ${bairro}?`}
        text="Agende sua consulta e saia com diagnóstico claro e um plano definido."
        origem={`${bairro} — CTA final`}
      />
    </>
  );
}
