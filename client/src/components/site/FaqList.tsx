import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/faq";

/** Lista de dúvidas em acordeão.
 *  A resposta fica sempre no HTML (só escondida) para não penalizar SEO/GEO. */
export default function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y" style={{ borderColor: "var(--hairline)" }}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="border-t first:border-t-0"
            style={{ borderColor: "var(--hairline)" }}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span
                  className="font-heading text-[1.0625rem] leading-snug"
                  style={{ color: "var(--ink)" }}
                >
                  {item.q}
                </span>
                <ChevronDown
                  size={17}
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: "var(--teal)",
                    transform: isOpen ? "rotate(180deg)" : "none",
                  }}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              hidden={!isOpen}
            >
              <p className="pb-5 pr-8 text-sm leading-relaxed">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
