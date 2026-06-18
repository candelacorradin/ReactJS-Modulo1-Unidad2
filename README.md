# Registro al evento — Formulario interactivo con validación

Proyecto de la **Unidad 2 del módulo "JavaScript esencial"**. Es un formulario que pide nombre y edad, valida con un operador de comparación si la persona es mayor de edad y muestra un mensaje dinámico en pantalla: una pantalla verde de bienvenida si cumple, o una roja si no.

## Tecnologías

- HTML5
- CSS3 (animaciones, gradientes y clases dinámicas)
- JavaScript (DOM, eventos, `querySelector`, `addEventListener`, `preventDefault`)

## Cómo funciona

1. Se cargan los elementos del formulario con `document.querySelector`.
2. Al enviar, `addEventListener` ejecuta la función de validación y `event.preventDefault()` evita que la página se recargue.
3. Se obtiene la edad y, con el operador `>=`, se compara contra 18.
4. Según el resultado se muestra la pantalla correspondiente usando `classList.add()` y `classList.remove()`, con el nombre interpolado en el mensaje.

## Cómo clonar y ejecutar

No requiere dependencias ni instalación. Basta con abrir el `index.html` en el navegador.

```bash
git clone https://github.com/TU-USUARIO/registro-al-evento.git
cd registro-al-evento
```

Luego abrí `index.html` con doble clic, o serví la carpeta con cualquier servidor estático (por ejemplo `Live Server` en VS Code).

## Estructura

```
.
├── index.html      # Formulario y título principal
├── script.js       # Lógica de validación (variables, operadores, función, DOM, eventos)
├── styles.css      # Estilos base y clases dinámicas para los mensajes
└── README.md
```

## Capturas

**Formulario inicial**

![Formulario de registro](formulario.png)

**Mensaje positivo (mayor de edad)**

![Pantalla de acceso concedido](exito.png)

**Mensaje negativo (menor de edad)**

![Pantalla de acceso denegado](error.png)

## Créditos

- **Autora:** Candela Corradin
- **Curso:** JavaScript esencial
- **Unidad:** Módulo 1 — Unidad 2

## Fuentes y bibliografía

- Flanagan, D. *JavaScript: The Definitive Guide*. 7.ª ed. O'Reilly Media; 2020.
- Freeman, E. y Robson, E. *Head First JavaScript Programming*. 1.ª ed. O'Reilly Media; 2014.
- MDN Web Docs — [`Document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- MDN Web Docs — [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- MDN Web Docs — [`Event.preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

La tipografía *Afacad Flux* se carga desde Google Fonts.
