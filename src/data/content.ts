import type { BirthdayContent } from "@/lib/types"; // Importa la interfaz que valida la estructura del contenido

export const birthdayContent: BirthdayContent = { // Exporta el objeto principal con toda la informacion de la carta
  theme: { palette: "nocturnoElegante" }, // Define la paleta cromatica base usada en fondos y acentos
  typography: { title: "DM Serif Display", body: "Architects Daughter" }, // Selecciona las tipografias para titulos y cuerpo
  effects: { // Agrupa los efectos visuales configurables
    confetti: true, // Activa el confeti clasico
    hearts: true, // Habilita los corazones flotantes
    heartColor: "#ff5f9e", // Color base para los corazones neon
    bokeh: true, // Muestra el efecto de luces bokeh en el fondo
    polaroidsFloat: true, // Hace flotar suavemente las fotos tipo polaroid
  },
  typewriter: { // Parametros del efecto maquina de escribir
    speedMs: 60, // Velocidad en milisegundos entre cada caracter
    startDelayMs: 1000, // Retraso antes de iniciar la animacion
    soundClicks: true, // Reproduce clics de maquina durante la escritura
    endChime: true, // Lanza sonido final al terminar
    liveLabel: "La carta se esta escribiendo", // Etiqueta accesible mientras escribe
    finishedLabel: "Carta terminada", // Etiqueta accesible al finalizar
  },
  timeline: { // Configuracion de la linea del tiempo de recuerdos
    variant: "scrapbook", // Variante visual usada para las tarjetas
    ariaLabel: "Linea del tiempo de recuerdos importantes", // Texto descriptivo para lectores de pantalla
    items: [ // Coleccion de momentos destacados
      { // Primer recuerdo destacado
        date: "22 de agosto de 2023", // Fecha del evento
        title: "El dia que nos conocimos", // Titulo del recuerdo
        text: "Ese dia fue mas divertido de lo que esperaba. Nunca pense que iba a conocer a alguien como tu, y mucho menos que te volverias una amiga tan especial.", // Texto del recuerdo
        image: { url: "/dia_c.jpg", alt: "Foto del dia que nos conocimos" }, // Imagen asociada al recuerdo
      },
      { // Segundo recuerdo destacado
        date: "29 de agosto de 2025", // Fecha del evento
        title: "Fuimos al onomastico", // Titulo del recuerdo
        text: "Nos fuimos a disfrutar la musica. Todo se puso muy random despues, jajaja, pero lo goce un monton. Gracias por estar ahi.", // Texto del recuerdo
        image: { url: "/onomastico.jpg", alt: "Foto del onomastico" }, // Imagen asociada al recuerdo
      },
      { // Tercer recuerdo destacado
        date: "21 de septiembre de 2025", // Fecha del evento
        title: "Un domingo normalito", // Titulo del recuerdo
        text: "No fue un plan epico, pero me encanto. Saliste del examen y nos pusimos a echar chisme un buen rato. Esos momentos tranquilos tambien valen oro.", // Texto del recuerdo
        image: { url: "/random.jpg", alt: "Foto casual" }, // Imagen asociada al recuerdo
      },
    ],
  },
  hero: { // Configuracion del encabezado principal
    title: "Feliz cumple, Kimberly", // Titular grande de la pagina
    emoji: "🎂", // Emoji decorativo mostrado junto al titulo
    emojiLabel: "Pastel de cumpleanos", // Descripcion accesible del emoji
    scrollCta: "Ver carta", // Texto del boton para desplazarse a la carta
    scrollAriaLabel: "Ir a la carta de cumpleanos", // Etiqueta accesible del boton de scroll
  },
  letter: { // Contenido de la carta principal
    heading: "Una carta para ti", // Encabezado del bloque de carta
    body:
      "Hoy celebramos que llegaste a este mundo y que tuve la suerte de coincidir contigo.\n\n" + // Primer parrafo de la carta
      "Te deseo un año lleno de cosas lindas: metas cumplidas, sorpresas buenas y dias tranquilos.\n\n" + // Segundo parrafo con deseos
      "Que la vida te siga regalando razones para sonreir, y que nunca te falte quien te acompanE en las locuras.\n\n" + // Tercer parrafo motivacional
      "Gracias por ser como eres y por dejarme ser parte de tu historia.\n\n" + // Cuarto parrafo de agradecimiento
      "Feliz cumpleanos, Kimberly! 🎉🎂\n\n" + // Mensaje de felicitacion final
      "Con carino,\nMateo", // Firma de cierre
    ariaLabel: "Carta de cumpleanos narrada como maquina de escribir", // Descripcion accesible del bloque
  },
  photos: { // Configuracion de las fotos decorativas laterales
    left: [ // Riel izquierdo de fotos
      { url: "/photos/1.jpg", alt: "Selfie divertida" }, // Primera foto izquierda
      { url: "/photos/2.jpg", alt: "Camino entre arboles" }, // Segunda foto izquierda
      { url: "/photos/3.jpg", alt: "Tazas de cafe" }, // Tercera foto izquierda
    ],
    right: [ // Riel derecho de fotos
      { url: "/photos/4.jpg", alt: "Risa espontanea" }, // Primera foto derecha
      { url: "/photos/5.jpg", alt: "Atardecer rosado" }, // Segunda foto derecha
      { url: "/photos/6.jpg", alt: "Manos brindando" }, // Tercera foto derecha
    ],
  },
  memories: { // Galeria opcional de recuerdos en mosaico
    heading: "Momentos favoritos", // Titulo de la seccion de memorias
    ariaLabel: "Galeria de recuerdos fotograficos", // Etiqueta accesible de la galeria
    photos: [ // Lista de imagenes para la galeria
      { url: "/photos/m1.jpg", alt: "Brindis" }, // Foto de brindis
      { url: "/photos/m2.jpg", alt: "Paseo" }, // Foto de paseo
      { url: "/photos/m3.jpg", alt: "Pastel" }, // Foto de pastel
      { url: "/photos/m4.jpg", alt: "Playa" }, // Foto de playa
      { url: "/photos/m5.jpg", alt: "Museo" }, // Foto de museo
      { url: "/photos/m6.jpg", alt: "Fiesta" }, // Foto de fiesta
    ],
  },
  cta: { // Textos para los botones de compartir
    share: "Compartir", // Etiqueta principal del boton compartir
    copyLabel: "Copiar enlace", // Etiqueta del boton secundario para copiar
    copiedFeedback: "Enlace copiado", // Mensaje mostrado tras copiar
    unavailable: "Compartir no disponible en este dispositivo", // Mensaje al no soportar compartir
  },
  footer: { note: "2025 Con carino para Kimberly" }, // Nota final mostrada en el pie de pagina
  audio: { // Configuracion del reproductor de audio opcional
    src: "/happy.mp3", // Ruta del archivo de audio
    playLabel: "Reproducir cancion", // Texto accesible para el boton de reproducir
    pauseLabel: "Pausar cancion", // Texto accesible para el boton de pausar
    description: "Cancion favorita de Estefania para el cumpleanos", // Descripcion del audio
  },
  sections: { // Interruptores por seccion para activar o ocultar bloques
    background: true, // Muestra el fondo animado
    effects: false, // Activa particulas y corazones
    hero: true, // Renderiza el encabezado
    letter: true, // Muestra la carta principal
    photos: false, // Oculta los rieles de fotos
    timeline: false, // Oculta la linea del tiempo
    memories: false, // Oculta la galeria de memorias
    audio: true, // Oculta el reproductor de audio
    share: true, // Muestra los botones de compartir
    footer: true, // Muestra el pie de pagina
    loveMessage: true, // Activa el mensaje de amor neon
  },
  loveMessage: { // Configuracion del mensaje neon
    text: "TE AMO ", // Texto mostrado en el efecto neon
    color: "#ff5f9e", // Color glow del mensaje neon
  },
  accessibility: { reducedMotionRespect: true }, // Respeta la preferencia de movimiento reducido
};
