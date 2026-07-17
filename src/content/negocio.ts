export const negocio = {
  nombre: "El Porvenir",
  tipo: "Bodegón renovado",
  ubicacion: {
    direccion: "San Martín 102",
    esquina: "Julio Balmaceda",
    localidad: "La Consulta",
    departamento: "San Carlos",
    provincia: "Mendoza",
    cp: "M5567",
    coordenadas: { lat: -33.7333, lng: -69.1167 },
  },
  contacto: {
    telefono: "2622 56-3441",
    telefonoLink: "+5492622563441",
    email: "",
    instagram: "@elporvemza",
    instagramUrl: "https://instagram.com/elporvemza",
    facebook: "elporvenirmza",
    facebookUrl: "https://facebook.com/elporvenirmza",
  },
  horarios: [
    { dia: "Lunes", mediodia: false, cena: false, label: "Cerrado" },
    { dia: "Martes", mediodia: "12:00 a 15:30", cena: false, label: "12:00 a 15:30" },
    { dia: "Miércoles", mediodia: "12:00 a 15:30", cena: "20:00 a 00:00", label: "12:00 a 15:30 / 20:00 a 00:00" },
    { dia: "Jueves", mediodia: "12:00 a 15:30", cena: "20:00 a 00:00", label: "12:00 a 15:30 / 20:00 a 00:00" },
    { dia: "Viernes", mediodia: "12:00 a 15:30", cena: "20:00 a 00:00", label: "12:00 a 15:30 / 20:00 a 00:00" },
    { dia: "Sábado", mediodia: "12:00 a 15:30", cena: "20:00 a 00:00", label: "12:00 a 15:30 / 20:00 a 00:00" },
    { dia: "Domingo", mediodia: "12:00 a 15:30", cena: false, label: "12:00 a 15:30" },
  ],
  descripcion:
    "Bodegón renovado en el corazón de La Consulta, en una esquina frente a la plaza central. Cocina que pone en valor productos de estación y productores locales — cocina sincera, platos abundantes. Carta con platitos vermuteros para picoteo. Espacio interior bien ambientado + área exterior con vista a la plaza. Buena selección de vinos y cervezas. Servicio de rotisería para llevar (takeout). Nivel de precios intermedio.",
  platosDestacados: [
    "Empanadas de carne y de camarones",
    "Carne al vino",
    "Mortadela casera a la plancha",
    "Cremoso de coliflor, romesco y palta frita",
    "Sorrentinos de zapallo y pera",
    "Paila de langostinos, huevo y papas",
    "Mousse de chocolate para compartir",
    "Flan con dulce de leche",
  ],
  reputacion: {
    puntuacion: 4.5,
    maximo: 5,
    reseñas: [
      { fuente: "Sluurpy", cantidad: 604 },
      { fuente: "TodoResto", cantidad: 786 },
    ],
    percepcion:
      "Ambiente cálido y familiar, servicio atento, buena relación precio-calidad, comida casera como en casa de la abuela",
  },
  redes: {
    instagram: {
      handle: "@elporvemza",
      url: "https://instagram.com/elporvemza",
    },
    facebook: {
      handle: "El Porvenir Mza",
      url: "https://facebook.com/elporvenirmza",
    },
  },
  mapaEmbedUrl: "https://maps.google.com/maps?q=San+Mart%C3%ADn+102+La+Consulta+Mendoza&output=embed",
  mapaLink: "https://maps.google.com/maps?q=San+Mart%C3%ADn+102,+La+Consulta,+San+Carlos,+Mendoza",
};
