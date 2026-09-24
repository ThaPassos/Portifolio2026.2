import { Figura } from "./Figura";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export function Inicial() {
  const ano = 2025;

  return (
    <section className="relative overflow-hidden bg-brand pb-16 pt-6">
      <header className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-8">
        <nav className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-4">
          <button
            onClick={() => scrollTo("sobre-mim")}
            className="rounded-full border border-sand px-4 py-1 font-script text-lg text-sand transition-colors hover:bg-sand hover:text-brand sm:px-8 sm:text-2xl"
          >
            Sobre Mim
          </button>
          <button
            onClick={() => scrollTo("projetos")}
            className="rounded-full border border-sand px-4 py-1 font-script text-lg text-sand transition-colors hover:bg-sand hover:text-brand sm:px-6 sm:text-2xl"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollTo("contato")}
            className="rounded-full border border-sand px-4 py-1 font-script text-lg text-sand transition-colors hover:bg-sand hover:text-brand sm:px-6 sm:text-2xl"
          >
            Contato
          </button>
        </nav>
        <h3 className="shrink-0 font-script text-base tracking-[0.2em] text-sand sm:text-2xl">
          Thafany Passos
        </h3>
      </header>

      <div className="mx-auto mt-8 grid w-full max-w-7xl items-center gap-8 px-4 sm:px-8 lg:mt-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <h1 className="font-display text-[clamp(3.5rem,15vw,11rem)] leading-[0.85] tracking-[0.06em] text-black">
            PORTI
            <br />
            FÓLIO
          </h1>
          <p className="mt-4 font-script text-4xl text-sand sm:text-6xl">{ano}</p>
        </div>

        <div className="relative grid min-w-0 grid-cols-3 items-center gap-4 sm:gap-6">
          <Figura
            src="/imagens/adesivo.png"
            alt="Adesivo"
            className="col-span-3 mx-auto w-32 sm:w-48"
          />
          <Figura src="/imagens/java.png" alt="Java" className="w-full max-w-28 -rotate-12" />
          <Figura src="/imagens/html.png" alt="HTML" className="w-full max-w-28" />
          <Figura src="/imagens/react.png" alt="React" className="w-full max-w-20" />
          <Figura
            src="/imagens/pc.png"
            alt="Computador"
            className="col-span-3 mx-auto w-40 -rotate-12 sm:w-56"
          />
        </div>
      </div>

      <div className="mt-12 h-8 w-full bg-cream sm:h-12" />
    </section>
  );
}
