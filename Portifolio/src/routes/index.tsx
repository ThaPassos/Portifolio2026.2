import { createFileRoute } from "@tanstack/react-router";
import { Inicial } from "@/components/portfolio/Inicial";
import { SobreMim } from "@/components/portfolio/SobreMim";
import { Projetos } from "@/components/portfolio/Projetos";
import { ProjetosBack } from "@/components/portfolio/ProjetosBack";
import { Certificacoes } from "@/components/portfolio/Certificacoes";
import { Contato } from "@/components/portfolio/Contato";

const title = "Thafany Passos | Portfólio de Desenvolvimento";
const description =
  "Portfólio de Thafany Passos: projetos front-end, back-end e mobile, certificações e formas de contato.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-cream">
      <Inicial />
      <SobreMim />
      <Projetos />
      <ProjetosBack />
      <Certificacoes />
      <Contato />
    </main>
  );
}
