import { motion } from "framer-motion";
import { Link } from "wouter";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";

/* Blocos de layout reutilizados por todas as páginas.
   Manter aqui evita repetir espaçamento e cor em cada arquivo. */

export const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span
        aria-hidden="true"
        className="block h-px w-7 flex-shrink-0"
        style={{ backgroundColor: "var(--teal)" }}
      />
      <span
        className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] font-sans-ui"
        style={{ color: "var(--teal)" }}
      >
        {children}
      </span>
    </div>
  );
}

export function Section({
  id,
  children,
  tone = "white",
  size = "normal",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: "white" | "sand" | "mist" | "ink";
  size?: "normal" | "sm";
  className?: string;
}) {
  const bg = {
    white: "#FFFFFF",
    sand: "var(--sand)",
    mist: "var(--mist)",
    ink: "var(--ink)",
  }[tone];

  return (
    <section
      id={id}
      className={`${size === "sm" ? "section-sm" : "section"} ${className}`}
      style={{ backgroundColor: bg }}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}

/** Botão principal — sempre leva ao WhatsApp, identificando a página de origem. */
export function WhatsAppButton({
  origem,
  label = "Agendar consulta",
  variant = "solid",
  className = "",
}: {
  origem: string;
  label?: string;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  const styles = {
    solid: {
      backgroundColor: "var(--petrol)",
      color: "#FFFFFF",
      border: "1px solid var(--petrol)",
    },
    outline: {
      backgroundColor: "transparent",
      color: "var(--petrol)",
      border: "1px solid rgba(29,69,80,0.32)",
    },
    light: {
      backgroundColor: "#FFFFFF",
      color: "var(--petrol)",
      border: "1px solid #FFFFFF",
    },
  }[variant];

  return (
    <motion.a
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
      href={site.whatsappLink(origem)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-medium font-sans-ui transition-shadow hover:shadow-md ${className}`}
      style={styles}
    >
      {label}
      <ArrowRight
        size={15}
        className="transition-transform group-hover:translate-x-0.5"
      />
    </motion.a>
  );
}

/** Link interno estilizado como botão secundário. */
export function LinkButton({
  href,
  children,
  variant = "outline",
}: {
  href: string;
  children: ReactNode;
  variant?: "outline" | "ghost";
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-medium font-sans-ui transition-colors"
      style={
        variant === "outline"
          ? {
              border: "1px solid rgba(29,69,80,0.32)",
              color: "var(--petrol)",
            }
          : { color: "var(--teal)" }
      }
    >
      {children}
      <ArrowRight
        size={15}
        className="transition-transform group-hover:translate-x-0.5"
      />
    </Link>
  );
}

/** Cabeçalho das páginas internas. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header
      className="pt-32 pb-14 md:pt-40 md:pb-20"
      style={{
        background:
          "linear-gradient(150deg, #F5F1EA 0%, var(--bg) 55%, var(--mist) 100%)",
      }}
    >
      <div className="container-custom">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="h-display text-balance mb-5">{title}</h1>
          {lead && <p className="lead text-pretty max-w-2xl">{lead}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </header>
  );
}

/** Cartão de conteúdo padrão (blocos curtos da copy). */
export function InfoCard({
  title,
  children,
  icon: Icon,
}: {
  title: string;
  children: ReactNode;
  icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}) {
  return (
    <motion.article
      {...fadeUp}
      className="rounded-lg border bg-white p-6 h-full"
      style={{ borderColor: "var(--hairline)" }}
    >
      {Icon && (
        <span
          className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md"
          style={{ backgroundColor: "rgba(78,141,147,0.10)" }}
        >
          <Icon className="h-4 w-4" style={{ color: "var(--teal)" }} />
        </span>
      )}
      <h3 className="h-card mb-2">{title}</h3>
      <p className="text-sm leading-relaxed">{children}</p>
    </motion.article>
  );
}

/** Faixa de chamada usada no fim de cada página (a copy pede uma em todas). */
export function CTABand({
  title,
  text,
  origem,
  label = "Agendar consulta",
}: {
  title: string;
  text?: string;
  origem: string;
  label?: string;
}) {
  return (
    <section className="section-sm" style={{ backgroundColor: "var(--ink)" }}>
      <div className="container-custom">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2
              className="h-section text-balance"
              style={{ color: "#FFFFFF" }}
            >
              {title}
            </h2>
            {text && (
              <p
                className="mt-3 text-[0.9375rem] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                {text}
              </p>
            )}
          </div>
          <div className="flex-shrink-0">
            <WhatsAppButton origem={origem} label={label} variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Bloco de resposta direta — pergunta + resposta curta.
 *  Formato que mecanismos generativos (GEO) conseguem extrair e citar. */
export function AnswerBlock({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      {...fadeUp}
      className="border-l-2 pl-5 py-1"
      style={{ borderColor: "var(--sage)" }}
    >
      <h3 className="h-card mb-1.5">{question}</h3>
      <p className="text-sm leading-relaxed">{children}</p>
    </motion.div>
  );
}
