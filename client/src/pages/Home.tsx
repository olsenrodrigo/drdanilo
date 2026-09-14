import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Activity,
  Ear,
  EarOff,
  Scissors,
  Stethoscope,
  Waves,
  ArrowRight,
} from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { site, units } from "@/content/site";
import { homeFaq } from "@/content/faq";
import {
  Section,
  Eyebrow,
  WhatsAppButton,
  LinkButton,
  CTABand,
  fadeUp,
} from "@/components/site/Primitives";
import FaqList from "@/components/site/FaqList";
import UnitCard from "@/components/site/UnitCard";
import retrato from "@/assets/images/danilo-mesa-camisa.webp";
import consultaPaciente from "@/assets/images/danilo-consulta-paciente.webp";
import exameVestibular from "@/assets/images/danilo-exame-vestibular.webp";
import retratoSueter from "@/assets/images/danilo-retrato-sueter.webp";

/* Copy verbatim do arquivo de insumos. Onde o original tinha typo evidente
   ("nasalplastia", "valoriam", "casos casos", "aéreas.."), foi corrigido — e só isso. */

const queixas = [
  {
    icon: Waves,
    text: "Tontura, vertigem ou labirintite que não passa",
  },
  {
    icon: Activity,
    text: "Enxaqueca vestibular ou episódios recorrentes de tontura",
  },
  {
    icon: Ear,
    text: "Sinusite, dor de ouvido ou de garganta que insistem em voltar",
  },
  {
    icon: EarOff,
    text: "Sensação de perda auditiva ou dificuldade para entender conversas",
  },
  {
    icon: Scissors,
    text: "Indicação de cirurgia (septoplastia, sinusite, amígdalas, adenoide ou ronco)",
  },
  {
    icon: Stethoscope,
    text: "Avaliação especializada do equilíbrio, com exame vHIT",
  },
];

const especialidades = [
  {
    href: "/otoneurologia",
    title: "Otoneurologia — Tontura, Vertigem e Equilíbrio",
    text: "Da crise de labirintite ao diagnóstico fino com exame vHIT.",
    cta: "Ver Otoneurologia",
  },
  {
    href: "/cirurgias",
    title: "Cirurgias e Procedimentos",
    text: "Septoplastia, sinusite, amígdalas, adenoide e ronco — decisão clara, do diagnóstico à recuperação.",
    cta: "Ver Cirurgias e Procedimentos",
  },
  {
    href: "/otorrinolaringologia",
    title: "Otorrinolaringologia Geral",
    text: "Sinusite, dor de ouvido, dor de garganta, avaliação da perda auditiva e pronto atendimento otorrino.",
    cta: "Ver Otorrinolaringologia Geral",
  },
];

const pilares = [
  "Escuta de verdade antes de qualquer diagnóstico",
  "Comunicação direta, sem enrolação",
  "Abertura para rever a hipótese sempre que os fatos mudam",
];

