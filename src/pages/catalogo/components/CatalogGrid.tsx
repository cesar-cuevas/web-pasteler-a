import { products } from "@/mocks/products";
import { whatsappLink } from "@/mocks/site";

type Props = {
  activeCategory: string;
};

export default function CatalogGrid({ activeCategory }: Props) {
  const list =
    activeCategory === "todos"
      ? products
      : products.filter((product) => product.category === activeCategory);

  if (list.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-foreground-600 text-sm">
          Aún no tenemos productos en esta categoría. Escríbenos y lo creamos para ti.
        </p>
      </div>
    );
  }

  return (
    <div
      data-product-shop
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
    >
      {list.map((product) => (
        <article
          key={product.id}
          className="group bg-background-100 border border-background-200 rounded-lg overflow-hidden flex flex-col hover:border-primary-300 transition-colors"
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
                className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 text-xs font-label font-semibold px-4 py-2.5 rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-line"></i>
                Pedir
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}