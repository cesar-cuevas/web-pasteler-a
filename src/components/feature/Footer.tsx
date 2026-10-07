import { Link } from "react-router-dom";
import { siteInfo, whatsappLink } from "@/mocks/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-background-100">
      <div className="w-full px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-11 h-11 rounded-full bg-background-50/10 border border-background-50/20 flex items-center justify-center">
                <i className="ri-cake-3-line text-accent-300 text-xl"></i>
              </span>
              <span className="leading-none">
                <span className="font-script text-background-50 text-2xl block">
                  Cookies Space
                </span>
                <span className="block text-xs tracking-[0.3em] text-accent-300 font-label font-semibold">
                  PASTELERÍA
                </span>
              </span>
            </div>
            <p className="text-background-200 text-sm leading-relaxed max-w-sm">
              {siteInfo.tagline}
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={siteInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-background-50/10 hover:bg-accent-500 flex items-center justify-center transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a
                href={whatsappLink(`¡Hola ${siteInfo.name}! Quiero hacer un pedido.`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-background-50/10 hover:bg-accent-500 flex items-center justify-center transition-colors cursor-pointer"
              >
                <i className="ri-whatsapp-line text-lg"></i>
              </a>
              <a
                href={`tel:${siteInfo.phone.replace(/[^0-9+]/g, "")}`}
                aria-label="Teléfono"
                className="w-10 h-10 rounded-full bg-background-50/10 hover:bg-accent-500 flex items-center justify-center transition-colors cursor-pointer"
              >
                <i className="ri-phone-line text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-background-50 text-base mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/catalogo" className="text-background-200 hover:text-accent-300 text-sm transition-colors cursor-pointer">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/combos" className="text-background-200 hover:text-accent-300 text-sm transition-colors cursor-pointer">
                  Combos de cumpleaños
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-background-200 hover:text-accent-300 text-sm transition-colors cursor-pointer">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-background-200 hover:text-accent-300 text-sm transition-colors cursor-pointer">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-background-50 text-base mb-4">
              Contáctanos
            </h4>
            <ul className="space-y-3 text-sm text-background-200">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center text-accent-300 mt-0.5">
                  <i className="ri-whatsapp-line"></i>
                </span>
                <span>{siteInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center text-accent-300 mt-0.5">
                  <i className="ri-instagram-line"></i>
                </span>
                <span>@{siteInfo.instagram}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center text-accent-300 mt-0.5">
                  <i className="ri-send-plane-line"></i>
                </span>
                <span>Pedidos con 2 días de anticipación</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background-50/15">
        <div className="w-full px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background-300">
            © {year} {siteInfo.fullName}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-background-300">
            Hecho con mucho dulce en {siteInfo.city}
          </p>
        </div>
      </div>
    </footer>
  );
}