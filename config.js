/* ════════════════════════════════════════════════════════════
   CONFIGURACIÓN DEL EVENTO · Edita SOLO este archivo por cliente
   ════════════════════════════════════════════════════════════ */
const CONFIG = {

  textos: {
    tituloPagina:       "Andrea & Orlando | Encuentra tu Mesa",  // pestaña del navegador
    titulo:             "Andrea & Orlando",
    instrucciones:      "Ingresa tu nombre y apellido para conocer tu mesa:",
    placeholder:        "Ej. Andrea Loyola",
    botonBuscar:        "Buscar Mesa",
    botonRegresar:      "Buscar nuevo invitado",
    bienvenida:         "¡Qué alegría contar con tu presencia!",
    bienvenidaAnfitriona: "¡Hoy es tu noche!",
    alertaVacio:        "Por favor escribe un nombre",
    errorNombre:        "No encontramos ese nombre exacto en la lista 😢",
    errorHint:          "Por favor, verifica la ortografía.",

   // Plantillas: {nombre} y {mesa} se reemplazan solos
    mensajeMesa:       '¡Hola {nombre}!<br>Tu lugar es la: <strong>Mesa {mesa}</strong>',
    mensajeAnfitriona: '¡Hola {nombre}! <br> ¡Felicidades por tu boda! <br> Tu lugar es la: <strong>Mesa de {mesa}</strong><br><span class="extra-anfitriona">{extraAnfitriona}</span>',
    mensajeAnfitrionaNumero: '¡Hola {nombre}! <br> ¡Felicidades por tu boda! <br> Tu lugar es la: <strong>Mesa {mesa}</strong><br><span class="extra-anfitriona">{extraAnfitriona}</span>',
    mensajeNinos:      '¡Hola {nombre}!<br>Tu lugar es la: <strong>Mesa de {mesa}</strong><br><br><span class="aviso-ninos">{avisoNinos}</span>',
    extraAnfitriona:   '✨ ¡Disfruta al máximo tu fiesta! ✨',
    avisoNinos:        'Pregunta por el servicio de niñeras',
  },

  especiales: {
    anfitriones: ["Andrea Loyola","Orlando Arias"],        // festejado(a): quinceañera, novios, graduado…
    mesasNinos: ["ninos", "niños"],     // mesas con aviso especial y sin croquis
  },

  datos: {
    urlInvitados: "https://api.jsonbin.io/v3/b/6ad7c0f4ffd5d160537d1e12/latest",
  },

  tema: {
    colores: {
      primario:         "#5C6B4F",                    // título, botón, focus
      acento:           "#D4A017",                    // número de mesa y destacados
      instrucciones:    "#C8622D",
      fondo:            "#F5F5F0",
      tarjeta:          "rgba(255, 255, 255, 0.85)",
      bordeTarjeta:     "rgba(92, 107, 79, 0.15)",
      texto:            "#2C3324",
      borde:            "#E0E0D5",
      inputFondo:       "#FFFFFF",
      separador:        "#EBEBE3",
      sugerenciasHover: "rgba(92, 107, 79, 0.15)",
      error:            "#C94C6E",
      errorHint:        "#C8622D",
      aviso:            "#6B2D5B",
    },
    fuentes: {
      titulo: { nombre: "Cinzel",     pesos: "400;500" },
      texto:  { nombre: "Montserrat", pesos: "300;400;600" },
    },
    imagenes: {
      fondo:          "imagenes/fondo-app.jpg?v=1",
      croquis:        "imagenes/croquis-{mesa}.jpg",   // {mesa} = número de mesa
      croquisGeneral: "imagenes/croquis-general.jpg",
    },
  },
};