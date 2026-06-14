/**
 * Clase Pregunta
 * Representa una pregunta del quiz con sus opciones y respuesta correcta.
 */
class Pregunta {
  constructor(texto, opciones, respuestaCorrecta, categoria) {
    this.texto = texto;                        // String: enunciado de la pregunta
    this.opciones = opciones;                  // Array de strings: posibles respuestas
    this.respuestaCorrecta = respuestaCorrecta; // Number: índice de la opción correcta
    this.categoria = categoria;                // String: tema (ej. "Secuencias")
  }

  /**
   * Verifica si el índice elegido por el jugador es correcto.
   * @param {number} indiceElegido
   * @returns {boolean}
   */
  esCorrecta(indiceElegido) {
    return indiceElegido === this.respuestaCorrecta;
  }

  /**
   * Devuelve el texto de la respuesta correcta.
   * @returns {string}
   */
  getRespuestaTexto() {
    return this.opciones[this.respuestaCorrecta];
  }
}