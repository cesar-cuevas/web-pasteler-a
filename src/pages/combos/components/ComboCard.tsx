import { whatsappLink } from "@/mocks/site";

type Combo = {
  id: string;
  name: string;
  people: string;
  highlight: boolean;
  items: string[];
  image: string;
};

export default function ComboCard({ combo }: { combo: Combo }) {
  return (
    <article
      className={`group rounded-lg overflow-hidden border flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        combo.highlight
          ? "border-accent-400 bg-accent-50 hover:border-accent-500"
          : "border-background-200 bg-background-100 hover:border-primary-300"
      }`}
    >
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={combo.image}
          alt={combo.name}
          title={`${combo.name} - Cookies Space Pastelería`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        {combo.highlight && (
          <span className="absolute top-3 right-3 bg-accent-500 text-background-50 text-xs font-label font-semibold px-3 py-1.5 rounded-full animate-float">
            Más pedido
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-elegant text-3xl text-foreground-950 group-hover:text-accent-600 transition-colors">
          {combo.name}
        </h3>
        <p className="mt-1 text-xs font-label font-semibold text-secondary-700 uppercase tracking-wide">
          {combo.people}
        </p>
        <ul className="mt-5 space-y-2.5 flex-1">
          {combo.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-foreground-700">
              <i className="ri-checkbox-circle-fill text-accent-500 mt-0.5"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-5 border-t border-background-300/60">
          <div className="flex items-end justify-between gap-3 mb-4">
            <span className="font-elegant text-xl text-accent-600">
              Cotiza por WhatsApp
            </span>
          </div>
          <a
            href={whatsappLink(
              `¡Hola! Me interesa el "${combo.name}". ¿Me das más detalles?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 text-sm font-label font-semibold px-5 py-3 rounded-md transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-whatsapp-line"></i>
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}