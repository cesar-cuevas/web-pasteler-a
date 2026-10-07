import { useState } from "react";
import { siteInfo, whatsappLink } from "@/mocks/site";

const celebrations = [
  "Cumpleaños",
  "Baby shower",
  "Boda / Aniversario",
  "Bautizo",
  "Evento corporativo",
  "Otro",
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const honeypot = String(data.get("website_alt") || "").trim();
    if (honeypot) {
      setStatus("success");
      return;
    }

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const celebration = String(data.get("celebration") || "").trim();
    const date = String(data.get("date") || "").trim();
    const message = String(data.get("message") || "").trim();

    setStatus("sending");
    setFormError("");

    const lines = [
      `¡Hola ${siteInfo.name}! Quiero cotizar un pedido.`,
      "",
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
    ];
    if (celebration) lines.push(`Tipo de celebración: ${celebration}`);
    if (date) lines.push(`Fecha de entrega deseada: ${date}`);
    if (message) {
      lines.push("", `Mensaje: ${message}`);
    }

    const url = whatsappLink(lines.join("\n"));

    try {
      const opened = window.open(url, "_blank", "noopener,noreferrer");
      if (!opened) {
        setStatus("error");
        setFormError(
          `No pudimos abrir WhatsApp. Escríbenos directamente al ${siteInfo.phone}.`
        );
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setFormError(
        `No pudimos abrir WhatsApp. Escríbenos directamente al ${siteInfo.phone}.`
      );
    }
  };

  return (
    <div className="bg-background-50 border border-background-200 rounded-lg p-6 md:p-8">
      <h2 className="font-heading text-2xl text-foreground-950">Cuéntanos tu idea</h2>
      <p className="mt-2 text-sm text-foreground-600 leading-relaxed">
        Completa el formulario y te responderemos lo antes posible para cotizar tu pedido.
      </p>

      <form id="contacto-cookies-space" data-readdy-form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-label font-semibold text-foreground-800 mb-1.5">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Tu nombre"
              className="w-full text-sm text-foreground-900 placeholder:text-foreground-400 bg-background-100 border border-background-300 rounded-md px-4 py-3 outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-label font-semibold text-foreground-800 mb-1.5">
              Teléfono
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="(809) 000-0000"
              className="w-full text-sm text-foreground-900 placeholder:text-foreground-400 bg-background-100 border border-background-300 rounded-md px-4 py-3 outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
            />
          </div>
        </div>

        <div>
          <label htmlFor="celebration" className="block text-sm font-label font-semibold text-foreground-800 mb-1.5">
            Tipo de celebración
          </label>
          <select
            id="celebration"
            name="celebration"
            defaultValue=""
            className="w-full text-sm text-foreground-900 bg-background-100 border border-background-300 rounded-md px-4 py-3 outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 cursor-pointer"
          >
            <option value="" disabled>
              Elige una opción
            </option>
            {celebrations.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-label font-semibold text-foreground-800 mb-1.5">
            Fecha de entrega deseada
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className="w-full text-sm text-foreground-900 bg-background-100 border border-background-300 rounded-md px-4 py-3 outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 cursor-pointer"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-label font-semibold text-foreground-800 mb-1.5">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={500}
            required
            placeholder="Cuéntanos qué postres quieres, la temática, colores y cualquier detalle especial (máx. 500 caracteres)."
            className="w-full text-sm text-foreground-900 placeholder:text-foreground-400 bg-background-100 border border-background-300 rounded-md px-4 py-3 outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 resize-none"
          ></textarea>
        </div>

        <input
          className="form-guard"
          type="text"
          name="website_alt"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          readOnly
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 disabled:opacity-60 text-background-50 text-sm md:text-base font-label font-semibold px-7 py-3.5 rounded-md transition-colors cursor-pointer whitespace-nowrap"
        >
          <i className="ri-whatsapp-line text-lg"></i>
          Enviar por WhatsApp
        </button>

        {status === "success" && (
          <p className="flex items-center gap-2 text-sm text-secondary-700 bg-secondary-50 border border-secondary-200 rounded-md px-4 py-3">
            <i className="ri-checkbox-circle-fill"></i>
            ¡Listo! Abrimos WhatsApp con tu mensaje. Solo dale enviar para que te atendamos.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm text-accent-700 bg-accent-50 border border-accent-200 rounded-md px-4 py-3">
            <i className="ri-error-warning-fill"></i>
            {formError}
          </p>
        )}
      </form>
    </div>
  );
}