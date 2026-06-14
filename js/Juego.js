/**
 * Clase Juego
 * Controla el estado del quiz: puntaje, vidas, preguntas y niveles.
 */
class Juego {
  constructor(preguntas) {
    this.preguntas = preguntas;    // Array de objetos Pregunta
    this.puntaje = 0;              // Number: puntos acumulados
    this.vidas = 3;                // Number: intentos restantes
    this.indiceActual = 0;         // Number: pregunta en la que estamos
    this.respondidas = 0;          // Number: total de preguntas respondidas
    this.estado = "jugando";       // String: "jugando" | "ganado" | "perdido"
  }

  /**
   * Devuelve la pregunta actual.
   * @returns {Pregunta}
   */
  getPreguntaActual() {
    return this.preguntas[this.indiceActual];
  }

  /**
   * Procesa la respuesta del jugador.
   * @param {number} indiceRespuesta - índice de la opción elegida
   * @returns {object} resultado con {correcto, puntosSumados, mensaje}
   */
  responder(indiceRespuesta) {
    const pregunta = this.getPreguntaActual();
    const correcto = pregunta.esCorrecta(indiceRespuesta);
    let puntosSumados = 0;

    if (correcto) {
      puntosSumados = 10 + (this.vidas * 5); // Bonus por vidas restantes
      this.puntaje += puntosSumados;
    } else {
      this.vidas -= 1;
    }

    this.respondidas++;
    this.indiceActual++;
    this._actualizarEstado();

    return {
      correcto,
      puntosSumados,
      respuestaCorrecta: pregunta.getRespuestaTexto(),
      mensaje: correcto
        ? `¡Correcto! +${puntosSumados} puntos`
        : `Incorrecto. La respuesta era: "${pregunta.getRespuestaTexto()}"`,
    };
  }

  /**
   * Revisa si el juego terminó (sin vidas o sin preguntas).
   */
  _actualizarEstado() {
    if (this.vidas <= 0) {
      this.estado = "perdido";
    } else if (this.indiceActual >= this.preguntas.length) {
      this.estado = "ganado";
    }
  }

  /**
   * Calcula el porcentaje de aciertos.
   * @returns {number}
   */
  getPorcentaje() {
    const correctas = this.respondidas - (3 - this.vidas);
    return Math.round((correctas / this.preguntas.length) * 100);
  }

  /**
   * Reinicia el juego al estado inicial.
   */
  reiniciar() {
    this.puntaje = 0;
    this.vidas = 3;
    this.indiceActual = 0;
    this.respondidas = 0;
    this.estado = "jugando";
    // Mezcla las preguntas para que no salgan en el mismo orden
    this.preguntas = this.preguntas.sort(() => Math.random() - 0.5);
  }

  /**
   * Indica si aún hay preguntas pendientes y el juego sigue activo.
   * @returns {boolean}
   */
  estaActivo() {
    return this.estado === "jugando";
  }
}