# PLANO — Site Dr. Danilo Martin Real

Base: `whitelabel_v2` · Stack: React 19 + Vite 7 + Tailwind 4 + wouter + framer-motion + Express (SSR estático em prod).

## 1. Dados reais confirmados (fonte)

| Dado | Valor | Fonte |
|---|---|---|
| Nome | Dr. Danilo Martin Real | copy |
| CRM | CRM/SP 150.640 | drdaniloreal.com.br + Doctoralia |
| RQE | 81846 | drdaniloreal.com.br + Doctoralia |
| WhatsApp | +55 11 93221-9644 (`wa.me/5511932219644`) | link `wa.me` no site atual |
| Instagram | @dr.danilo.real | site atual |
| LinkedIn | /in/danilomreal | site atual |
| E-mail | dr.danilo.real@gmail.com | copy (site atual usa contato@daniloreal.com.br → **conferir**) |
| Domínio | drdaniloreal.com.br | copy |

### Unidades
- **InterOtos** — R. Oscar Freire, 2250, Cj. 502/504 — CEP 05409-011 (BrasilAPI: logradouro confere; bairro oficial *Pinheiros*, divisa com Jardim Paulista).
  Tel. (11) 3865-0200. Ter 14h30–19h · Qua 8h30–13h · Sex 14h30–18h.
- **Emunah / EMNH Instituto** — Av. Marquês de São Vicente, 2219, Cj. 312/314/316 — CEP 05036-040 (BrasilAPI: bairro oficial **Água Branca**, dentro do Jardim das Perdizes, distrito da **Barra Funda**).
  Tel. (11) 3615-2474 · WhatsApp clínica (11) 99605-8392. Seg 13h–17h · encaixes Qui 18h/18h30.

## 2. Paleta — "Equilíbrio" (calma, clínica, não chamativa)

Escolhida para otorrino/otoneurologia: azul-petróleo profundo (estabilidade, equilíbrio vestibular),
teal suave como acento, neutros quentes. Sem saturação alta, sem gradiente vibrante.

```
--ink        #14313C   petróleo profundo   títulos
--primary    #1D4550   petróleo            marca, botões
--primary-2  #2C6371   petróleo médio      hovers
--accent     #4E8D93   teal suave          eyebrows, ícones, links
--accent-soft#A9C8C6   névoa sálvia        detalhes
--sand       #F3EFE8   neutro quente       seções alternadas
--mist       #EBF2F2   frio claro          seções alternadas
--bg         #FCFBF9   fundo
--body       #4F6169   texto corrido
--muted      #6E8189   texto secundário
--border     #E3E0D9   bordas
```

Tipografia: **Source Serif 4** (títulos) + **Figtree** (corpo) — combinação já aprovada por cliente
no playbook (Fraunces reprovado; Lora/Montserrat = cara de template).

## 3. Rotas (11) — a copy pede site multi-página, não landing

| Rota | Página | Origem |
|---|---|---|
| `/` | Home | copy §HOME |
| `/como-eu-cuido` | Como eu cuido | copy |
| `/otoneurologia` | Otoneurologia — tontura, vertigem, equilíbrio | copy |
| `/cirurgias` | Cirurgias e procedimentos | copy |
| `/otorrinolaringologia` | Otorrinolaringologia geral | copy |
| `/consultorio` | Consultório (2 unidades) | copy |
| `/duvidas` | Dúvidas frequentes | copy (botão "Ver todas as dúvidas") |
| `/agendar` | Agendar consulta | copy |
| `/otorrino-jardim-das-perdizes` | GEO — Jd. das Perdizes | pedido do cliente |
| `/otorrino-barra-funda` | GEO — Barra Funda | pedido do cliente |
| `/otorrino-jardim-paulista` | GEO — Jd. Paulista / Oscar Freire | variação (2ª unidade real) |

## 4. SEO + GEO

**SEO técnico**
- Hook `useSeo`: title, meta description, canonical, OG/Twitter, JSON-LD por rota.
- JSON-LD: `Physician` (com `medicalSpecialty`, CRM em `identifier`), 2 × `MedicalClinic`,
  `WebSite`, `BreadcrumbList` por página, `FAQPage` em `/duvidas` e na FAQ da home.
- `sitemap.xml` e `robots.txt` gerados a partir de `content/pages.ts` (script no build).
- `og:image` em `client/public/opengraph.jpg` (1200×630) — a base espera nesse caminho.
- Headings únicos por página, links internos entre páginas-irmãs, `lang="pt-BR"`.

**GEO — duas leituras, ambas atendidas**
1. *Geográfico / local*: NAP consistente, páginas de bairro com conteúdo distinto
   (referências locais reais, unidade correspondente, horários, FAQ própria),
   `areaServed`, `hasMap` apontando para busca por endereço no Google Maps.
2. *Generative Engine Optimization*: `llms.txt`, blocos de resposta direta (pergunta → resposta
   objetiva em 1–2 frases) que LLMs conseguem extrair, tabela de fatos (endereço/horário/CRM),
   FAQ em JSON-LD, linguagem factual sem marketing vazio.

