# Instrucciones de Rediseño UI/UX: Sección Noticias y Publicaciones

## Contexto de la Tarea
El objetivo de este documento es detallar la refactorización exclusiva de la sección de **Noticias y Publicaciones** (`NewsSection.tsx` y su archivo de estilos `NewsSection.module.css`).

Los problemas principales a resolver en esta iteración son:
1. La correcta visualización de "flyers" informativos (evitar que las imágenes con texto se recorten).
2. El manejo de noticias que contienen múltiples imágenes (galería).
3. La falta de espacio para leer descripciones largas de forma cómoda en la vista detallada.

**Stack Tecnológico:** React, TypeScript, **CSS Modules** (`.module.css`).
*Restricción estricta:* NO utilizar Tailwind CSS. Todo el estilado debe manejarse mediante clases de CSS modular puro.

---

## 1. Tarjeta de Noticia (Vista Previa)
Se debe modificar la tarjeta que aparece en la grilla principal para generar interés sin recortar información vital.

* **Contenedor de Imagen (Anti-recorte):**
  * Reemplazar el uso actual de `object-fit: cover` por `object-fit: contain` para la imagen de la noticia. Esto garantiza que los flyers cuadrados o verticales se vean completos.
  * Para evitar espacios vacíos antiestéticos a los lados de la imagen contenida, el contenedor debe tener un fondo oscuro. *Opcional recomendado:* Usar la misma imagen desenfocada (`backdrop-filter: blur`) como fondo de ese contenedor.
* **Indicador de Galería (Badge):**
  * Si la estructura de datos de la noticia tiene más de una imagen, agregar un pequeño indicador visual flotante en la esquina de la imagen (ej. un texto "1/3" o un ícono).
* **Teaser (Extracto de Descripción):**
  * Justo debajo del título de la noticia, renderizar un fragmento de la descripción.
  * Usar la propiedad CSS `line-clamp` (ej. `-webkit-line-clamp: 3`) para truncar el texto a un máximo de 3 líneas con puntos suspensivos. Esto es vital para mantener todas las tarjetas de la grilla a la misma altura.
* **Call to Action:**
  * Añadir un texto sutil o botón pequeño al final de la tarjeta ("Leer más..." o "Ver detalle").

---

## 2. Modal de Noticia (Vista Detallada)
Mantener el comportamiento actual de modal flotante con fondo oscurecido (backdrop/overlay) que bloquea el resto de la página, pero rediseñar por completo su estructura interna para priorizar la lectura.

* **Layout de Pantalla Dividida (Split Screen en Desktop):**
  * En resoluciones de escritorio, el modal debe expandirse a lo ancho (ej. 70%-80% del ancho del viewport) y dividirse en dos columnas claras (usando Flexbox o CSS Grid).
* **Columna Izquierda (Área Visual y Carrusel):**
  * Dedicada 100% a la imagen o imágenes.
  * Utilizar `object-fit: contain` para mostrar la imagen en su totalidad.
  * Si la noticia incluye una galería de fotos, incorporar controles básicos (flechas izquierda/derecha) dentro de este espacio para navegar por las imágenes.
* **Columna Derecha (Información y Detalles):**
  * **Comportamiento Crítico:** Esta columna debe tener su propio scroll vertical independiente (`overflow-y: auto;`). Esto evitará que textos largos expandan el modal más allá del alto de la pantalla o empujen la imagen fuera de la vista.
  * **Contenido:** Renderizar en la parte superior las etiquetas (categoría/fecha), seguido del título principal (tamaño grande) y, por último, la descripción completa de la publicación sin ningún tipo de recorte.