/**
 * main.js
 * Punto de entrada de la aplicación.
 * Conecta los objetos Juego y UI, y maneja los eventos del usuario.
 */

// ─── Variables globales del módulo ───────────────────────────────────────────
let juego; // instancia de Juego
let ui;    // instancia de UI

// ─── Inicialización cuando el HTML está listo ─────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  ui = new UI();

  // Botón de la pantalla de bienvenida
  document.getElementById("btn-iniciar").addEventListener("click", iniciarJuego);

  // Botón "Siguiente" tras responder
  document.getElementById("btn-siguiente").addEventListener("click", siguientePregunta);

  // Botón "Jugar de nuevo" en la pantalla final
  document.getElementById("btn-reiniciar").addEventListener("click", iniciarJuego);

  // Delegación de eventos: captura clics en cualquier opción de respuesta
  document.getElementById("opciones").addEventListener("click", (evento) => {
    const boton = evento.target.closest(".opcion");
    if (boton && !boton.disabled) {
      manejarRespuesta(Number(boton.dataset.indice));
    }
  });
});

// ─── Funciones principales ────────────────────────────────────────────────────

/**
 * Crea un nuevo juego y muestra la primera pregunta.
 */
function iniciarJuego() {
  juego = new Juego([...PREGUNTAS]); // copia el arreglo para no modificar el original
  juego.reiniciar();
  ui.mostrarPantalla("juego");
  ui.actualizarHUD(juego.puntaje, juego.vidas);
  mostrarPreguntaActual();
}

/**
 * Renderiza en pantalla la pregunta en la que está el jugador.
 */
function mostrarPreguntaActual() {
  const pregunta = juego.getPreguntaActual();
  const numero   = juego.indiceActual + 1;
  const total    = juego.preguntas.length;
  ui.mostrarPregunta(pregunta, numero, total);
  ui.actualizarHUD(juego.puntaje, juego.vidas);
  document.getElementById("btn-siguiente").classList.add("oculto");
}

/**
 * Recibe el índice de la opción elegida, la envía al juego y muestra feedback.
 * @param {number} indice - índice de la opción seleccionada
 */
function manejarRespuesta(indice) {
  ui.bloquearOpciones(); // evita que el usuario haga clic dos veces

  const resultado = juego.responder(indice);
  ui.actualizarHUD(juego.puntaje, juego.vidas);
  ui.mostrarFeedback(resultado.correcto, resultado.mensaje);

  // Resalta la opción elegida visualmente
  const botones = document.querySelectorAll(".opcion");
  botones[indice].classList.add(resultado.correcto ? "correcta" : "incorrecta");

  if (!juego.estaActivo()) {
    // El juego terminó: esperar un momento y mostrar resultados
    setTimeout(() => {
      ui.mostrarResultados(juego.puntaje, juego.getPorcentaje(), juego.estado);
    }, 1500);
  } else {
    // Mostrar botón para avanzar a la siguiente pregunta
    document.getElementById("btn-siguiente").classList.remove("oculto");
  }
}

/**
 * Avanza a la siguiente pregunta o termina el juego si ya no hay más.
 */
function siguientePregunta() {
  if (juego.estaActivo()) {
    mostrarPreguntaActual();
  } else {
    ui.mostrarResultados(juego.puntaje, juego.getPorcentaje(), juego.estado);
  }
}