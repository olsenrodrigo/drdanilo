import { useSeo } from "@/hooks/useSeo";
import { PageHero, Section, LinkButton, WhatsAppButton } from "@/components/site/Primitives";
import { navPages } from "@/content/pages";
import { SEO_404 } from "@/content/routeSeo";
import { Link } from "wouter";

export default function NotFound() {
  // Mesmo pacote que a pré-renderização usa no 404.html.
  useSeo("/", SEO_404);

  return (
    <>
      <PageHero
        eyebrow="Erro 404"
        title="Esta página não existe"
        lead="O endereço que você acessou mudou ou nunca existiu. Abaixo estão as páginas do site."
      >
        <WhatsAppButton origem="página 404" />
      </PageHero>

      <Section tone="white">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {navPages.map((p) => (
            <li key={p.path}>
              <Link
                href={p.path}
                className="block rounded-lg border bg-white p-5 font-sans-ui text-[0.9375rem] transition-shadow hover:shadow-md"
                style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}
              >
                {p.nav}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <LinkButton href="/">Voltar para o início</LinkButton>
        </div>
      </Section>
    </>
  );
}
