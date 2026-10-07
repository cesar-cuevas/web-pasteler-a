import { Link } from "react-router-dom";
import { combos } from "@/mocks/combos";
import { whatsappLink } from "@/mocks/site";

export default function CombosPreview() {
  return (
    <section className="w-full px-4 md:px-6 py-16 md:py-20 bg-background-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-elegant text-accent-500 text-3xl md:text-4xl leading-none block">
            Celebra sin complicaciones
          </span>
          <h2 className="mt-3 font-heading text-3xl md:text-4xl text-foreground-950">
            Combos de cumpleaños
          </h2>
          <p className="mt-4 text-foreground-600 text-sm md:text-base leading-relaxed">
            Mesas dulces completas con todo lo que necesitas para tu fiesta, ya organizado en un solo combo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {combos.map((combo) => (
            <article
              key={combo.id}
              className={`group rounded-lg overflow-hidden border flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                combo.highlight
                  ? "border-accent-400 bg-accent-50 hover:border-accent-500"
                  : "border-background-200 bg-background-100 hover:border-primary-300"
              }`}
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.name}
                  title={`${combo.name} - Cookies Space Pastelería`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                {combo.highlight && (
                  <span className="absolute top-3 right-3 bg-accent-500 text-background-50 text-xs font-label font-semibold px-3 py-1.5 rounded-full animate-float">
                    Más pedido
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-elegant text-2xl md:text-3xl text-foreground-950 group-hover:text-accent-600 transition-colors">
                  {combo.name}
                </h3>
                <p className="mt-1 text-xs font-label font-semibold text-secondary-700 uppercase tracking-wide">
                  {combo.people}
                </p>
                <ul className="mt-4 space-y-2 flex-1">
                  {combo.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground-700">
                      <i className="ri-checkbox-circle-fill text-accent-500 mt-0.5"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-5 border-t border-background-300/60 flex items-center justify-between gap-3">
                  <span className="font-label font-semibold text-secondary-700 text-sm whitespace-nowrap">
                    Cotiza por WhatsApp
                  </span>
                  <a
                    href={whatsappLink(
                      `¡Hola! Me interesa el "${combo.name}". ¿Me das más detalles?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 text-sm font-label font-semibold px-4 py-2.5 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-whatsapp-line"></i>
                    Pedir
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/combos"
            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-600 font-label font-semibold text-sm cursor-pointer"
          >
            Ver todos los combos y detalles
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}