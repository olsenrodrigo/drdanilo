import { Link } from "wouter";
import { Instagram, Linkedin, Mail, MessageCircle, MapPin } from "lucide-react";
import { site, units, mapsUrl } from "@/content/site";
import { navPages, pages } from "@/content/pages";

const geoPages = pages.filter((p) => p.path.startsWith("/otorrino-"));

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--ink)" }}>
      <div className="container-custom py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Identificação profissional — CRM e RQE visíveis, exigência do CFM. */}
          <div className="md:col-span-4">
            <p className="font-heading text-lg" style={{ color: "#FFFFFF" }}>
              {site.doctor.name}
            </p>
            <p
              className="mt-1.5 font-sans-ui text-[0.8125rem]"
              style={{ color: "rgba(255,255,255,0.66)" }}
            >
              {site.doctor.title}
            </p>
            <p
              className="mt-3 font-sans-ui text-[0.8125rem] tracking-wide"
              style={{ color: "var(--sage)" }}
            >
              {site.doctor.credential}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { href: site.contact.instagram, icon: Instagram, label: "Instagram" },
                { href: site.contact.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${site.contact.email}`, icon: Mail, label: "E-mail" },
                { href: site.whatsappLink("rodapé"), icon: MessageCircle, label: "WhatsApp" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors"
                  style={{
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* NAP — endereço idêntico ao das páginas e ao JSON-LD. */}
          <div className="md:col-span-5">
            <h2
              className="font-sans-ui text-[0.6875rem] font-semibold uppercase tracking-[0.14em]"
              style={{ color: "var(--sage)" }}
            >
              Onde atendo
            </h2>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              {units.map((u) => (
                <div key={u.id}>
                  <p
                    className="font-sans-ui text-sm font-semibold"
                    style={{ color: "#FFFFFF" }}
                  >
                    {u.name}
                  </p>
                  <address
                    className="mt-1.5 not-italic font-sans-ui text-[0.8125rem] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.62)" }}
                  >
                    {u.street}
                    <br />
                    {u.complement}
                    <br />
                    {u.district}, {u.city} — {u.state}
                    <br />
                    CEP {u.zip}
                    {u.phone && (
                      <>
                        <br />
                        <a href={`tel:${u.phoneRaw}`} className="hover:underline">
                          {u.phone}
                        </a>
                      </>
                    )}
                  </address>
                  <a
                    href={mapsUrl(u)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 font-sans-ui text-[0.75rem] hover:underline"
                    style={{ color: "var(--sage)" }}
                  >
                    <MapPin size={12} /> Ver no mapa
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navegação + páginas de bairro: links internos que sustentam o GEO local. */}
          <div className="md:col-span-3">
            <h2
              className="font-sans-ui text-[0.6875rem] font-semibold uppercase tracking-[0.14em]"
              style={{ color: "var(--sage)" }}
            >
              Navegação
            </h2>
            <ul className="mt-5 space-y-2.5">
              {navPages.map((p) => (
                <li key={p.path}>
                  <Link
                    href={p.path}
                    className="font-sans-ui text-[0.8125rem] hover:underline"
                    style={{ color: "rgba(255,255,255,0.68)" }}
                  >
                    {p.nav}
                  </Link>
                </li>
              ))}
            </ul>

            <h2
              className="mt-8 font-sans-ui text-[0.6875rem] font-semibold uppercase tracking-[0.14em]"
              style={{ color: "var(--sage)" }}
            >
              Regiões
            </h2>
            <ul className="mt-4 space-y-2.5">
              {geoPages.map((p) => (
                <li key={p.path}>
                  <Link
                    href={p.path}
                    className="font-sans-ui text-[0.8125rem] hover:underline"
                    style={{ color: "rgba(255,255,255,0.68)" }}
                  >
                    {p.path
                      .replace("/otorrino-", "")
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col gap-3 border-t pt-7 md:flex-row md:items-center md:justify-between"
          style={{ borderColor: "rgba(255,255,255,0.12)" }}
        >
          <p
            className="font-sans-ui text-xs"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            © {year} {site.doctor.name}. Todos os direitos reservados.
          </p>
          <p
            className="font-sans-ui text-xs"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            O conteúdo deste site é informativo e não substitui a consulta médica.
          </p>
        </div>
      </div>
    </footer>
  );
}
