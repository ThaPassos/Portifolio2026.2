import { Figura } from "./Figura";

export function Contato() {
  return (
    <footer id="contato" className="bg-brand px-4 py-12 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="font-display text-[clamp(2.2rem,9vw,4.5rem)] leading-none text-black">
          Contato
        </h2>

        <ul className="mt-6 space-y-4">
          <li className="flex min-w-0 items-center gap-4">
            <Figura
              src="/imagens/email.webp"
              alt="E-mail"
              className="h-10 w-10 shrink-0 object-contain"
              fallbackClassName="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-[9px] text-brand"
            />
            <a
              href="mailto:Thafany.passos.dev2024@gmail.com"
              className="min-w-0 break-all text-sm text-cream hover:underline sm:text-base"
            >
              Thafany.passos.dev2024@gmail.com
            </a>
          </li>
          <li className="flex min-w-0 items-center gap-4">
            <Figura
              src="/imagens/gitHub.png"
              alt="GitHub"
              className="h-9 w-9 shrink-0 object-contain"
              fallbackClassName="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream text-[9px] text-brand"
            />
            <a
              href="https://github.com/ThaPassos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cream hover:underline sm:text-base"
            >
              @ThaPassos
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
