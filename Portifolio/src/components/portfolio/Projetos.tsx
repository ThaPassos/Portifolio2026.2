import { Figura } from "./Figura";
import { Reveal } from "./Reveal";

const projetos = [
  {
    img: "petShop.png",
    alt: "PetShop",
    texto:
      'Esse foi um projeto feito em grupo para um pet shop, eu fiquei responsável por realizar a parte do "sobre nós", foi um projeto onde aprendi muito.',
    link: "https://thapassos.github.io/PetShop---TMJ/about.html",
  },
  {
    img: "siteNoticia.png",
    alt: "Site de notícias",
    texto:
      "Esse projeto de site de notícias foi realizado em sala, juntamente com o professor, utilizando o Bootstrap. Ele foi excelente para aprender essa nova tecnologia.",
    link: "",
  },
  {
    img: "JogoArcade.png",
    alt: "Jogo Arcadismo",
    texto:
      'Esse foi um "joguinho" realizado para um site, feito com um grupo, acerca da escola literária do arcadismo. Nele o patinho tenta alcançar o "locus amoenus" fugindo dos obstáculos.',
    link: "https://thapassos.github.io/Jogo-Arcadismo/",
  },
  {
    img: "Pokedex.png",
    alt: "Pokédex",
    texto:
      "Esse foi um projeto muito interessante, onde, juntamente com o professor em sala de aula, realizamos essa espécie de pokédex utilizando uma API e JavaScript.",
    link: "",
  },
];

export function Projetos() {
  return (
    <section id="projetos" className="overflow-hidden bg-brand px-4 py-14 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center">
          <h2 className="font-display text-[clamp(2.5rem,10vw,6rem)] leading-none tracking-[0.05em] text-black">
            Projetos
          </h2>
          <p className="mt-2 font-script text-2xl text-cream sm:text-5xl">
            Programação Front-End
          </p>
        </div>

        <div
          className="ticket-cut mt-10 rounded-3xl bg-ticket p-6 sm:p-10"
          style={{ ["--cut-color" as string]: "oklch(0.49 0.098 52)" }}
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {projetos.map((p, i) => (
              <Reveal
                key={p.alt}
                from="up"
                delay={i * 0.08}
                className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
              >
                <Figura
                  src={`/imagens/${p.img}`}
                  alt={p.alt}
                  className="w-full max-w-xs shrink-0 rounded-xl object-cover sm:w-56"
                  fallbackClassName="grid h-36 w-full max-w-xs sm:w-56 shrink-0 place-items-center rounded-xl border border-dashed border-brand/40 bg-brand/10 text-xs text-brand"
                />
                <div className="min-w-0">
                  <p className="text-justify text-sm text-foreground sm:text-base">{p.texto}</p>
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block rounded-full border-2 border-black px-5 py-1 font-script text-lg text-foreground transition-colors hover:bg-black hover:text-ticket"
                    >
                      Ver mais
                    </a>
                  ) : (
                    <span className="mt-3 inline-block rounded-full border-2 border-black/30 px-5 py-1 font-script text-lg text-foreground/50">
                      Projeto local
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
