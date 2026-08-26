import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { mapsUrl, site, type Unit } from "@/content/site";
import { fadeUp } from "./Primitives";

/** Cartão de unidade. Mesmo NAP em toda ocorrência — consistência que o GEO local exige. */
export default function UnitCard({
  unit,
  origem,
  highlight = false,
}: {
  unit: Unit;
  origem: string;
  highlight?: boolean;
}) {
  return (
    <motion.article
      {...fadeUp}
      className="flex h-full flex-col rounded-lg border bg-white p-7"
      style={{
        borderColor: highlight ? "var(--sage)" : "var(--hairline)",
        boxShadow: highlight ? "0 1px 24px rgba(29,69,80,0.07)" : "none",
      }}
    >
      <h3 className="font-heading text-xl" style={{ color: "var(--ink)" }}>
        {unit.name}
      </h3>
      {unit.legalName && (
        <p
          className="mt-0.5 font-sans-ui text-xs"
          style={{ color: "var(--muted-text)" }}
        >
          {unit.legalName}
        </p>
      )}

      <div className="mt-5 space-y-3.5 text-sm">
        <div className="flex gap-3">
          <MapPin
            size={15}
            className="mt-0.5 flex-shrink-0"
            style={{ color: "var(--teal)" }}
            aria-hidden="true"
          />
          <address className="not-italic leading-relaxed" style={{ color: "var(--body-text)" }}>
            {unit.street} — {unit.complement}
            <br />
            {unit.district}, {unit.city} — {unit.state}
            <br />
            CEP {unit.zip}
          </address>
        </div>

        {unit.phone && (
          <div className="flex gap-3">
            <Phone
              size={15}
              className="mt-0.5 flex-shrink-0"
              style={{ color: "var(--teal)" }}
              aria-hidden="true"
            />
            <a
              href={`tel:${unit.phoneRaw}`}
              className="link-inline"
              style={{ color: "var(--body-text)" }}
            >
              {unit.phone}
            </a>
          </div>
        )}

        <div className="flex gap-3">
          <Clock
            size={15}
            className="mt-0.5 flex-shrink-0"
            style={{ color: "var(--teal)" }}
            aria-hidden="true"
          />
          <ul className="space-y-1" style={{ color: "var(--body-text)" }}>
            {unit.hours.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 border-t" style={{ borderColor: "var(--hairline)" }}>
        <a
          href={site.whatsappLink(origem)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans-ui text-sm font-medium hover:underline"
          style={{ color: "var(--petrol)" }}
        >
          Agendar nesta unidade
        </a>
        <a
          href={mapsUrl(unit)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans-ui text-sm hover:underline"
          style={{ color: "var(--teal)" }}
        >
          Ver no mapa
        </a>
      </div>
    </motion.article>
  );
}
