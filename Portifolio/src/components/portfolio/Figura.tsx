import { useEffect, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
};

/**
 * Imagem tolerante a arquivos ausentes: coloque seus arquivos em
 * `public/imagens/` com os mesmos nomes usados aqui.
 * Enquanto o arquivo não existir, mostramos um marcador com o nome.
 */
export function Figura({ src, alt, className, fallbackClassName }: Props) {
  const [status, setStatus] = useState<"loading" | "ok" | "fail">("loading");

  useEffect(() => {
    let active = true;
    const img = new Image();
    img.onload = () => active && setStatus(img.naturalWidth > 0 ? "ok" : "fail");
    img.onerror = () => active && setStatus("fail");
    img.src = src;
    return () => {
      active = false;
    };
  }, [src]);

  if (status !== "ok") {
    return (
      <div
        aria-label={alt}
        role="img"
        className={
          fallbackClassName ??
          `${className ?? ""} grid place-items-center rounded-xl border border-dashed border-brand/40 bg-brand/10 p-2 text-center text-[10px] leading-tight text-brand`
        }
      >
        {status === "fail" ? alt : ""}
      </div>
    );
  }

  return <img src={src} alt={alt} loading="lazy" className={className} />;
}
