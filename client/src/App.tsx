import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

import Layout from "@/components/site/Layout";
import Home from "@/pages/Home";
import ComoEuCuido from "@/pages/ComoEuCuido";
import Otoneurologia from "@/pages/Otoneurologia";
import Cirurgias from "@/pages/Cirurgias";
import OtorrinoGeral from "@/pages/OtorrinoGeral";
import Consultorio from "@/pages/Consultorio";
import Duvidas from "@/pages/Duvidas";
import Agendar from "@/pages/Agendar";
import JardimDasPerdizes from "@/pages/geo/JardimDasPerdizes";
import BarraFunda from "@/pages/geo/BarraFunda";
import JardimPaulista from "@/pages/geo/JardimPaulista";
import NotFound from "@/pages/not-found";

/* As rotas espelham client/src/content/pages.ts — que é a fonte do sitemap,
   do menu e das meta tags. Rota nova entra lá primeiro. */
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/como-eu-cuido" component={ComoEuCuido} />
      <Route path="/otoneurologia" component={Otoneurologia} />
      <Route path="/cirurgias" component={Cirurgias} />
      <Route path="/otorrinolaringologia" component={OtorrinoGeral} />
      <Route path="/consultorio" component={Consultorio} />
      <Route path="/duvidas" component={Duvidas} />
      <Route path="/agendar" component={Agendar} />
      <Route path="/otorrino-jardim-das-perdizes" component={JardimDasPerdizes} />
      <Route path="/otorrino-barra-funda" component={BarraFunda} />
      <Route path="/otorrino-jardim-paulista" component={JardimPaulista} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Router />
        </Layout>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
