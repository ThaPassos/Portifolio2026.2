import { Download } from "lucide-react";
import { Figura } from "./Figura";
import { Reveal } from "./Reveal";

const educacao = [
  "Ensino fundamental - Rede pública",
  "Ensino fundamental 2 e Ensino médio - Sesi",
  "Técnico em desenvolvimento de sistemas - Senai",
  "Inglês - básico",
  "Libras - intermediário",
  "Curso em oratória",
  "Conhecimento em GIMP, PHOTOSHOP e CANVA",
  "Conhecimento em Pacote Office - Bradesco",
];

const experiencias = [
  "Mídia da igreja - criando flyers e banners",
  "Experiências de oratória - Projetos escolares e religiosos",
  "Trabalho de Social Media - Loja de crochê da minha mãe",
  "Trabalhos voluntários - em creches e escolas do ensino fundamental, realização de bazar e vendas beneficentes",
];

const techs = [
  { file: "logoCss.png", nome: "CSS" },
  { file: "logoHtml.png", nome: "HTML" },
  { file: "logoJs.png", nome: "JavaScript" },
  { file: "logoReact.png", nome: "React" },
  { file: "logoRNative.png", nome: "React Native" },
  { file: "logoFlutter.webp", nome: "Flutter" },
  { file: "logoJava.png", nome: "Java" },
  { file: "logoSpring.png", nome: "Spring" },
  { file: "logoMySQL.png", nome: "MySQL" },
];

export function SobreMim() {
  return (
    <section id="sobre-mim" className="relative overflow-hidden bg-cream px-4 py-14 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative">
          <span
            aria-hidden
            className="pointer-events-none block font-display text-[clamp(3rem,12vw,7rem)] leading-none tracking-[0.05em] text-brand opacity-20"
          >
            Resumo
          </span>
          <h2 className="-mt-6 font-display text-[clamp(1.8rem,6vw,3.2rem)] text-brand sm:-mt-10">
            Resumo
          </h2>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <Reveal from="left" className="min-w-0 space-y-8">
            <div>
              <h3 className="font-script text-3xl text-brand sm:text-5xl">Sobre mim</h3>
              <p className="mt-3 text-justify text-sm leading-relaxed text-foreground sm:text-base">
                Olá, meu nome é Thafany Santos Passos, sou cristã, nasci no sul da Bahia no dia
                31/01 de 2008. Eu sempre fui muito curiosa com as tecnologias e desde sempre ficava
                mexendo no computador que rodava Windows XP da minha família. Aos 5 anos eu e minha
                família nos mudamos para Sorocaba e eu sempre fui muito dedicada na minha educação
                — realmente amo estudar e quero fazer isso para o resto da minha vida. Comecei o
                ensino técnico em 2024 e, como em tudo na minha vida, continuarei me aperfeiçoando e
                dando o meu melhor.
              </p>
            </div>

            <div>
              <h3 className="font-script text-3xl text-brand sm:text-5xl">Educação</h3>
              <p className="mt-3 text-justify text-sm leading-relaxed text-foreground sm:text-base">
                Como mencionei, sempre fui muito dedicada nos estudos e também viciada em validação
                acadêmica, então vou listar algumas etapas da minha educação:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground sm:text-base">
                {educacao.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal from="right" className="min-w-0 space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              <Figura
                src="/imagens/foto.jpeg"
                alt="Foto de Thafany"
                className="h-40 w-32 rounded-full object-cover opacity-90 sm:h-56 sm:w-44"
              />
              <Figura
                src="/imagens/MeuAvatar.png"
                alt="Avatar"
                className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
              />
              <Figura
                src="/imagens/avatarBitmoji.png"
                alt="Bitmoji"
                className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
              />
              <a
                href="/imagens/Curriculo.pdf"
                download
                aria-label="Baixar currículo"
                className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground shadow-lg transition-colors hover:opacity-90"
              >
                <Download size={28} />
              </a>
            </div>

            <div>
              <h3 className="font-script text-3xl text-brand sm:text-5xl">Experiências</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground sm:text-base">
                {experiencias.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-script text-3xl text-brand sm:text-5xl">
                Frameworks e linguagens
              </h3>
              <div className="mt-4 flex flex-wrap gap-4 sm:gap-6">
                {techs.map((tech, i) => (
                  <div key={tech.file} style={{ animationDelay: `${i * 0.15}s` }}>
                    <Figura
                      src={`/imagens/${tech.file}`}
                      alt={tech.nome}
                      className="float-soft h-10 w-10 object-contain opacity-60 sm:h-12 sm:w-12"
                      fallbackClassName="float-soft grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-lg border border-brand/30 bg-brand/10 text-[9px] text-brand"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
