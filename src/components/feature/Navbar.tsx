import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/combos", label: "Combos" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-background-50/95 backdrop-blur-md border-b border-background-200"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <span className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-accent-100 border border-accent-200 flex items-center justify-center">
              <i className="ri-cake-3-line text-accent-600 text-xl"></i>
            </span>
            <span className="leading-none">
              <span className="font-script text-primary-700 text-xl md:text-2xl block">
                Cookies Space
              </span>
              <span className="block text-[10px] md:text-xs tracking-[0.3em] text-accent-600 font-label font-semibold">
                PASTELERÍA
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active =
                link.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-label font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? "text-primary-700"
                      : "text-foreground-700 hover:text-primary-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contacto"
              className="flex items-center gap-2 text-sm font-label font-semibold text-foreground-700 hover:text-primary-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-chat-smile-2-line text-base"></i>
              Contáctanos
            </Link>
          </div>

          <button
            type="button"
            aria-label="Menú"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-md text-foreground-900 cursor-pointer"
          >
            <i className={`${menuOpen ? "ri-close-line" : "ri-menu-line"} text-2xl`}></i>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background-50 border-t border-background-200 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active =
                link.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-3 rounded-md text-sm font-label font-semibold transition-colors cursor-pointer ${
                    active
                      ? "bg-primary-100 text-primary-800"
                      : "text-foreground-700 hover:bg-background-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}