import { siteInfo, whatsappLink } from "@/mocks/site";

export default function MenuOptions() {
  return (
    <section className="relative w-full px-4 md:px-6 py-16 md:py-24 bg-background-100 overflow-hidden">
      <span className="pointer-events-none absolute -top-24 -left-20 w-72 h-72 rounded-full bg-accent-200/40 blur-3xl" />
      <span className="pointer-events-none absolute -bottom-24 -right-20 w-72 h-72 rounded-full bg-primary-200/40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-elegant text-accent-500 text-4xl md:text-5xl leading-none block">
            Dos formas de verlo
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl text-foreground-950">
            Elige cómo quieres ver nuestro menú
          </h2>
          <p className="mt-4 text-foreground-600 text-sm md:text-base leading-relaxed">
            Tenemos todo listo para ti. Puedes ver los precios de nuestras creaciones en Instagram
            o pedirnos el catálogo completo por WhatsApp. Tú eliges por dónde empezar.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <article className="group relative overflow-hidden flex flex-col bg-accent-50 border border-accent-200 rounded-2xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent-300">
            <span className="pointer-events-none absolute -top-14 -right-14 w-44 h-44 rounded-full bg-accent-200/60 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <span className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-background-50 border border-accent-200 flex items-center justify-center flex-shrink-0 animate-float transition-transform duration-300 group-hover:scale-110">
              <i className="ri-instagram-line text-accent-600 text-3xl md:text-4xl"></i>
            </span>

            <span className="relative mt-5 text-xs font-label font-semibold uppercase tracking-wide text-accent-700">
              Precios actualizados
            </span>
            <h3 className="relative mt-2 font-heading text-xl md:text-2xl text-foreground-950">
              Mira los precios en Instagram
            </h3>
            <p className="relative mt-3 text-sm text-foreground-600 leading-relaxed flex-1">
              <a
                href={siteInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-elegant text-xl text-accent-600 underline decoration-accent-300 underline-offset-4 decoration-2 transition-colors duration-300 hover:text-accent-700 hover:decoration-accent-500 cursor-pointer"
              >
                Instagram
              </a>
              , ahí publicamos cada creación con su precio actualizado, además de los diseños más
              recientes y las promociones del momento. Síguenos en{" "}
              <a
                href={siteInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground-900 hover:text-accent-700 transition-colors duration-300 cursor-pointer"
              >
                @{siteInfo.instagram}
              </a>
              .
            </p>

            <a
              href={siteInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-background-50 text-sm font-label font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/40 cursor-pointer whitespace-nowrap self-start"
            >
              <i className="ri-instagram-line text-base transition-transform duration-300 group-hover/btn:rotate-12"></i>
              Ver precios en Instagram
            </a>
          </article>

          <article className="group relative overflow-hidden flex flex-col bg-primary-50 border border-primary-200 rounded-2xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary-300">
            <span className="pointer-events-none absolute -top-14 -right-14 w-44 h-44 rounded-full bg-primary-200/60 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <span className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-background-50 border border-primary-200 flex items-center justify-center flex-shrink-0 animate-float transition-transform duration-300 group-hover:scale-110">
              <i className="ri-whatsapp-line text-primary-700 text-3xl md:text-4xl"></i>
            </span>

            <span className="relative mt-5 text-xs font-label font-semibold uppercase tracking-wide text-primary-700">
              Catálogo completo
            </span>
            <h3 className="relative mt-2 font-heading text-xl md:text-2xl text-foreground-950">
              Pide el catálogo por WhatsApp
            </h3>
            <p className="relative mt-3 text-sm text-foreground-600 leading-relaxed flex-1">
              Escríbenos por WhatsApp y te compartimos el catálogo completo con todas nuestras
              creaciones, sabores y precios al día. Coordinamos tu pedido en el mismo chat con{" "}
              <strong className="text-foreground-900">{siteInfo.phone}</strong>.
            </p>

            <a
              href={whatsappLink(`¡Hola ${siteInfo.name}! Quiero ver el catálogo completo.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 text-sm font-label font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/40 cursor-pointer whitespace-nowrap self-start"
            >
              <i className="ri-whatsapp-line text-base transition-transform duration-300 group-hover/btn:rotate-12"></i>
              Ver catálogo por WhatsApp
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}