import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { siteInfo, whatsappLink } from "@/mocks/site";

const values = [
  {
    icon: "ri-heart-3-line",
    title: "Hecho a mano",
    text: "Cada pieza se decora a mano con dedicación, sin moldes genéricos ni atajos.",
  },
  {
    icon: "ri-leaf-line",
    title: "Ingredientes de calidad",
    text: "Usamos materias primas frescas y de primera para un sabor que se nota.",
  },
  {
    icon: "ri-magic-line",
    title: "Personalización total",
    text: "Adaptamos colores, sabores y temáticas a la historia de tu celebración.",
  },
  {
    icon: "ri-time-line",
    title: "Compromiso y puntualidad",
    text: "Tu pedido llega fresco y a tiempo, listo para brillar en tu mesa.",
  },
];

const stats = [
  { value: "+500", label: "Celebraciones endulzadas" },
  { value: "100%", label: "Elaboración artesanal" },
  { value: "+40", label: "Diseños personalizados" },
  { value: "5.0", label: "Valoración de clientes" },
];

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <section className="relative w-full pt-28 pb-14 md:pt-36 md:pb-20">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Cozy%20artisan%20bakery%20workspace%20with%20hands%20decorating%20a%20pastel%20buttercream%20cake%2C%20piping%20bag%20and%20fresh%20ingredients%20on%20a%20wooden%20table%2C%20soft%20cream%20and%20blush%20pink%20tones%2C%20warm%20ambient%20light%2C%20editorial%20photography%2C%20high%20detail&width=1920&height=700&seq=csp-about-hero&orientation=landscape"
              alt="Manos decorando un pastel en el taller de Cookies Space"
              title="Nosotros - Cookies Space Pastelería"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/65 via-foreground-950/50 to-foreground-950/65"></div>
          </div>
          <div className="relative z-10 w-full px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-script text-accent-300 text-2xl md:text-3xl">
                Nuestra historia
              </span>
              <h1 className="mt-2 font-heading text-background-50 text-4xl md:text-5xl">
                Sobre Cookies Space
              </h1>
              <p className="mt-4 text-background-100 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                Un rinconcito dulce nacido del amor por lo artesanal, donde cada pastel
                cuenta la historia de una celebración.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-4 md:px-6 py-16 md:py-20 bg-background-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative w-full h-80 md:h-[520px] rounded-lg overflow-hidden border border-background-200">
              <img
                src="https://readdy.ai/api/search-image?query=Stylized%20cozy%20bakery%20counter%20with%20assorted%20pastel%20cakes%20and%20cookies%2C%20soft%20blush%20pink%20and%20cream%20tones%2C%20editorial%20food%20photography%2C%20warm%20ambient%20lighting%20with%20bokeh%2C%20artistic%20and%20inviting&width=900&height=1000&seq=csp-about-story&orientation=portrait&nocache=true"
                alt="Mostrador acogedor con pasteles y postres pastel de Cookies Space"
                title="Cookies Space Pastelería - Nuestra historia"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <span className="font-script text-accent-500 text-2xl md:text-3xl">
                Hechos con cariño
              </span>
              <h2 className="mt-2 font-heading text-3xl md:text-4xl text-foreground-950">
                Detalles que hacen la diferencia
              </h2>
              <div className="mt-5 space-y-4 text-foreground-600 text-sm md:text-base leading-relaxed">
                <p>
                  En <strong className="text-foreground-900">{siteInfo.fullName}</strong> creemos que los
                  mejores recuerdos se construyen con dulzura. Por eso horneamos todo de forma artesanal,
                  cuidando cada detalle para que tu celebración sea inolvidable.
                </p>
                <p>
                  Nos especializamos en pasteles temáticos, cupcakes personalizados, galletas decoradas,
                  cakepops y mesas dulces para cumpleaños, baby showers y eventos. Cada pedido es único,
                  porque cada ocasión lo es.
                </p>
                <p>
                  Trabajamos desde {siteInfo.city} y llevamos nuestros postres a donde estés.
                  Solo dinos qué imaginas y nos encargamos del resto.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink(`¡Hola ${siteInfo.name}! Quiero conocer más sobre sus productos.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 text-sm font-label font-semibold px-6 py-3.5 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-whatsapp-line text-lg"></i>
                  Escríbenos
                </a>
                <Link
                  to="/catalogo"
                  className="flex items-center justify-center gap-2 border border-primary-300 text-primary-700 hover:bg-primary-50 text-sm font-label font-semibold px-6 py-3.5 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                >
                  Ver catálogo
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-4 md:px-6 py-16 md:py-20 bg-background-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-script text-accent-500 text-2xl md:text-3xl">
                Lo que nos define
              </span>
              <h2 className="mt-2 font-heading text-3xl md:text-4xl text-foreground-950">
                Nuestros valores
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-background-50 border border-background-200 rounded-lg p-6">
                  <span className="w-12 h-12 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center">
                    <i className={`${value.icon} text-xl`}></i>
                  </span>
                  <h3 className="mt-4 font-heading text-lg text-foreground-950">{value.title}</h3>
                  <p className="mt-2 text-sm text-foreground-600 leading-relaxed">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full px-4 md:px-6 py-14 md:py-16 bg-secondary-50">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block font-heading text-3xl md:text-5xl text-primary-700">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm text-foreground-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}