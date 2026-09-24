import { Reveal } from "./Reveal";

const projetos = [
  { titulo: "API para cadastro de jogos", link: "https://github.com/ThaPassos/colaborador" },
  { titulo: "API para um pet shop", link: "https://github.com/ThaPassos/PrjThafanySomativa1" },
  { titulo: "API para farmácias", link: "https://github.com/ThaPassos/Farmacia-Spring" },
  { titulo: "Jogo de Tabuleiro - Java", link: "https://github.com/ThaPassos/jogotabuleiro" },
  {
    titulo: "API para lojas",
    link: "https://github.com/ThaPassos/Somativa2_BackEnd-Spring-Relacionamentos-",
  },
  {
    titulo: "Conversor de temperatura - Flutter",
    link: "https://github.com/ThaPassos/Conversor-de-temperatura--flutter",
  },
  { titulo: "API para indústrias", link: "https://github.com/ThaPassos/Spring-Empresa" },
  {
    titulo: "API para projetos",
    link: "https://github.com/ThaPassos/Spring-Employees-e-projects",
  },
];

export function ProjetosBack() {
  return (
    <section className="relative overflow-hidden bg-brand px-4 py-14 sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-24 h-64 w-64 rounded-full bg-cream/90 sm:h-80 sm:w-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 hidden h-[32rem] w-[32rem] rounded-full bg-cream/90 lg:block"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="text-center lg:text-left">
          <h2 className="font-display text-[clamp(2.5rem,10vw,6rem)] leading-none tracking-[0.05em] text-black">
            Projetos
          </h2>
          <p className="mt-2 font-script text-2xl text-cream sm:text-4xl">
            Back-End e Desenvolvimento mobile
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="flex min-w-0 flex-wrap gap-4">
            {projetos.map((p, i) => (
              <Reveal key={p.link} from="left" delay={i * 0.06}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-cream px-5 py-3 font-script text-lg text-cream transition-colors hover:bg-cream hover:text-brand sm:text-2xl"
                >
                  {p.titulo}
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal from="right" className="min-w-0">
            <p className="rounded-3xl bg-cream/90 p-6 text-justify text-sm leading-relaxed text-foreground sm:text-base lg:bg-transparent lg:p-0">
              Esta parte se refere a alguns projetos que desenvolvi utilizando linguagens
              referentes ao Back-End, utilizando o Java e o Spring, e o desenvolvimento mobile,
              usando o Dart com o Flutter. Grande parte desses projetos desenvolvi junto com os
              professores no curso técnico de desenvolvimento de sistemas.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