**Palavras-chave alvo**
- Primárias: otorrinolaringologia Jardim das Perdizes · otorrinolaringologia Barra Funda · otorrino
- Secundárias: otorrino Barra Funda · otorrino Jardim das Perdizes · otorrino Água Branca ·
  otoneurologista São Paulo · tratamento vertigem SP · exame vHIT São Paulo · VPPB ·
  septoplastia São Paulo · otorrino Oscar Freire · otorrino Jardim Paulista · otorrino Pinheiros

## 5. Checklist anti-cara-de-IA
- Copy **verbatim** da `insumos/` (corrigindo só os typos evidentes do arquivo: "sinusaisuma",
  "remédiocirurgia", "nasalplastia" → septoplastia, "valoriam" → valorizam, "casos casos", "aéreas..").
- Sem emoji. Sem "Descubra/Transforme/Eleve". Sem stock photo genérica.
- Animações sutis (fade/translate ≤ 16px), sem parallax, sem contador animado.
- Foto real do Dr. Danilo (300×330 — resolução baixa): usar em **cartão contido ≤ 300px**,
  nunca em full-bleed, para não borrar.
- Depoimentos: **seção oculta** por flag até haver autorização escrita (a copy pede cautela ética).
- Sem preço. Sem promessa de resultado. CRM + RQE visíveis (exigência CFM).

## 6. Critérios de aceite
- `npm run check` sem erro.
- `npm run build` gera `dist/public` + `sitemap.xml` + `robots.txt`.
- 11 rotas respondem 200 e renderizam conteúdo distinto (title/description únicos).
- Nenhum placeholder do whitelabel (`Dr(a). Nome`, `XXXXXX`, `[especialidade]`) no bundle.
- Todos os CTAs de agendamento levam ao `wa.me/5511932219644` com mensagem identificando a origem.

## 7. Pendências para o cliente
- Confirmar e-mail oficial: `dr.danilo.real@gmail.com` (copy) × `contato@daniloreal.com.br` (site atual).
- Fotos do consultório e de atendimento (a copy indica "foto ideal" em 8 blocos; só há 1 retrato).
- Depoimentos autorizados por escrito.
- Headline da home: a copy oferece 3 opções — foi usada a **opção 1**; validar com o Dr.
- Teleconsulta: o site atual menciona telemedicina; a copy não confirma. Não foi publicado.

---

## 8. Estado da entrega — 26/08/2026

Implementado e validado. `npm run check` limpo, `npm run build` gerando
`dist/public` + `sitemap.xml` + `robots.txt` + `llms.txt` + `404.html`.

### Diferença relevante em relação ao plano original

O plano previa "SSR estático em prod", mas a base whitelabel serve uma SPA pura.
Verificado em execução: as 11 rotas entregavam **HTML idêntico** para quem não
roda JavaScript — o `<title>`, a descrição e o conteúdo só existiam depois da
hidratação. O Google renderiza JS, mas a maior parte dos crawlers de LLM
(GEO) não. Como SEO e GEO eram o objetivo declarado, foi adicionada
pré-renderização estática:

- `client/src/entry-server.tsx` — árvore React renderizada no Node.
- `script/prerender.ts` — gera um `.html` completo por rota, mais `404.html`.
- `client/src/lib/seo.ts` — `buildSeo()` puro; navegador e build usam a mesma fonte.
- `client/src/content/routeSeo.ts` — registro de FAQ/breadcrumb por rota.
- `main.tsx` hidrata quando encontra HTML pré-renderizado.
- `server/static.ts` usa `extensions: ["html"]` e devolve `404.html` com status 404.

### Defeitos encontrados na validação e corrigidos

1. **`<meta name="description">` duplicada em todas as páginas** — o regex do
   prerender não pegava a tag multi-linha do template. Resolvido com marcadores
   explícitos `<!-- seo:start -->` / `<!-- seo:end -->` em `client/index.html`.
2. **Erro de hidratação (React #418) em URL inexistente** — o fallback servia o
   HTML da home sob outra URL. Resolvido com `404.html` próprio, sem canonical,
   sem JSON-LD, `noindex` e status 404.
3. **`opacity:0` no HTML estático** — o `whileInView` do framer-motion serializa
   o estado inicial; sem JS o conteúdo ficava invisível e o herói só pintava
   após o bundle. Resolvido removendo a animação de entrada do herói (é o LCP) e
   adicionando fallback em `<noscript>` para os blocos de scroll.

### Evidência

12 rotas (11 + 404) verificadas em Chrome headless: título único em todas,
uma `<meta description>` e um canonical por página, um `<h1>` por página,
JSON-LD com 4–5 tipos (`WebSite`, `Physician`, `BreadcrumbList`, `WebPage`,
`FAQPage` onde aplicável), console sem erros, nenhum placeholder do whitelabel,
todos os CTAs em `wa.me/5511932219644` com mensagem de origem.
HTML cru (sem JS): 291–950 palavras de conteúdo real por rota.

### Continua pendente com o cliente

Tudo o que está na seção 7 permanece: e-mail oficial, fotos do consultório,
depoimentos autorizados, validação da headline e definição sobre teleconsulta.
O `.env` ainda está com placeholders de SMTP — o formulário de contato do
whitelabel não é usado (todos os CTAs vão para o WhatsApp), mas se for ativado
precisa das credenciais.
