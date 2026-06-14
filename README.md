# Quiz de Pensamiento Computacional

Proyecto final del curso **Fundamentos de Programación** — 3er/4to semestre.

Un juego de preguntas interactivo (quiz) con gamificación para enseñar
Pensamiento Computacional a estudiantes de colegio.

---

## ¿De qué trata?

El jugador responde 8 preguntas sobre conceptos de pensamiento computacional
(algoritmos, bucles, variables, condicionales, funciones, etc.).
Cada respuesta correcta suma puntos, y el jugador tiene 3 vidas.
Al terminar se muestra un resumen con puntaje, porcentaje de aciertos y una medalla.

---

## Tecnologías usadas

- **HTML5** — estructura de las pantallas
- **CSS3** — diseño visual y animaciones
- **JavaScript ES6** — lógica del juego con Programación Orientada a Objetos

---

## Estructura del proyecto

```
quiz-pensamiento/
├── index.html          ← punto de entrada, estructura HTML
├── README.md           ← este archivo
├── css/
│   └── estilos.css     ← estilos visuales
└── js/
    ├── Pregunta.js     ← clase Pregunta (modelo de datos)
    ├── Juego.js        ← clase Juego (lógica y estado)
    ├── UI.js           ← clase UI (manipulación del DOM)
    ├── preguntas.js    ← arreglo con las 8 preguntas
    └── main.js         ← punto de entrada, eventos y flujo principal
```

---

## Clases POO

### Clase Pregunta
Representa una pregunta del quiz.

- Atributos: texto, opciones[], respuestaCorrecta, categoria
- Métodos: esCorrecta(indice), getRespuestaTexto()

### Clase Juego
Controla el estado completo del juego.

- Atributos: puntaje, vidas, indiceActual, estado
- Métodos: responder(indice), reiniciar(), getPorcentaje(), estaActivo()

### Clase UI
Actualiza lo que el usuario ve en pantalla.

- Métodos: mostrarPantalla(), mostrarPregunta(), actualizarHUD(), mostrarFeedback(), mostrarResultados()

---

## Pseudocódigo general

```
INICIO
  Crear arreglo de Preguntas
  Crear objeto Juego con esas preguntas
  Crear objeto UI

  Mostrar pantalla de bienvenida

  CUANDO el usuario hace clic en "Comenzar":
    Juego.reiniciar()
    Mostrar primera pregunta

  MIENTRAS Juego.estaActivo():
    Mostrar pregunta actual con sus opciones

    CUANDO el usuario elige una opción:
      resultado = Juego.responder(indiceElegido)

      SI resultado.correcto:
        Sumar puntos al puntaje
        Mostrar feedback verde
      SINO:
        Restar una vida
        Mostrar feedback rojo

      Actualizar HUD con puntaje y vidas

      SI Juego.vidas == 0:
        estado = "perdido"
      SI no quedan más preguntas:
        estado = "ganado"

  Mostrar pantalla final con puntaje, porcentaje y medalla
FIN
```

---

## Elementos del lenguaje utilizados

| Elemento            | Ejemplo en el proyecto                              |
|---------------------|-----------------------------------------------------|
| Variables           | puntaje, vidas, indiceActual                        |
| Tipos de datos      | string, number, boolean, array, object              |
| Condicionales       | if/else para verificar respuestas y estado          |
| Bucles              | forEach para recorrer preguntas y opciones          |
| Funciones           | Métodos de cada clase y funciones en main.js        |
| Clases POO          | Pregunta, Juego, UI                                 |
| Eventos DOM         | addEventListener para clics del usuario             |
| Funciones biblioteca| Math.random(), Array.sort(), setTimeout()           |

---

## Cómo ejecutar

Opción 1 — servidor Python:

```bash
cd quiz-pensamiento
python3 -m http.server 9000
```

Luego abrir en el navegador: http://localhost:9000

Opción 2 — abrir directo en el navegador:

```bash
xdg-open index.html
```

---

## Autor

Proyecto desarrollado para el curso Fundamentos de Programación.