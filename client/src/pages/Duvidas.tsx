import { useSeo } from "@/hooks/useSeo";
import { faq } from "@/content/faq";
import {
  PageHero,
  Section,
  CTABand,
  WhatsAppButton,
} from "@/components/site/Primitives";
import FaqList from "@/components/site/FaqList";

export default function Duvidas() {
  // A página inteira vira FAQPage no JSON-LD — é o que rich results e LLMs leem.
  useSeo("/duvidas");

  return (
    <>
      <PageHero
        eyebrow="Dúvidas frequentes"
        title="Respostas diretas, sem rodeios"
        lead="Convênio, duração da consulta, exame vHIT, tratamento de tontura e como agendar."
      >
        <WhatsAppButton origem="dúvidas — topo" />
      </PageHero>

      <Section tone="white">
        <div className="container-narrow !px-0">
          <FaqList items={faq} />
          <p
            className="mt-10 text-sm leading-relaxed"
            style={{ color: "var(--muted-text)" }}
          >
            Não encontrou sua dúvida? Mande sua pergunta pelo WhatsApp — respondo
            antes mesmo de você agendar.
          </p>
        </div>
      </Section>

      <CTABand
        title="Ainda com dúvida? A consulta começa pela escuta."
        origem="dúvidas — CTA final"
      />
    </>
  );
}
