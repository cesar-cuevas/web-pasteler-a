import { Link } from "react-router-dom";
import { products } from "@/mocks/products";
import { whatsappLink } from "@/mocks/site";

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section className="w-full px-4 md:px-6 py-16 md:py-20 bg-background-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <span className="font-script text-accent-500 text-2xl md:text-3xl">
              Los favoritos
            </span>
            <h2 className="mt-2 font-heading text-3xl md:text-4xl text-foreground-950">
              Productos destacados
            </h2>
            <p className="mt-3 text-foreground-600 text-sm md:text-base leading-relaxed">
              Una probadita de lo que podemos crear para ti. Todo se personaliza a tu gusto.
            </p>
          </div>
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 text-sm font-label font-semibold px-6 py-3 rounded-md transition-colors cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            Ver catálogo completo
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        <div
          data-product-shop
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {featured.map((product) => (
            <article
              key={product.id}
              className="group bg-background-50 border border-background-200 rounded-lg overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  title={`${product.name} - Cookies Space Pastelería`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-accent-500 text-background-50 text-xs font-label font-semibold px-3 py-1.5 rounded-full">
                  {product.tag}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-heading text-lg text-foreground-950 leading-snug">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-foreground-600 leading-relaxed flex-1">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="font-label font-semibold text-secondary-700 text-sm whitespace-nowrap">
                    Cotiza por WhatsApp
                  </span>
                  <a
                    href={whatsappLink(
                      `¡Hola! Me interesa el producto "${product.name}". ¿Me ayudas a pedirlo?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pedir ${product.name} por WhatsApp`}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-800 hover:bg-secondary-500 hover:text-background-50 transition-colors cursor-pointer"
                  >
                    <i className="ri-whatsapp-line text-base"></i>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}