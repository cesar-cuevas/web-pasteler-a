import { Link } from "react-router-dom";
import { siteInfo, whatsappLink } from "@/mocks/site";

export default function ContactCTA() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Stylized%20cozy%20bakery%20counter%20with%20assorted%20pastel%20cakes%20and%20cookies%2C%20soft%20blush%20pink%20and%20cream%20tones%2C%20editorial%20food%20photography%2C%20warm%20ambient%20lighting%20with%20bokeh%2C%20artistic%20and%20inviting&width=1920&height=800&seq=csp-cta-01&orientation=landscape"
          alt="Mostrador de la pastelería Cookies Space"
          title="Cookies Space Pastelería - Contáctanos"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground-950/70 via-foreground-950/55 to-foreground-950/40"></div>
      </div>

      <div className="relative z-10 w-full px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="font-script text-accent-300 text-2xl md:text-3xl">
            Hagamos algo dulce
          </span>
          <h2 className="mt-2 font-heading text-3xl md:text-5xl text-background-50 leading-tight">
            ¿Listo para endulzar tu próxima celebración?
          </h2>
          <p className="mt-5 text-background-100 text-sm md:text-base leading-relaxed max-w-xl">
            Cuéntanos qué tienes en mente y te ayudamos a diseñar el detalle perfecto.
            Escríbenos por WhatsApp o visítanos en {siteInfo.city}.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href={whatsappLink(`¡Hola ${siteInfo.name}! Quiero cotizar mi pedido.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-background-50 text-sm md:text-base font-label font-semibold px-7 py-3.5 rounded-md transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-whatsapp-line text-lg"></i>
              Escríbenos por WhatsApp
            </a>
            <Link
              to="/contacto"
              className="flex items-center justify-center gap-2 border border-background-50/50 hover:bg-background-50/10 text-background-50 text-sm md:text-base font-label font-semibold px-7 py-3.5 rounded-md transition-colors cursor-pointer whitespace-nowrap"
            >
              Ver contacto
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}