import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import ComboCard from "./components/ComboCard";
import { combos, orderSteps } from "@/mocks/combos";
import { siteInfo, whatsappLink } from "@/mocks/site";

const faqs = [
  {
    q: "¿Con cuánta anticipación debo pedir?",
    a: "Los pedidos se agendan con un mínimo de 2 días de anticipación. Para el mismo día aplica un 15% adicional del costo.",
  },
  {
    q: "¿Cómo aseguro mi fecha?",
    a: "Confirmas tu pedido con el 50% de adelanto o el pago total del costo para reservar la fecha.",
  },
  {
    q: "¿Cómo me llega el pedido?",
    a: "Puedes elegir entrega por Uber o recogida en nuestro punto. Coordinamos todo por WhatsApp.",
  },
  {
    q: "¿Puedo personalizar los combos?",
    a: "¡Claro! Sabores, colores y temáticas se adaptan a tu celebración. Solo cuéntanos qué tienes en mente.",
  },
];

export default function Combos() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <section className="relative w-full pt-28 pb-14 md:pt-36 md:pb-20">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Festive%20birthday%20dessert%20table%20with%20themed%20cake%20cupcakes%20dessert%20cups%20cookies%20and%20cake%20pops%20arranged%20on%20a%20wooden%20backdrop%20with%20balloons%2C%20soft%20cream%20and%20blush%20pink%20tones%2C%20celebration%20styling%2C%20warm%20lighting%2C%20editorial%20food%20photography&width=1920&height=700&seq=csp-combo-hero&orientation=landscape"
              alt="Mesa dulce de cumpleaños de Cookies Space"
              title="Combos de cumpleaños Cookies Space Pastelería"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/65 via-foreground-950/50 to-foreground-950/65"></div>
          </div>
          <div className="relative z-10 w-full px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-elegant text-accent-300 text-3xl md:text-4xl leading-none block">
                Celebra sin complicaciones
              </span>
              <h1 className="mt-2 font-heading text-background-50 text-4xl md:text-5xl">
                Combos de cumpleaños
              </h1>
              <p className="mt-4 text-background-100 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                Mesas dulces completas con pastel, cupcakes, shots, galletas y cakepops.
                Elige el combo ideal y personalízalo a tu gusto.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-4 md:px-6 py-14 md:py-20 bg-background-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {combos.map((combo) => (
              <ComboCard key={combo.id} combo={combo} />
            ))}
          </div>
        </section>

        <section className="w-full px-4 md:px-6 py-16 md:py-20 bg-primary-900 text-background-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-elegant text-accent-300 text-3xl md:text-4xl leading-none block">
                Reserva tu fecha
              </span>
              <h2 className="mt-2 font-heading text-3xl md:text-4xl">
                ¿Cómo agendar tu combo?
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {orderSteps.map((step) => (
                <div key={step.step} className="bg-background-50/5 border border-background-50/15 rounded-lg p-6 md:p-7 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0">
                      <i className={`${step.icon} text-background-50 text-xl`}></i>
                    </span>
                    <span className="font-heading text-4xl text-background-50/25">{step.step}</span>
                  </div>
                  <h3 className="font-heading text-xl text-background-50">{step.title}</h3>
                  <p className="mt-3 text-background-200 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center gap-4">
              <p className="text-background-200 text-sm text-center">
                Pedidos para el mismo día tienen un <strong className="text-accent-300">15% adicional</strong> del costo.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={whatsappLink(`¡Hola ${siteInfo.name}! Quiero reservar un combo de cumpleaños.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-background-50 text-primary-800 hover:bg-accent-100 text-sm md:text-base font-label font-semibold px-7 py-3.5 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-whatsapp-line text-lg"></i>
                  Reservar mi combo
                </a>
                <a
                  href={siteInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-background-50/10 border border-background-50/40 text-background-50 hover:bg-background-50/20 text-sm md:text-base font-label font-semibold px-7 py-3.5 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-instagram-line text-lg"></i>
                  Ver precios en Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-4 md:px-6 py-16 md:py-20 bg-background-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <span className="font-elegant text-accent-500 text-3xl md:text-4xl leading-none block">
                Dudas frecuentes
              </span>
              <h2 className="mt-2 font-heading text-3xl md:text-4xl text-foreground-950">
                Preguntas sobre los combos
              </h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-background-50 border border-background-200 rounded-lg p-6">
                  <h4 className="font-heading text-lg text-foreground-950">{faq.q}</h4>
                  <p className="mt-2 text-sm text-foreground-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}