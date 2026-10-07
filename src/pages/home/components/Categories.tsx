import { Link } from "react-router-dom";

const items = [
  {
    title: "Pasteles temáticos",
    description: "Diseños personalizados para cada celebración.",
    icon: "ri-cake-3-line",
    to: "/catalogo",
    color: "accent",
    image:
      "https://readdy.ai/api/search-image?query=Three%20tier%20white%20celebration%20cake%20with%20delicate%20buttercream%20piping%20and%20fresh%20pink%20flowers%20on%20a%20ceramic%20stand%20against%20a%20warm%20beige%20textured%20wall%2C%20elegant%2045%20degree%20product%20photography%2C%20soft%20natural%20light%2C%20high%20detail&width=600&height=700&seq=csp-cat-cake&orientation=portrait&nocache=true",
  },
  {
    title: "Cupcakes",
    description: "Esponjosos, coloridos y personalizables.",
    icon: "ri-cup-line",
    to: "/catalogo",
    color: "primary",
    image:
      "https://readdy.ai/api/search-image?query=Colorful%20cupcakes%20with%20tall%20pastel%20buttercream%20swirls%20arranged%20on%20a%20marble%20counter%20with%20sprinkles%20scattered%20around%2C%20bright%20airy%20kitchen%20backdrop%2C%20overhead%20shot%2C%20high%20detail&width=600&height=700&seq=csp-cat-cupcake&orientation=portrait&nocache=true",
  },
  {
    title: "Galletas decoradas",
    description: "Arte comestible hecho a mano.",
    icon: "ri-heart-3-line",
    to: "/catalogo",
    color: "secondary",
    image:
      "https://readdy.ai/api/search-image?query=Decorated%20sugar%20cookies%20with%20intricate%20royal%20icing%20patterns%20fanned%20on%20a%20rustic%20wooden%20board%20with%20a%20linen%20cloth%2C%20warm%20cozy%20background%2C%20close%20up%20natural%20light%20photography%2C%20high%20detail&width=600&height=700&seq=csp-cat-cookie&orientation=portrait&nocache=true",
  },
  {
    title: "Cakepops & postres",
    description: "Bocados dulces para tu mesa.",
    icon: "ri-goblet-line",
    to: "/catalogo",
    color: "accent",
    image:
      "https://readdy.ai/api/search-image?query=Cake%20pops%20and%20layered%20dessert%20cups%20styled%20together%20on%20a%20dark%20slate%20tray%20with%20fresh%20berries%2C%20moody%20elegant%20styling%2C%20close%20up%2C%20dramatic%20light%2C%20high%20detail&width=600&height=700&seq=csp-cat-cakepop&orientation=portrait&nocache=true",
  },
];

const colorMap: Record<string, string> = {
  accent: "bg-accent-100 text-accent-700",
  primary: "bg-primary-100 text-primary-700",
  secondary: "bg-secondary-100 text-secondary-800",
};

export default function Categories() {
  return (
    <section className="w-full px-4 md:px-6 py-16 md:py-20 bg-background-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-script text-accent-500 text-2xl md:text-3xl">
            Lo que horneamos
          </span>
          <h2 className="mt-2 font-heading text-3xl md:text-4xl text-foreground-950">
            Nuestras especialidades
          </h2>
          <p className="mt-4 text-foreground-600 text-sm md:text-base leading-relaxed">
            Cada creación se hace a mano con ingredientes de calidad y muchísimo cariño.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {items.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group bg-background-100 border border-background-200 rounded-lg overflow-hidden hover:border-primary-300 transition-colors cursor-pointer"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  title={`${item.title} - Cookies Space Pastelería`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute top-3 left-3 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-sm ${colorMap[item.color]}`}
                >
                  <i className={`${item.icon} text-xl`}></i>
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg text-foreground-950 group-hover:text-primary-700 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-foreground-600 leading-relaxed">
                  {item.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-label font-semibold text-primary-600">
                  Ver opciones
                  <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}