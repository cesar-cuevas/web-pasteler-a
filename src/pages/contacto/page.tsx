import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import ContactForm from "./components/ContactForm";
import { siteInfo, whatsappLink } from "@/mocks/site";

const contactChannels = [
  {
    icon: "ri-whatsapp-line",
    title: "WhatsApp",
    value: siteInfo.phone,
    href: whatsappLink(`¡Hola ${siteInfo.name}! Quiero hacer un pedido.`),
    external: true,
  },
  {
    icon: "ri-instagram-line",
    title: "Instagram",
    value: `@${siteInfo.instagram}`,
    href: siteInfo.instagramUrl,
    external: true,
  },
];

export default function Contacto() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <section className="relative w-full pt-28 pb-14 md:pt-36 md:pb-20">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Warm%20bakery%20storefront%20counter%20with%20elegant%20decorated%20cakes%20and%20cookies%20displayed%2C%20soft%20cream%20and%20blush%20pink%20tones%2C%20welcoming%20ambiance%2C%20editorial%20food%20photography%2C%20warm%20lighting%2C%20high%20detail&width=1920&height=700&seq=csp-contact-hero&orientation=landscape"
              alt="Mostrador de Cookies Space Pastelería"
              title="Contacto - Cookies Space Pastelería"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/65 via-foreground-950/50 to-foreground-950/65"></div>
          </div>
          <div className="relative z-10 w-full px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-script text-accent-300 text-2xl md:text-3xl">
                Hablemos
              </span>
              <h1 className="mt-2 font-heading text-background-50 text-4xl md:text-5xl">
                Contacto
              </h1>
              <p className="mt-4 text-background-100 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                Escríbenos por WhatsApp, Instagram o déjanos tu mensaje en el formulario.
                Estamos listos para endulzar tu celebración.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-4 md:px-6 py-14 md:py-20 bg-background-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <span className="font-script text-accent-500 text-2xl md:text-3xl">
                Canales directos
              </span>
              <h2 className="mt-2 font-heading text-3xl md:text-4xl text-foreground-950">
                Ponte en contacto
              </h2>
              <p className="mt-4 text-foreground-600 text-sm md:text-base leading-relaxed">
                La forma más rápida de pedir es por WhatsApp. También puedes visitarnos en redes sociales.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.title}
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="group bg-background-100 border border-background-200 rounded-lg p-5 hover:border-primary-300 transition-colors cursor-pointer"
                  >
                    <span className="w-11 h-11 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center">
                      <i className={`${channel.icon} text-xl`}></i>
                    </span>
                    <h3 className="mt-3.5 font-heading text-base text-foreground-950">
                      {channel.title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground-600">{channel.value}</p>
                  </a>
                ))}
              </div>

              <div className="mt-8 rounded-lg overflow-hidden border border-background-200">
                <iframe
                  title="Ubicación de Cookies Space Pastelería"
                  src="https://www.google.com/maps?q=Santo%20Domingo%2C%20Republica%20Dominicana&output=embed"
                  className="w-full h-64 border-0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}