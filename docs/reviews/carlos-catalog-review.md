# Revisión del recorrido de catálogo

- **Responsable:** Carlos Gabriel Rodríguez
- **Fecha:** 28 de septiembre de 2026
- **Rutas revisadas:** `#/` → `#/products` → `#/products/:productId` (p001, p003, p007, p013, p016 y el ID inexistente p999)
- **Resultado:** Requiere ajustes
- **Dispositivo o navegador:** Windows 11 Pro con Google Chrome 153 en ventana de escritorio (1366 × 800) y en vista móvil emulada (375 × 740)
- **Aplicación revisada:** <https://josealejandromelom.github.io/Entrega_M2/>
- **Alcance:** recorrido Productos → seleccionar tienda → buscar producto → abrir detalle.

## Método

Recorrí la aplicación publicada en GitHub Pages con Chrome controlado por scripts (Playwright), con ayuda de un asistente de IA (Claude Code). Revisé los resultados y las capturas de pantalla. No se revisó el código fuente y no hubo errores en la consola durante el recorrido.

## Resultados del recorrido

| Paso | Resultado |
| --- | --- |
| Productos | El enlace «Productos» del menú abre `#/products`. Antes de elegir tienda, solo se muestra el selector y el mensaje «Selecciona una tienda». |
| Seleccionar tienda | Papelería Central muestra 15 productos y Papelería Norte muestra 9. Los precios, las existencias y las categorías cambian según la tienda. Se ven los estados «Disponible», «Pocas unidades» y «Agotado». |
| Buscar producto | «cuaderno» y «CUADERNO» devuelven 2 resultados. « lápiz », con espacios, devuelve 1. «xyz123» muestra «Sin resultados para estos filtros». La búsqueda funciona junto con el filtro de categoría. |
| Abrir detalle | «Ver detalle» abre `#/products/p001` con la oferta de la tienda elegida. Si se cambia la tienda en el detalle, el precio y las existencias se actualizan. Para p016 en Papelería Central aparece «No se vende en esta tienda». |
| Casos límite | `#/products/p999` muestra «Producto no encontrado». Recargar un detalle funciona. «Volver al catálogo» conserva la tienda seleccionada. En la vista móvil no hay desbordamiento horizontal. |

## Observaciones

- **Ajuste recomendado:** al abrir «Ver detalle» desde un producto bajo en la lista, la página conserva la posición de desplazamiento anterior. En la vista móvil (p013, Papelería Central) el detalle se abre sobre el footer, con el nombre y el precio fuera de la pantalla. En escritorio el título también queda oculto arriba. El detalle debería abrir al inicio de la página.
- **Mejora sugerida:** la búsqueda distingue tildes. «boligrafo» devuelve 0 resultados, mientras que «bolígrafo» devuelve 2. Además, al volver con el botón «Atrás» del navegador, se conserva la tienda pero se pierde el texto buscado.

## Conclusión

El recorrido completo funciona y los datos de cada tienda son coherentes. Marco **Requiere ajustes** por el problema de desplazamiento al abrir el detalle, que en celular oculta el producto. La observación sobre la búsqueda es una mejora opcional.
