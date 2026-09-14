import { motion } from "framer-motion";
import { useSeo } from "@/hooks/useSeo";
import { perguntasDaRota } from "@/content/routeSeo";
import {
  PageHero,
  Section,
  Eyebrow,
  InfoCard,
  AnswerBlock,
  CTABand,
  WhatsAppButton,
  fadeUp,
  Foto,
} from "@/components/site/Primitives";
import { Activity, ScanEye, Repeat, ClipboardList } from "lucide-react";
import exameVestibular from "@/assets/images/danilo-exame-vestibular.webp";

const queixas = [
  {
    nome: "Vertigem Posicional Paroxística Benigna (VPPB)",
    detalhe: "A causa mais comum de tontura, e a que mais gosto de tratar.",
  },
  { nome: "Enxaqueca vestibular", detalhe: "" },
  { nome: "Doença de Ménière", detalhe: "" },
  { nome: "Neurite vestibular", detalhe: "" },
  { nome: "Tontura Postural Perceptual Persistente (TPPP)", detalhe: "" },
];

const blocos = [
  {
    icon: ScanEye,
    title: "O exame vHIT",
    text: "Vídeo impulso cefálico: um exame rápido e preciso que avalia o funcionamento do labirinto e ajuda a identificar a origem exata da tontura.",
  },
  {
    icon: Repeat,
    title: "Manobras para VPPB",
    text: "Em muitos casos, o alívio começa já na primeira consulta, com manobras específicas de reposicionamento.",
  },
  {
    icon: ClipboardList,
    title: "O que você pode esperar da consulta",
    text: "Avaliação clínica detalhada, indicação dos exames realmente necessários e um plano de tratamento explicado passo a passo.",
  },
];

/* Blocos de resposta direta: formato curto que mecanismos generativos extraem.
   As perguntas vêm do registro da rota, o mesmo que alimenta o FAQPage. */
const respostas = perguntasDaRota("/otoneurologia");

export default function Otoneurologia() {
  useSeo("/otoneurologia");

  return (
    <>
      <PageHero
        eyebrow="Otoneurologia · Tontura, vertigem e equilíbrio"
        title="Tontura e vertigem têm explicação — e tratamento"
        lead="Tontura não é um diagnóstico, é um sintoma — e pode vir de causas bem diferentes entre si, do ouvido interno ao sistema nervoso."
      >
        <WhatsAppButton origem="otoneurologia — topo" />
      </PageHero>

      <Section tone="white" size="sm">
        <div className="container-narrow !px-0">
          <Foto
            src={exameVestibular}
            width={1600}
            height={1067}
            alt="Dr. Danilo Martin Real realizando avaliação vestibular com óculos de vídeo impulso cefálico (vHIT)"
          legenda="Avaliação do equilíbrio com vHIT, no consultório."
          />
        </div>
      </Section>

      <Section tone="white">
        <div className="container-narrow !px-0">
          <p className="text-pretty text-[0.9375rem] leading-relaxed">
            Tontura não é um diagnóstico, é um sintoma — e pode vir de causas bem
            diferentes entre si, do ouvido interno ao sistema nervoso. Foi para
            investigar essas causas com precisão que me especializei em
            Otoneurologia Clínica, em fellowship pela USP, com passagem pelo
            Ambulatório de Vertigem do Departamento de Neurologia do HC-USP e um
            estágio de aprimoramento em avaliação vestibular na Mayo Clinic (EUA),
            com o Dr. Jeffrey Staab. É a área da otorrinolaringologia que mais
            gosto de atender — porque um diagnóstico bem-feito muda a vida de quem
            convive com tontura há anos.
          </p>
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <Eyebrow>Principais queixas que eu avalio</Eyebrow>
            <h2 className="h-section text-balance">
              As causas mais frequentes de tontura
            </h2>
          </div>
          <ul className="md:col-span-7 space-y-0">
            {queixas.map((q) => (
              <motion.li
                {...fadeUp}
                key={q.nome}
                className="border-b py-5 first:pt-0"
                style={{ borderColor: "var(--hairline)" }}
              >
                <p
                  className="font-heading text-[1.0625rem] leading-snug"
                  style={{ color: "var(--ink)" }}
                >
                  {q.nome}
                </p>
                {q.detalhe && (
                  <p className="mt-1.5 text-sm leading-relaxed">{q.detalhe}</p>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="white">
        <Eyebrow>Como eu investigo</Eyebrow>
        <h2 className="h-section text-balance max-w-2xl">
          Do exame ao plano de tratamento
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {blocos.map((b) => (
            <InfoCard key={b.title} title={b.title} icon={b.icon}>
              {b.text}
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <Eyebrow>Respostas diretas</Eyebrow>
            <h2 className="h-section text-balance">Em uma frase</h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            {respostas.map((r) => (
              <AnswerBlock key={r.q} question={r.q}>
                {r.a}
              </AnswerBlock>
            ))}
          </div>
        </div>
      </Section>

      <CTABand
        title="Convivendo com tontura ou vertigem? Vamos investigar a causa."
        origem="otoneurologia — CTA final"
      />
    </>
  );
}
