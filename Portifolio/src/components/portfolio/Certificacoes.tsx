import { Figura } from "./Figura";
import { Reveal } from "./Reveal";

const certificados = [
  { img: "front.png", nome: "Programação Front-End" },
  { img: "JavaScriptC.png", nome: "JavaScript" },
  { img: "Certificado W3schools.png", nome: "W3Schools" },
  { img: "5g.png", nome: "Tecnologia 5G" },
  { img: "EC.png", nome: "Empreendedorismo Criativo" },
  { img: "libras.png", nome: "Libras" },
];

export function Certificacoes() {
  return (
    <section id="certificacoes" className="overflow-hidden bg-cream px-4 py-14 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative">
          <span
            aria-hidden
            className="pointer-events-none block font-display text-[clamp(3rem,12vw,7rem)] leading-none tracking-[0.05em] text-brand opacity-20"
          >
            Certificações
          </span>
          <h2 className="-mt-6 font-display text-[clamp(1.8rem,6vw,3.2rem)] text-brand sm:-mt-10">
            Certificações
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificados.map((c, i) => (
            <Reveal key={c.img} from="up" delay={i * 0.06}>
              <div
                className="ticket-cut flex h-full flex-col gap-4 rounded-3xl bg-brand p-6"
                style={{ ["--cut-color" as string]: "oklch(0.98 0.06 108)" }}
              >
                <Figura
                  src={`/imagens/${c.img}`}
                  alt={c.nome}
                  className="h-40 w-full rounded-xl bg-cream object-contain p-2"
                  fallbackClassName="grid h-40 w-full place-items-center rounded-xl border border-dashed border-cream/50 bg-cream/10 text-xs text-cream"
                />
                <p className="font-script text-2xl text-cream">{c.nome}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
