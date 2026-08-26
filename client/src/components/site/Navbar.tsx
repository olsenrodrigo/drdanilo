import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { navPages } from "@/content/pages";
import { site } from "@/content/site";
import { WhatsAppButton } from "./Primitives";

/** Barra fixa. Fica transparente sobre o hero e ganha fundo ao rolar. */
export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu ao trocar de página.
  useEffect(() => setOpen(false), [location]);

  // Trava o scroll do fundo enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = navPages.filter((p) => p.path !== "/agendar");

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>

      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(252,251,249,0.94)" : "transparent",
          backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
          borderBottom: `1px solid ${scrolled ? "var(--hairline)" : "transparent"}`,
        }}
      >
        <nav
          aria-label="Navegação principal"
          className="container-custom flex h-16 items-center justify-between md:h-[4.5rem]"
        >
          <Link
            href="/"
            className="flex flex-col leading-none"
            aria-label={`${site.doctor.shortName} — página inicial`}
          >
            <span
              className="font-heading text-[1.0625rem] font-semibold tracking-tight md:text-lg"
              style={{ color: "var(--ink)" }}
            >
              {site.doctor.shortName}
            </span>
            <span
              className="mt-0.5 font-sans-ui text-[0.6875rem] tracking-[0.06em]"
              style={{ color: "var(--muted-text)" }}
            >
              Otorrino · Otoneurologia
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((p) => {
              const active = location === p.path;
              return (
                <Link
                  key={p.path}
                  href={p.path}
                  aria-current={active ? "page" : undefined}
                  className="font-sans-ui text-[0.8125rem] transition-colors"
                  style={{ color: active ? "var(--petrol)" : "var(--body-text)" }}
                >
                  <span
                    className="pb-1"
                    style={{
                      borderBottom: active
                        ? "1.5px solid var(--teal)"
                        : "1.5px solid transparent",
                    }}
                  >
                    {p.nav}
                  </span>
                </Link>
              );
            })}
            <WhatsAppButton
              origem="menu"
              label="Agendar"
              className="!px-5 !py-2.5 !text-[0.8125rem]"
            />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
            style={{ color: "var(--ink)" }}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
      </header>

      {open && (
        <div
          id="menu-mobile"
          className="fixed inset-0 z-40 flex flex-col pt-20 lg:hidden"
          style={{ backgroundColor: "var(--bg)" }}
        >
          <div className="container-custom flex flex-col gap-1 overflow-y-auto pb-8">
            {navPages.map((p) => (
              <Link
                key={p.path}
                href={p.path}
                className="border-b py-3.5 font-sans-ui text-[0.9375rem]"
                style={{
                  borderColor: "var(--hairline)",
                  color: location === p.path ? "var(--teal)" : "var(--ink)",
                }}
              >
                {p.nav}
              </Link>
            ))}
            <div className="mt-6">
              <WhatsAppButton
                origem="menu mobile"
                label="Agendar pelo WhatsApp"
                className="w-full"
              />
              <p
                className="mt-4 text-center font-sans-ui text-xs"
                style={{ color: "var(--muted-text)" }}
              >
                {site.doctor.credential}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
