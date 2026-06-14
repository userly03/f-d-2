/**
 * Clase UI
 * Responsable de actualizar la pantalla según el estado del juego.
 * No contiene lógica del juego, solo renderiza lo que Juego le indica.
 */
class UI {
  constructor() {
    // Referencias a los elementos del HTML
    this.pantallaBienvenida = document.getElementById("pantalla-bienvenida");
    this.pantallaJuego     = document.getElementById("pantalla-juego");
    this.pantallaFin       = document.getElementById("pantalla-fin");

    this.textoPregunta  = document.getElementById("texto-pregunta");
    this.contenedorOpciones = document.getElementById("opciones");
    this.contadorPuntaje = document.getElementById("puntaje");
    this.contadorVidas   = document.getElementById("vidas");
    this.barraProgreso   = document.getElementById("barra-progreso");
    this.textoCategoria  = document.getElementById("categoria");
    this.numeroPregunta  = document.getElementById("num-pregunta");

    this.feedbackBox  = document.getElementById("feedback");
    this.textoFeedback = document.getElementById("texto-feedback");

    this.puntajeFinal  = document.getElementById("puntaje-final");
    this.porcentajeFinal = document.getElementById("porcentaje-final");
    this.mensajeFinal  = document.getElementById("mensaje-final");
    this.medallaFinal  = document.getElementById("medalla-final");
  }

  /**
   * Muestra solo la pantalla indicada y oculta las demás.
   * @param {"bienvenida"|"juego"|"fin"} nombre
   */
  mostrarPantalla(nombre) {
    this.pantallaBienvenida.classList.add("oculto");
    this.pantallaJuego.classList.add("oculto");
    this.pantallaFin.classList.add("oculto");

    if (nombre === "bienvenida") this.pantallaBienvenida.classList.remove("oculto");
    if (nombre === "juego")      this.pantallaJuego.classList.remove("oculto");
    if (nombre === "fin")        this.pantallaFin.classList.remove("oculto");
  }

  /**
   * Renderiza la pregunta actual y sus opciones en pantalla.
   * @param {Pregunta} pregunta
   * @param {number} numero - número de pregunta (1, 2, 3...)
   * @param {number} total  - total de preguntas
   */
  mostrarPregunta(pregunta, numero, total) {
    this.textoPregunta.textContent = pregunta.texto;
    this.textoCategoria.textContent = pregunta.categoria;
    this.numeroPregunta.textContent = `Pregunta ${numero} de ${total}`;

    // Actualizar barra de progreso
    const porcentaje = ((numero - 1) / total) * 100;
    this.barraProgreso.style.width = porcentaje + "%";

    // Limpiar opciones anteriores y crear nuevas
    this.contenedorOpciones.innerHTML = "";
    pregunta.opciones.forEach((opcion, indice) => {
      const boton = document.createElement("button");
      boton.textContent = opcion;
      boton.className = "opcion";
      boton.dataset.indice = indice;
      this.contenedorOpciones.appendChild(boton);
    });

    this.ocultarFeedback();
  }

  /**
   * Actualiza el puntaje y las vidas en el HUD.
   * @param {number} puntaje
   * @param {number} vidas
   */
  actualizarHUD(puntaje, vidas) {
    this.contadorPuntaje.textContent = puntaje;

    // Construye los corazones según las vidas restantes
    const corazones = ["❤️", "❤️", "❤️"]
      .map((c, i) => i < vidas ? c : "🖤")
      .join(" ");
    this.contadorVidas.textContent = corazones;
  }

  /**
   * Muestra el mensaje de feedback tras responder.
   * @param {boolean} correcto
   * @param {string} mensaje
   */
  mostrarFeedback(correcto, mensaje) {
    this.feedbackBox.className = correcto ? "feedback correcto" : "feedback incorrecto";
    this.textoFeedback.textContent = mensaje;
    this.feedbackBox.classList.remove("oculto");
  }

  ocultarFeedback() {
    this.feedbackBox.classList.add("oculto");
  }

  /**
   * Bloquea los botones de opciones (para evitar doble clic tras responder).
   */
  bloquearOpciones() {
    document.querySelectorAll(".opcion").forEach(btn => btn.disabled = true);
  }

  /**
   * Muestra la pantalla final con el resumen del jugador.
   * @param {number} puntaje
   * @param {number} porcentaje
   * @param {"ganado"|"perdido"} estado
   */
  mostrarResultados(puntaje, porcentaje, estado) {
    this.puntajeFinal.textContent = puntaje;
    this.porcentajeFinal.textContent = porcentaje + "%";

    // Elige medalla y mensaje según rendimiento
    if (estado === "perdido") {
      this.medallaFinal.textContent = "💔";
      this.mensajeFinal.textContent = "¡Sin vidas! Pero cada intento te hace mejor.";
    } else if (porcentaje >= 80) {
      this.medallaFinal.textContent = "🏆";
      this.mensajeFinal.textContent = "¡Excelente! Dominas el pensamiento computacional.";
    } else if (porcentaje >= 50) {
      this.medallaFinal.textContent = "🥈";
      this.mensajeFinal.textContent = "¡Bien hecho! Sigue practicando para mejorar.";
    } else {
      this.medallaFinal.textContent = "🥉";
      this.mensajeFinal.textContent = "¡Buen intento! Repasa los temas e inténtalo de nuevo.";
    }

    this.mostrarPantalla("fin");
  }
}