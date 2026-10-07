import { testimonials } from "@/mocks/combos";

export default function Testimonials() {
  return (
    <section className="w-full px-4 md:px-6 py-16 md:py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-script text-accent-500 text-2xl md:text-3xl">
            Clientes felices
          </span>
          <h2 className="mt-2 font-heading text-3xl md:text-4xl text-foreground-950">
            Lo que dicen de nosotros
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className="bg-background-50 border border-secondary-200 rounded-lg p-6 flex flex-col h-full"
            >
              <div className="flex items-center gap-1 text-accent-500 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <i key={i} className="ri-star-fill text-sm"></i>
                ))}
              </div>
              <blockquote className="text-foreground-700 text-sm leading-relaxed flex-1">
                &ldquo;{item.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-secondary-200 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center font-heading text-base">
                  {item.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-label font-semibold text-foreground-950 text-sm">
                    {item.name}
                  </span>
                  <span className="block text-xs text-foreground-500">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}