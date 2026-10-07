# Cookies Space Pastelería — Sitio Web Oficial

## 1. Project Description
Sitio web oficial de **Cookies Space Pastelería**, una pastelería artesanal dominicana (República Dominicana) especializada en pasteles temáticos, cupcakes, galletas decoradas, cakepops y combos de cumpleaños.

- **Público objetivo:** personas que buscan postres personalizados para cumpleaños, eventos y celebraciones.
- **Propuesta de valor:** mostrar el catálogo de productos y combos, explicar el proceso de pedido y facilitar el contacto directo por WhatsApp/Instagram.
- **Objetivo principal del sitio:** que un visitante vea el catálogo y realice su pedido por WhatsApp.

## 2. Page Structure
- `/` — Inicio (hero, destacados, categorías, proceso de pedido, combos, testimonios, CTA)
- `/catalogo` — Catálogo de productos con filtros por categoría
- `/combos` — Combos de cumpleaños con detalle y proceso de reserva
- `/nosotros` — Sobre nosotros
- `/contacto` — Contacto (formulario, mapa, redes, WhatsApp)

## 3. Core Features
- [x] Navegación superior y pie de página compartidos
- [x] Página de inicio con secciones ricas y llamadas a la acción
- [x] Catálogo con filtros por categoría (pasteles, cupcakes, galletas, cakepops)
- [x] Página de combos de cumpleaños con detalle y proceso de reserva
- [x] Página "Sobre nosotros" con historia y valores
- [x] Página de contacto con formulario real, mapa y accesos directos a WhatsApp/Instagram
- [x] Botones de pedido que abren WhatsApp con mensaje predefinido
- [x] Dos entradas principales: Instagram (ver precios de las creaciones) y WhatsApp (ver el catálogo completo), visibles en el inicio y en Catálogo/Combos

## 4. Data Model Design
No se requiere base de datos en esta fase. Los productos, combos y testimonios se muestran con datos de demostración (archivos mock). Los pedidos se gestionan por WhatsApp.

**Precios:** la dueña maneja los precios reales (en sus fotos). Mientras no se confirmen, NO se muestran precios en el sitio; en su lugar se usa "Cotiza por WhatsApp". Cuando la dueña entregue los precios reales, se cargan en `src/mocks/products.ts` y `src/mocks/combos.ts` y se vuelven a mostrar en las tarjetas.

## 5. Backend / Third-party Integration Plan
- Database: no conectada — datos de demostración (mock) en esta fase
- Formulario de contacto: Form (Readdy) con envío real
- Shopify: no por ahora
- Stripe / pagos: no por ahora (pago y adelanto se acuerdan por WhatsApp)
- WhatsApp / Instagram: enlaces directos

## 6. Development Phase Plan

### Phase 1: Base visual + Inicio
- Goal: dejar lista la identidad visual (paleta, tipografías) y la página de inicio completa con navegación y pie de página.
- Deliverable: Navbar, Footer, sistema de diseño y Home con todas sus secciones.

### Phase 2: Catálogo
- Goal: mostrar el catálogo completo de productos con filtros por categoría.
- Deliverable: página `/catalogo` con grid de productos, filtros y tarjetas.

### Phase 3: Combos de cumpleaños
- Goal: presentar los combos de cumpleaños con contenido y proceso de reserva.
- Deliverable: página `/combos` con tarjetas de combos y proceso de reserva.

### Phase 4: Nosotros + Contacto
- Goal: contar la historia de la marca y habilitar el contacto real.
- Deliverable: página `/nosotros` y página `/contacto` con formulario operativo, mapa y redes.