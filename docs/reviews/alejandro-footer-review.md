# Revisión del footer: contactos del equipo y enlace legal

- **Responsable:** Alejandro Caycedo
- **Fecha:** 28 de septiembre de 2026
- **Alcance:** verificar los cinco correos institucionales del footer y el enlace a Términos y condiciones.
- **Aplicación revisada:** <https://josealejandromelom.github.io/Entrega_M2/>
- **Código revisado:** `frontend/src/components/common/SiteFooter.jsx`, `frontend/src/config/teamMembers.js`, `frontend/src/routes/destinations.js`, `frontend/src/pages/TermsPage.jsx`
- **Resultado general:** aprobado, sin defectos bloqueantes.

## Método

La revisión se hizo en tres niveles para que el resultado sea comprobable y no dependa solo de una inspección visual:

1. Lectura del componente del footer y de su fuente de datos única de contactos.
2. Ejecución de las pruebas automáticas relacionadas (`tests/footerTerms.test.mjs`, `tests/destinations.test.mjs`, `tests/routeAccess.test.mjs`) con `node --test`.
3. Descarga del paquete publicado en GitHub Pages (`assets/index-DwuNi3Z8.js`) para confirmar que lo que está desplegado coincide con lo que está en el repositorio.

## Correos del equipo

El footer no tiene direcciones escritas a mano: `SiteFooter.jsx` recorre `teamMembers.js`, que es la única fuente de verdad de los contactos. Las cinco direcciones aparecen completas y cada una se publica como enlace `mailto:`.

| Integrante | Correo institucional | Visible | Enlace `mailto:` |
| --- | --- | --- | --- |
| Catalina Vega Romero | catalinavero@unisabana.edu.co | Sí | Sí |
| Jose Alejandro Melo Murcia | josememu@unisabana.edu.co | Sí | Sí |
| Alejandro Caycedo | alejandrocamo@unisabana.edu.co | Sí | Sí |
| Carlos Gabriel Rodríguez | carlosrodorn@unisabana.edu.co | Sí | Sí |
| Sebastián Franco Umbacia | sebastianfrum@unisabana.edu.co | Sí | Sí |

Comprobaciones superadas:

- Son exactamente cinco contactos y las cinco direcciones son distintas entre sí.
- Todas usan el dominio institucional `@unisabana.edu.co` y no contienen espacios ni caracteres inválidos.
- Las cinco direcciones y los cinco nombres están presentes en el paquete JavaScript publicado, es decir, el despliegue está actualizado respecto al código.
- La lista vive dentro de un elemento `<address>` y la sección está rotulada con `aria-labelledby` sobre el título «Equipo del proyecto», de modo que un lector de pantalla anuncia el bloque como datos de contacto.

Límite de esta verificación: se validó el formato, la unicidad, el renderizado y el despliegue de las direcciones. No se envió correo a ninguna de ellas, así que la existencia real de cada buzón no se comprobó y queda a cargo de cada integrante.

## Enlace de Términos y condiciones

El enlace del footer usa `Link to="/terms"` de React Router, con texto descriptivo («Términos y condiciones») y una flecha decorativa marcada como `aria-hidden`, por lo que el texto del enlace se entiende fuera de contexto.

- La ruta `/terms` está declarada en el catálogo central de destinos con `requiresAuth: false`, así que es pública y no redirige a inicio de sesión.
- La ruta no está en la navegación principal, que es el comportamiento esperado para una página informativa; se llega a ella desde el footer.
- Como la aplicación usa `HashRouter`, la dirección directa es `https://josealejandromelom.github.io/Entrega_M2/#/terms` y funciona en GitHub Pages sin configuración de servidor. Se confirmó respuesta HTTP 200.
- El footer se monta en `PublicLayout`, por lo que tanto los correos como el enlace legal aparecen en todas las rutas de la aplicación.
- El contenido de la página cubre alcance, cuentas demo, operaciones simuladas, uso permitido, datos y privacidad, propiedad intelectual, disponibilidad, limitación de responsabilidad y contacto, y declara de forma explícita que se trata de un prototipo académico sin transacciones reales.

## Pruebas ejecutadas

```
node --test tests/footerTerms.test.mjs tests/destinations.test.mjs tests/routeAccess.test.mjs
# tests 10, pass 10, fail 0
```

Las dos pruebas directamente relacionadas con esta revisión son «footer contact list contains five unique institutional addresses» y «terms is a public informational route outside primary navigation»; ambas pasan.

## Observaciones menores (no bloquean la entrega)

1. Los nombres mostrados no siguen un formato uniforme: tres integrantes aparecen con dos apellidos y dos aparecen con uno solo, aunque el prefijo de su correo sugiere un segundo apellido (`alejandroca**mo**`, `carlosrod**orn**`). Conviene unificar el criterio para que la atribución del equipo se vea consistente.
2. La expresión regular de la prueba (`/^[a-z]+@unisabana\.edu\.co$/`) solo admite letras minúsculas antes de la arroba. Los datos actuales la cumplen, pero rechazaría una dirección institucional válida que incluyera un punto o un número si en el futuro se agrega o corrige un contacto.

## Conclusión

Los cinco correos del footer y el enlace a Términos y condiciones cumplen lo requerido: son visibles en todas las páginas, son accionables, la página legal es pública y accesible por URL directa, y el despliegue en GitHub Pages refleja el estado del repositorio. No se requieren cambios para la entrega; las dos observaciones anteriores son mejoras de consistencia.