export default function Home() {
  useSeo("/");

  return (
    <>
      {/* 1) Hero */}
      <header
        className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
        style={{
          background:
            "linear-gradient(155deg, #F5F1EA 0%, var(--bg) 48%, var(--mist) 100%)",
        }}
      >
        <div className="container-custom">
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10">
            {/* Sem animação de entrada: este bloco é o LCP e precisa pintar
                direto do HTML pré-renderizado, sem esperar o JavaScript. */}
            <div className="md:col-span-7">
              <Eyebrow>Otorrinolaringologia e Otoneurologia · São Paulo</Eyebrow>
              <h1 className="h-display text-balance">
                Sua tontura, vertigem ou queixa de ouvido, nariz e garganta
                merece um diagnóstico claro — e alguém que te escute de verdade.
              </h1>
              <p className="lead text-pretty mt-6 max-w-2xl">
                Eu sou o {site.doctor.name}, otorrinolaringologista e
                otoneurologista, e ajudo você a entender o que está acontecendo —
                da tontura mais simples às cirurgias mais complexas — com escuta
                de verdade e decisão clara.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <WhatsAppButton origem="home — hero" />
                <LinkButton href="/como-eu-cuido">
                  Entender como funciona
                </LinkButton>
              </div>
              <p
                className="mt-7 font-sans-ui text-[0.8125rem] tracking-wide"
                style={{ color: "var(--muted-text)" }}
              >
                {site.doctor.credential}
              </p>
            </div>

            {/* Retrato do ensaio de set/2026 (1600×1067). O cartão antigo travava
                a largura em 300px porque o arquivo original tinha 300×330 e
                ampliar borrava — a trava saiu junto com aquele arquivo. */}
            <div className="md:col-span-5 md:justify-self-end">
              <figure
                className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-lg bg-white p-2.5"
                style={{ boxShadow: "0 2px 32px rgba(20,49,60,0.10)" }}
              >
                <img
                  src={retrato}
                  width={1600}
                  height={1067}
                  alt={`${site.doctor.name}, otorrinolaringologista e otoneurologista, em seu consultório em São Paulo`}
                  className="h-auto w-full rounded-md"
                  /* LCP: esta imagem tem de pintar junto com o HTML. */
                  fetchPriority="high"
                  style={{ display: "block" }}
                />
                <figcaption
                  className="px-1 pb-1 pt-3 font-sans-ui text-xs leading-snug"
                  style={{ color: "var(--muted-text)" }}
                >
                  {site.doctor.name}
                  <br />
                  {site.doctor.credential}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </header>

      {/* 2) Para quem eu ajudo */}
      <Section tone="white">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <Eyebrow>Para quem eu ajudo</Eyebrow>
            <h2 className="h-section text-balance">Quando você deve me procurar</h2>
            <p className="text-pretty mt-5 text-[0.9375rem] leading-relaxed">
              Se a tontura te impede de dirigir, trabalhar ou dormir tranquilo, se
              uma dor de ouvido, de garganta ou uma sinusite insistem em voltar, ou
              se você tem notado dificuldade para ouvir ou entender conversas, não é
              preciso conviver com isso. Também acompanho quem já sabe que precisa de
              uma cirurgia e quer decidir com segurança, com um especialista que
              também atua na parte cirúrgica há mais de uma década.
            </p>
            <figure className="mt-8 overflow-hidden rounded-lg">
              <img
                src={consultaPaciente}
                width={1600}
                height={1067}
                alt="Dr. Danilo Martin Real em consulta, conversando com uma paciente em seu consultório"
                className="h-auto w-full"
                loading="lazy"
                decoding="async"
                style={{ display: "block" }}
              />
            </figure>
          </div>

          <ul className="md:col-span-7 space-y-3">
            {queixas.map(({ icon: Icon, text }) => (
              <motion.li
                {...fadeUp}
                key={text}
                className="flex items-start gap-4 rounded-lg border bg-white p-5"
                style={{ borderColor: "var(--hairline)" }}
              >
                <span
                  className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md"
                  style={{ backgroundColor: "rgba(78,141,147,0.10)" }}
                >
                  <Icon size={17} style={{ color: "var(--teal)" }} aria-hidden="true" />
                </span>
                <span className="text-[0.9375rem] leading-relaxed pt-1.5" style={{ color: "var(--body-text)" }}>
                  {text}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 3) Como eu cuido (prévia) */}
      <Section tone="sand">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-6">
            <Eyebrow>Como eu cuido</Eyebrow>
            <h2 className="h-section text-balance">
              Direto ao ponto, sem perder a escuta
            </h2>
            <p className="text-pretty mt-5 text-[0.9375rem] leading-relaxed">
              Escuta ativa, disponibilidade e empatia guiam cada consulta — e isso
              não é incompatível com objetividade. Você sai sabendo exatamente o
              que está acontecendo e qual o próximo passo, sem rodeios e sem
              informação em excesso.
            </p>
            <div className="mt-8">
              <LinkButton href="/como-eu-cuido">Como eu cuido</LinkButton>
            </div>
            <figure className="mt-8 overflow-hidden rounded-lg">
              <img
                src={exameVestibular}
                width={1600}
                height={1067}
                alt="Dr. Danilo Martin Real realizando avaliação vestibular com óculos de vídeo impulso cefálico (vHIT)"
                className="h-auto w-full"
                loading="lazy"
                decoding="async"
                style={{ display: "block" }}
              />
            </figure>
          </div>

          <ul className="md:col-span-6 space-y-5 md:pt-2">
            {pilares.map((p, i) => (
              <motion.li {...fadeUp} key={p} className="flex gap-5">
                <span
                  className="font-heading text-2xl leading-none"
                  style={{ color: "var(--sage)" }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="border-b pb-5 text-[0.9375rem] leading-relaxed"
                  style={{ borderColor: "var(--hairline)", color: "var(--body-text)" }}
                >
                  {p}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 4) Quem sou eu */}
      <Section tone="white">
        <div className="container-narrow !px-0">
          <Eyebrow>Quem sou eu</Eyebrow>
          <h2 className="h-section text-balance">
            Formação de referência, escuta próxima
          </h2>
          <p className="text-pretty mt-6 text-[0.9375rem] leading-relaxed">
            Formado em Medicina pela Faculdade de Medicina da USP em 2011, o{" "}
            {site.doctor.name} fez residência em Otorrinolaringologia pelo Hospital
            das Clínicas da FMUSP entre 2013 e 2016, ano em que recebeu o Título de
            Especialista pela Associação Brasileira de Otorrinolaringologia e
            Cirurgia Cérvico-Facial. Entre 2016 e 2019, aprofundou-se em
            Otoneurologia Clínica em fellowship pela Otorrinolaringologia da USP,
            período em que também atuou como médico colaborador do Ambulatório de
            Vertigem do Departamento de Neurologia do HC-USP. Em 2017, fez estágio
            de aprimoramento em avaliação vestibular com o Dr. Jeffrey Staab, na
            Mayo Clinic (EUA). É também pós-graduado em Finanças em Saúde pelo
            Hospital Albert Einstein (2022). Otorrinolaringologista clínico e
            cirúrgico em atuação desde 2016, atende em São Paulo (SP), unindo
            formação de referência a uma escuta próxima do paciente.
          </p>

          <figure className="mt-10 overflow-hidden rounded-lg">
            <img
              src={retratoSueter}
              width={1200}
              height={800}
              alt="Retrato do Dr. Danilo Martin Real em seu consultório em São Paulo"
              className="h-auto w-full"
              loading="lazy"
              decoding="async"
              style={{ display: "block" }}
            />
          </figure>

          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-3">
            {[
              { t: "USP", d: "Medicina (2011) e residência no HC-FMUSP (2013–2016)" },
              { t: "Fellowship USP", d: "Otoneurologia Clínica (2016–2019)" },
              { t: "Mayo Clinic", d: "Aprimoramento em avaliação vestibular (2017)" },
            ].map(({ t, d }) => (
              <div key={t}>
                <dt
                  className="font-heading text-base"
                  style={{ color: "var(--petrol)" }}
                >
                  {t}
                </dt>
                <dd
                  className="mt-1 font-sans-ui text-[0.8125rem] leading-relaxed"
                  style={{ color: "var(--muted-text)" }}
                >
                  {d}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* 5) Especialidades */}
      <Section tone="mist">
        <Eyebrow>Especialidades</Eyebrow>
        <h2 className="h-section text-balance max-w-2xl">
          Três frentes de atuação, um mesmo cuidado
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {especialidades.map((e) => (
            <motion.div {...fadeUp} key={e.href}>
              <Link
                href={e.href}
                className="group flex h-full flex-col rounded-lg border bg-white p-7 transition-shadow hover:shadow-md"
                style={{ borderColor: "var(--hairline)" }}
              >
                <h3 className="font-heading text-lg leading-snug" style={{ color: "var(--ink)" }}>
                  {e.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed">{e.text}</p>
                <span
                  className="mt-6 inline-flex items-center gap-1.5 font-sans-ui text-sm font-medium"
                  style={{ color: "var(--teal)" }}
                >
                  {e.cta}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Unidades */}
      <Section tone="sand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Consultório</Eyebrow>
            <h2 className="h-section text-balance">Onde você é atendido</h2>
          </div>
          <LinkButton href="/consultorio">Ver detalhes das unidades</LinkButton>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {units.map((u) => (
            <UnitCard key={u.id} unit={u} origem={`home — unidade ${u.name}`} />
          ))}
        </div>
      </Section>

      {/* 7) FAQ curto */}
      <Section tone="white">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <Eyebrow>Dúvidas rápidas</Eyebrow>
            <h2 className="h-section text-balance">
              As perguntas que mais chegam
            </h2>
            <div className="mt-7">
              <LinkButton href="/duvidas">Ver todas as dúvidas</LinkButton>
            </div>
          </div>
          <div className="md:col-span-8">
            <FaqList items={homeFaq} />
          </div>
        </div>
      </Section>

      {/* 8) CTA final */}
      <CTABand
        title="Sua tontura ou queixa de ouvido, nariz e garganta tem solução — e o primeiro passo é simples"
        text="Marque sua consulta e saia com diagnóstico claro e um plano de tratamento definido."
        origem="home — CTA final"
      />
    </>
  );
}
