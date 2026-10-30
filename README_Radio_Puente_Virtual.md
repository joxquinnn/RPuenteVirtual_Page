# CORRECCIÓN DE BUGS RESPONSIVE EN TARJETAS DE PROGRAMACIÓN

Por favor, revisa el archivo de estilos de las tarjetas (ej. `ScheduleCard.module.css`) y corrige los siguientes dos problemas en la vista móvil (`@media (max-width: 768px)`):

## 1. Botón "En Vivo" y flecha desalineados
- **El problema:** En móvil, el layout principal de la tarjeta (el área siempre visible) se rompe, apilando el botón "EN VIVO" y el botón de la flecha debajo del texto sin ningún orden.
- **La solución:** 
  - Asegúrate de que el contenedor superior (`header` de la tarjeta) mantenga un `display: flex; justify-content: space-between; align-items: flex-start;` incluso en móviles.
  - Agrupa la información de texto (horario, título, conductor) en un contenedor interno (`flex: 1; display: flex; flex-direction: column;`).
  - Agrupa las acciones (Botón En Vivo + Flecha) en otro contenedor alineado a la derecha. Si el espacio es muy estrecho, asegúrate de que el botón "En Vivo" y la flecha se mantengan juntos, o que la flecha quede absolutamente posicionada a la derecha y el botón "En Vivo" quede ordenado debajo del texto.

## 2. Contenido cortado (Overflow) en la tarjeta expandida
- **El problema:** Al desplegar la tarjeta en móvil, el contenido (imagen y descripción) se desborda por debajo. El fondo oscuro de la tarjeta no crece para contener la información.
- **La solución:** 
  - Revisa cómo estás animando o mostrando el contenido expandido. Si usas `max-height` para la transición de apertura, el valor máximo se queda corto en móviles. Auméntalo en el media query (ej. `max-height: 1500px;` cuando está abierta).
  - Asegúrate de que la tarjeta principal tenga `height: auto !important;` y no una altura fija.
  - Añade un `padding-bottom` adecuado al interior del área expandida para que respire al final y no quede pegado al borde.