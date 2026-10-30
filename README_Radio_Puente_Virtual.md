# REDISEÑO: RESTAURAR IMAGEN Y NUEVA DISTRIBUCIÓN

He cambiado de opinión respecto a la tarjeta expandida de los programas. Sí vamos a usar una imagen, ya que servirá para mostrar la foto del locutor o la portada del programa. 

Por favor, ajusta el interior de la tarjeta expandida (el área que se despliega) de la siguiente manera:

## 1. Estructura a dos columnas (Escritorio)
- Crea un contenedor interno con `display: grid; grid-template-columns: 200px 1fr; gap: 2rem;` (o proporciones similares) para separar la imagen de la información.

## 2. Columna Izquierda (Imagen)
- Restaura el elemento de la imagen.
- Asegúrate de que tenga un diseño pulido: dale un `border-radius` que coincida con el estilo de la web, usa `aspect-ratio: 1 / 1` u `object-fit: cover` para que no se deforme, y añádele un borde sutil (`border: 1px solid rgba(255,255,255,0.1);`).

## 3. Columna Derecha (Información)
- Coloca la **descripción breve del programa** en la parte superior de esta columna, con un texto de color claro y buen interlineado (`line-height: 1.6`).
- Debajo de la descripción (separado por un margen), acomoda los metadatos. Puedes usar un pequeño grid de 2 o 3 columnas internas para mostrar:
  1. **Conduce:** Nombre del locutor.
  2. **Días:** Fecha/días de emisión.
  3. **Horario:** Horario del bloque.
- Mantén el estilo elegante para estos datos: las etiquetas ("CONDUCE", "DÍAS") en tamaño pequeño y mayúsculas, y los valores en blanco destacando.

## 4. Responsive (Móviles)
- En pantallas pequeñas (`@media (max-width: 768px)`), el contenedor de dos columnas debe pasar a una sola columna (`grid-template-columns: 1fr;`).
- La imagen debe quedar arriba y la información debajo, adaptándose al ancho del celular.