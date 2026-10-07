export const siteInfo = {
  name: "Cookies Space",
  fullName: "Cookies Space Pastelería",
  tagline: "Detalles dulces hechos especialmente para tus momentos más especiales",
  phone: "(809) 408-8946",
  whatsapp: "18094088946",
  instagram: "cookiespace_rd",
  instagramUrl: "https://instagram.com/cookiespace_rd",
  city: "República Dominicana",
  email: "hola@cookiespace.do",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(message)}`;