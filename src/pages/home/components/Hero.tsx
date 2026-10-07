export default function Hero() {
  return (
    <section className="relative w-full min-h-[560px] md:min-h-[640px] flex items-center pt-24 pb-16">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Warm%20cozy%20artisan%20bakery%20scene%20with%20elegant%20decorated%20cakes%20cupcakes%20and%20cookies%20on%20a%20rustic%20wooden%20table%2C%20soft%20cream%20and%20blush%20pink%20tones%2C%20stylized%20editorial%20food%20photography%20with%20warm%20lighting%20and%20abundant%20bokeh%2C%20artistic%20and%20inviting&width=1920&height=1080&seq=csp-hero-01&orientation=landscape"
          alt="Mesa de postres artesanales de Cookies Space Pastelería"
          title="Cookies Space Pastelería - pasteles y postres personalizados"
          className="w-full h-full object-cover object-top animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/55 via-foreground-950/40 to-foreground-950/60"></div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[5]">
        <i
          className="ri-cup-line absolute top-[10%] left-[8%] text-3xl md:text-5xl text-accent-200/70 animate-float-drift"
          style={{ animationDelay: "0.4s" }}
        ></i>
        <i
          className="ri-heart-3-fill absolute top-[12%] right-[10%] text-2xl md:text-4xl text-background-50/50 animate-float-drift"
          style={{ animationDelay: "1.4s" }}
        ></i>
        <i
          className="ri-sparkling-2-line absolute bottom-[24%] left-[10%] text-xl md:text-3xl text-accent-300/70 animate-float-drift"
          style={{ animationDelay: "2.6s" }}
        ></i>
        <i
          className="ri-star-fill absolute bottom-[14%] right-[14%] text-xl md:text-3xl text-background-50/40 animate-float-drift"
          style={{ animationDelay: "3.2s" }}
        ></i>
        <i
          className="ri-cake-3-line absolute top-[8%] right-[30%] hidden sm:block text-3xl md:text-4xl text-background-50/35 animate-float-drift"
          style={{ animationDelay: "1.9s" }}
        ></i>
        <i
          className="ri-sparkling-2-line absolute bottom-[42%] right-[8%] text-lg md:text-2xl text-accent-200/60 animate-float-drift"
          style={{ animationDelay: "0.8s" }}
        ></i>
        <i
          className="ri-heart-3-fill absolute bottom-[46%] left-[7%] hidden sm:block text-xl md:text-2xl text-accent-200/60 animate-float-drift"
          style={{ animationDelay: "3.8s" }}
        ></i>
      </div>

      <div className="relative z-10 w-full px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 bg-background-50/15 border border-background-50/30 text-background-50 text-xs md:text-sm font-label font-semibold px-4 py-2 rounded-full backdrop-blur-sm">
            <i className="ri-heart-3-fill text-accent-300"></i>
            Detalles dulces hechos a mano
          </span>

          <h1 className="mt-6 font-heading text-background-50 text-4xl md:text-6xl leading-tight">
            Endulzamos tus
            <span className="font-script text-accent-300 block mt-1 md:mt-2 text-5xl md:text-7xl">
              momentos especiales
            </span>
          </h1>

          <p className="mt-6 text-background-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Pasteles temáticos, cupcakes, galletas decoradas y cakepops
            personalizados para cumpleaños, baby showers y cada celebración que merezca un detalle dulce.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-background-100 text-xs md:text-sm font-label">
            <span className="flex items-center gap-2">
              <i className="ri-star-fill text-accent-300"></i> Hecho 100% artesanal
            </span>
            <span className="flex items-center gap-2">
              <i className="ri-time-line text-accent-300"></i> Pedidos con 2 días de anticipación
            </span>
            <span className="flex items-center gap-2">
              <i className="ri-truck-line text-accent-300"></i> Entrega por Uber o recogida
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}