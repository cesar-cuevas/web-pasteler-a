import { orderSteps } from "@/mocks/combos";
import { siteInfo, whatsappLink } from "@/mocks/site";

export default function OrderProcess() {
  return (
    <section className="w-full px-4 md:px-6 py-16 md:py-20 bg-primary-900 text-background-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-script text-accent-300 text-2xl md:text-3xl">
            Así de fácil
          </span>
          <h2 className="mt-2 font-heading text-3xl md:text-4xl">
            ¿Cómo realizar tu pedido?
          </h2>
          <p className="mt-4 text-background-200 text-sm md:text-base leading-relaxed">
            En tres pasos sencillos tienes tu pedido listo. Trabajamos cada encargo con dedicación.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {orderSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <div className="bg-background-50/5 border border-background-50/15 rounded-lg p-6 md:p-7 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0">
                    <i className={`${step.icon} text-background-50 text-xl`}></i>
                  </span>
                  <span className="font-heading text-4xl text-background-50/25">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-background-50">
                  {step.title}
                </h3>
                <p className="mt-3 text-background-200 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < orderSteps.length - 1 && (
                <span className="hidden md:flex absolute top-1/2 -right-4 w-8 h-8 items-center justify-center text-accent-300">
                  <i className="ri-arrow-right-line text-2xl"></i>
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-background-200 text-sm text-center">
            Pedidos para el mismo día tienen un <strong className="text-accent-300">15% adicional</strong> del costo.
          </p>
          <a
            href={whatsappLink(`¡Hola ${siteInfo.name}! Quiero agendar mi pedido.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background-50 text-primary-800 hover:bg-accent-100 text-sm md:text-base font-label font-semibold px-7 py-3.5 rounded-md transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-whatsapp-line text-lg"></i>
            Agendar mi pedido ahora
          </a>
        </div>
      </div>
    </section>
  );
}