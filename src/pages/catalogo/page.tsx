import { useState } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import CatalogGrid from "./components/CatalogGrid";
import { categories } from "@/mocks/products";
import { siteInfo, whatsappLink } from "@/mocks/site";

export default function Catalogo() {
  const [activeCategory, setActiveCategory] = useState("todos");

  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <section className="relative w-full pt-28 pb-14 md:pt-36 md:pb-20">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Elegant%20flat%20lay%20of%20assorted%20artisan%20desserts%20pastel%20cakes%20cupcakes%20decorated%20cookies%20and%20cake%20pops%20on%20a%20cream%20marble%20surface%2C%20soft%20blush%20pink%20accent%2C%20editorial%20food%20photography%2C%20warm%20natural%20light%2C%20high%20detail&width=1920&height=700&seq=csp-cat-hero&orientation=landscape"
              alt="Catálogo de postres artesanales de Cookies Space"
              title="Catálogo Cookies Space Pastelería - postres personalizados"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/65 via-foreground-950/50 to-foreground-950/65"></div>
          </div>
          <div className="relative z-10 w-full px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-script text-accent-300 text-2xl md:text-3xl">
                Nuestro menú dulce
              </span>
              <h1 className="mt-2 font-heading text-background-50 text-4xl md:text-5xl">
                Catálogo de productos
              </h1>
              <p className="mt-4 text-background-100 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                Explora nuestras creaciones y personaliza la tuya. Toma una captura del producto que te guste
                y envíanosla por WhatsApp para cotizar.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-4 md:px-6 py-12 md:py-16 bg-background-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-label font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-primary-500 text-background-50"
                      : "bg-background-100 text-foreground-700 hover:bg-background-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <CatalogGrid activeCategory={activeCategory} />
          </div>
        </section>

        <section className="w-full px-4 md:px-6 py-14 md:py-20 bg-secondary-50">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-script text-accent-500 text-2xl md:text-3xl">
              ¿No encuentras lo que buscas?
            </span>
            <h2 className="mt-2 font-heading text-3xl md:text-4xl text-foreground-950">
              Lo diseñamos contigo
            </h2>
            <p className="mt-4 text-foreground-600 text-sm md:text-base leading-relaxed">
              Envíanos una foto de inspiración y te cotizamos un diseño totalmente personalizado para tu celebración.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappLink(`¡Hola ${siteInfo.name}! Quiero cotizar un diseño personalizado.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 text-sm md:text-base font-label font-semibold px-7 py-3.5 rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                Cotizar mi diseño
              </a>
              <a
                href={siteInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-background-50 border border-primary-300 text-primary-800 hover:bg-primary-100 text-sm md:text-base font-label font-semibold px-7 py-3.5 rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-instagram-line text-lg"></i>
                Ver precios en Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}