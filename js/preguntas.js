/**
 * preguntas.js
 * Base de datos de preguntas sobre pensamiento computacional.
 * Cada pregunta es un objeto Pregunta (definido en Pregunta.js).
 */
const PREGUNTAS = [
  new Pregunta(
    "¿Qué es un algoritmo?",
    [
      "Un tipo de computadora muy rápida",
      "Una serie de pasos ordenados para resolver un problema",
      "Un lenguaje de programación",
      "Una aplicación de celular"
    ],
    1,
    " Algoritmos"
  ),
  new Pregunta(
    "¿Cuál de estas opciones es una SECUENCIA correcta para lavarse los dientes?",
    [
      "Enjuagar → Cepillar → Poner pasta",
      "Poner pasta → Enjuagar → Cepillar",
      "Poner pasta → Cepillar → Enjuagar",
      "Cepillar → Poner pasta → Enjuagar"
    ],
    2,
    " Secuencias"
  ),
  new Pregunta(
    "En programación, ¿qué hace un BUCLE (loop)?",
    [
      "Detiene el programa para siempre",
      "Repite una acción varias veces",
      "Guarda información en la memoria",
      "Muestra mensajes de error"
    ],
    1,
    " Bucles"
  ),
  new Pregunta(
    "¿Qué es una CONDICIÓN en pensamiento computacional?",
    [
      "El nombre de una variable",
      "Un paso que siempre se ejecuta",
      "Una pregunta que tiene respuesta SÍ o NO y cambia lo que hace el programa",
      "El resultado final del algoritmo"
    ],
    2,
    " Condicionales"
  ),
  new Pregunta(
    "¿Qué significa DEPURAR (debug) un programa?",
    [
      "Borrar el programa completo",
      "Encontrar y corregir errores en el código",
      "Hacer el programa más lento",
      "Agregar más preguntas al quiz"
    ],
    1,
    " Depuración"
  ),
  new Pregunta(
    "Una VARIABLE en programación es como...",
    [
      "Una caja con nombre donde guardas información",
      "Un error en el código",
      "Un tipo de bucle especial",
      "El resultado de sumar dos números"
    ],
    0,
    " Variables"
  ),
  new Pregunta(
    "¿Qué es la DESCOMPOSICIÓN en pensamiento computacional?",
    [
      "Cuando un programa falla y se rompe",
      "Dividir un problema grande en partes más pequeñas y manejables",
      "Eliminar pasos innecesarios del algoritmo",
      "Repetir una instrucción muchas veces"
    ],
    1,
    " Descomposición"
  ),
  new Pregunta(
    "¿Cuál es la función de una FUNCIÓN en programación?",
    [
      "Hacer el código más difícil de leer",
      "Agrupar instrucciones que se pueden reutilizar con un solo nombre",
      "Detener la ejecución del programa",
      "Crear bucles infinitos"
    ],
    1,
    " Funciones"
  ),
];