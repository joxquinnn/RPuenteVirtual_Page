# EJECUCIÓN TÉCNICA OBLIGATORIA — CORRECCIÓN RESPONSIVE EN PROGRAMACIÓN

**IMPORTANTE PARA LA IA GENERADORA:** El encabezado de la sección de Programación está rompiendo el diseño en dispositivos móviles. El contenedor que agrupa el título y el texto descriptivo está forzando una distribución en fila, provocando que el texto derecho quede colapsado.

## 1. Ajuste del Encabezado en Móviles (`ScheduleSection.module.css` o equivalente)
- **El problema:** El contenedor superior (título a la izquierda, párrafo a la derecha) mantiene la estructura de escritorio en pantallas pequeñas.
- **La solución (CSS):**
  - Localiza el contenedor del encabezado de la sección.
  - Añade o modifica la regla `@media (max-width: 768px)` para este contenedor.
  - Obliga a que los elementos se apilen verticalmente y ocupen todo el ancho:
    ```css
    @media (max-width: 768px) {
      .headerContainer /* reemplaza con la clase real del contenedor */ {
        display: flex;
        flex-direction: column; /* Apila el título y el texto */
        align-items: flex-start;
        gap: 1.5rem;
      }
      
      .headerText /* reemplaza con la clase real del párrafo */ {
        width: 100%;
        max-width: 100%;
        text-align: left;
      }
    }
    ```

## 2. Revisión del Contenedor General
- Aprovecha de revisar que las tarjetas de los programas tengan `width: 100%;` en la versión móvil para aprovechar el espacio.
- Asegúrate de que el padding lateral de la sección en móviles no sea excesivo (un `padding: 2rem 1rem;` suele ser suficiente).