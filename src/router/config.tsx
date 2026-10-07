import type { RouteObject } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/home/page";
import Catalogo from "@/pages/catalogo/page";
import Combos from "@/pages/combos/page";
import Nosotros from "@/pages/nosotros/page";
import Contacto from "@/pages/contacto/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalogo",
    element: <Catalogo />,
  },
  {
    path: "/combos",
    element: <Combos />,
  },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;