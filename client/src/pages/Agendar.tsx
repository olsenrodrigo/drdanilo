import { Mail, MessageCircle, Instagram } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";
import { site, units } from "@/content/site";
import {
  PageHero,
  Section,
  Eyebrow,
  WhatsAppButton,
  Foto,
} from "@/components/site/Primitives";
import UnitCard from "@/components/site/UnitCard";
import mesaFrontal from "@/assets/images/danilo-mesa-frontal.webp";

export default function Agendar() {
  useSeo("/agendar");

  return (
    <>
      <PageHero
        eyebrow="Agendar consulta"
        title="Vamos agendar sua consulta"
        lead="Escolha a unidade mais perto de você — Emunah ou InterOtos — e fale com a nossa equipe para confirmar o melhor horário."
      >
        <WhatsAppButton
          origem="agendar — topo"
          label="Agendar pelo WhatsApp"
          className="!px-8 !py-4 !text-base"
        />
      </PageHero>

      <Section tone="white" size="sm">
        <div className="container-narrow !px-0">
          <Foto
            src={mesaFrontal}
            width={1200}
            height={800}
            alt="Dr. Danilo Martin Real em seu consultório em São Paulo"
          />
        </div>
      </Section>

      <Section tone="white">
        <Eyebrow>Escolha a unidade</Eyebrow>
        <h2 className="h-section text-balance max-w-2xl">
          Duas unidades em São Paulo
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {units.map((u) => (
            <UnitCard key={u.id} unit={u} origem={`agendar — ${u.name}`} highlight />
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="container-narrow !px-0">
          <Eyebrow>Outros canais</Eyebrow>
          <h2 className="h-section text-balance">Prefere outro caminho?</h2>
          <ul className="mt-8 space-y-3">
            {[
              {
                icon: MessageCircle,
                label: `WhatsApp — ${site.contact.whatsappDisplay}`,
                href: site.whatsappLink("agendar — canais"),
              },
              {
                icon: Mail,
                label: site.contact.email,
                href: `mailto:${site.contact.email}`,
              },
              {
                icon: Instagram,
                label: `Instagram — ${site.contact.instagramHandle}`,
                href: site.contact.instagram,
              },
            ].map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg border bg-white p-5 transition-shadow hover:shadow-md"
                  style={{ borderColor: "var(--hairline)" }}
                >
                  <span
                    className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md"
                    style={{ backgroundColor: "rgba(78,141,147,0.10)" }}
                  >
                    <Icon size={16} style={{ color: "var(--teal)" }} aria-hidden="true" />
                  </span>
                  <span
                    className="font-sans-ui text-[0.9375rem]"
                    style={{ color: "var(--ink)" }}
                  >
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p
            className="mt-8 text-sm leading-relaxed"
            style={{ color: "var(--muted-text)" }}
          >
            O atendimento é particular — não trabalhamos com convênios.
            <br />
            {site.doctor.name} · {site.doctor.credential}
          </p>
        </div>
      </Section>
    </>
  );
}
