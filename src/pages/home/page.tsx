import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import Hero from "./components/Hero";
import MenuOptions from "./components/MenuOptions";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import OrderProcess from "./components/OrderProcess";
import CombosPreview from "./components/CombosPreview";
import Testimonials from "./components/Testimonials";
import ContactCTA from "./components/ContactCTA";

const badges = [
  "Pasteles temáticos",
  "Cupcakes personalizados",
  "Galletas decoradas",
  "Cakepops",
  "Mesas dulces",
  "Combos de cumpleaños",
  "Postres en vasito",
  "Baby showers",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <Hero />

        <div className="w-full bg-accent-500 overflow-hidden py-3.5">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
                {badges.map((badge) => (
                  <span
                    key={`${dup}-${badge}`}
                    className="flex items-center gap-3 px-6 text-background-50 font-label font-semibold text-sm whitespace-nowrap"
                  >
                    <i className="ri-heart-3-fill text-accent-200"></i>
                    {badge}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <MenuOptions />

        <Categories />
        <FeaturedProducts />
        <OrderProcess />
        <CombosPreview />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}