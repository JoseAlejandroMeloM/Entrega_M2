# ConectaNegocio — Entrega M2

> Compara, conversa y haz seguimiento sin cambiar de plataforma.

ConectaNegocio es un frontend React funcional para centralizar el abastecimiento entre pequeños comercios y sus proveedores. Este repositorio contiene la entrega **M2 — React Frontend** del curso Desarrollo de Aplicaciones Web de la Universidad de La Sabana.

## Enlaces de la entrega

- [Aplicación publicada en GitHub Pages](https://josealejandromelom.github.io/Entrega_M2/)
- [Prototipos y wireframes en Figma](https://www.figma.com/design/i0LHQGczrAGr6AqProBqJV/Proyecto-DSAW?node-id=0-1)
- [Matriz de pantallas y recorrido](./docs/WIREFRAMES.md)
- [Definición funcional](./docs/project-definition.md)
- [Principios de arquitectura](./docs/architecture-principles.md)
- [Especificaciones OpenSpec](./openspec/specs)

## Problema real

Los administradores de pequeños comercios que compran productos a varios proveedores no cuentan con un espacio centralizado para comparar ofertas equivalentes, conservar la conversación de cada negociación y consultar el avance de sus pedidos y entregas.

El problema fue identificado a partir del caso real de **Sol y Luna**, una papelería de Chía. Su administradora debe contactar a cada proveedor por separado y comparar manualmente variables como precio, referencia, presentación, cantidad mínima, disponibilidad, forma de pago y tiempo de entrega. Una papelería puede manejar pedidos cercanos a 1.500 productos, organizados en lotes y distribuidos entre distintos proveedores.

La información queda repartida entre WhatsApp, llamadas, facturas, notas y una plataforma de ventas que administra el inventario del negocio, pero no permite comparar ni gestionar la información de los distribuidores. Esto consume tiempo, dificulta reconocer referencias parecidas y aumenta el riesgo de perder las condiciones acordadas o desconocer el estado de una entrega.

## Usuarios objetivo

### Comerciante o administrador del negocio

Propietarios y administradores de papelerías u otros pequeños comercios que compran productos recurrentemente a varios proveedores. La administradora de Sol y Luna es el usuario de referencia inicial.

### Proveedor o distribuidor

Empresas que publican ofertas, responden consultas, confirman pedidos y comunican el avance de preparación y entrega a sus clientes comerciales.

## ¿Por qué una aplicación web?

- **Una hoja de cálculo no permite una colaboración comercial completa.** Puede almacenar precios, pero no permite que cada proveedor administre sus ofertas, responda conversaciones y actualice pedidos desde una cuenta con permisos propios.
- **WhatsApp no organiza la información alrededor de la compra.** Las conversaciones quedan mezcladas y no relacionan estructuradamente cada producto, oferta, pedido y entrega.
- **La plataforma de inventario existente no compara distribuidores.** El comercio todavía debe revisar manualmente presentaciones, compras mínimas, precios y tiempos de entrega.
- **Una aplicación exclusivamente móvil limita el trabajo administrativo.** La web funciona en computador, tableta y teléfono, y facilita revisar catálogos y pedidos grandes en una pantalla amplia.
- **Comerciante y proveedor necesitan la misma información actualizada.** La aplicación web centraliza ofertas, conversaciones, pedidos e historial para que ambas partes compartan contexto.

## Propuesta de valor

ConectaNegocio integra seis funciones en un solo frontend:

1. **Comparación:** alinea precio, presentación, compra mínima, disponibilidad y entrega de diferentes proveedores.
2. **Comunicación:** conserva el contexto de las conversaciones entre los participantes del abastecimiento.
3. **Seguimiento:** muestra el avance del pedido y actualiza el inventario cuando se registra la entrega.
4. **Ventas:** registra ventas presenciales y compras de clientes con validación de stock y pagos simulados.
5. **Análisis:** calcula reportes, recomendaciones de reposición y análisis de facturas de demostración.
6. **Colaboración:** permite conversaciones contextuales entre clientes, tiendas y distribuidores.

## Recorridos demostrables de M2

1. El usuario selecciona una tienda y consulta el catálogo.
2. Compara ofertas de distintos distribuidores por precio, inventario y entrega.
3. Crea un pedido de abastecimiento y el distribuidor lo confirma, envía y entrega.
4. Un cliente agrega productos al carrito y realiza un checkout simulado.
5. Un cajero registra una venta presencial y actualiza el inventario.
6. La tienda consulta reportes, facturas y recomendaciones.
7. Los participantes usan el chat contextual según su rol.

El frontend usa datos simulados y `localStorage` únicamente para cuentas demo y sesión; no crea compras reales ni envía información a un servidor.

## Roles y permisos

| Rol | Capacidades principales |
|---|---|
| `client` | Catálogo, carrito, checkout, pedidos propios y chat con tiendas. |
| `store_admin` | Ventas, inventario, proveedores, pedidos, facturas, reportes y chat de su tienda. |
| `store_employee/cashier` | Ventas presenciales, inventario necesario y chat; no reportes ni abastecimiento. |
| `store_employee/inventory` | Inventario, comparación de proveedores, pedidos de abastecimiento, facturas y chat. |
| `distributor_admin` | Pedidos recibidos, estados, inventario y chat de su distribuidor. |
| `distributor_employee/sales` | Consulta y confirma pedidos recibidos. |
| `distributor_employee/inventory` | Consulta el catálogo e inventario del distribuidor. |
| `distributor_employee/logistics` | Marca pedidos confirmados como enviados y pedidos enviados como entregados. |

La navegación, las rutas protegidas y las operaciones de negocio aplican estas políticas. La seguridad es demostrativa porque no existe backend.

## Historias de usuario

- Como administrador de un pequeño negocio, quiero comparar ofertas para escoger la mejor combinación de precio, cantidad y entrega.
- Como administradora de una papelería, quiero distinguir referencias y presentaciones similares para pedir el producto correcto.
- Como comerciante, quiero conversar desde una oferta o pedido para conservar el contexto de la negociación.
- Como comerciante, quiero consultar el estado de cada pedido para saber qué está pendiente, en tránsito o entregado.
- Como proveedor, quiero actualizar mis ofertas y pedidos para que mis clientes reciban información vigente.

## Alcance de M2

- Frontend React con JSX, Vite, React Router y `HashRouter`.
- Autenticación demo y autorización por rol y subrol.
- Catálogo por tienda, comparación de proveedores y detalle dinámico con `useParams`.
- Carrito, checkout, ventas presenciales, inventario y pedidos de abastecimiento.
- Facturas, reportes, recomendaciones y chat contextual simulados.
- Diseño responsive, accesible y preparado para GitHub Pages.
- Pruebas automáticas, validación OpenSpec y workflow de despliegue continuo.

## Fuera del alcance productivo

Backend, base de datos, autenticación productiva, pagos reales, facturación electrónica, OCR, IA, WebSockets, persistencia comercial entre recargas y aplicación móvil nativa.

La regla de alcance es: si una función no mejora directamente la comparación, la comunicación o el seguimiento, debe quedar para una versión futura.

## Equipo

| Integrante | Contribuciones |
|---|---|
| **Catalina Vega Romero** | Investigación y validación del problema con el caso real de la papelería Sol y Luna; definición de necesidades del comerciante; revisión de los flujos, contenidos y coherencia de los wireframes. |
| **Jose Alejandro Melo Murcia** | Integración general; arquitectura React; conexión de autenticación, catálogo, compras, ventas, inventario, pedidos, reportes, facturas y chat; pruebas, build y preparación de GitHub Pages. |
| **Alejandro Caycedo** | Creación de la base inicial del repositorio; apoyo en la definición de la estructura del proyecto, los roles y el recorrido principal entre comerciante y proveedor. |
| **Sebastián Franco Umbacia** | Desarrollo y ajuste de las páginas iniciales y de ofertas; consolidación del planteamiento del problema; organización de enlaces y documentación; actualización del README y preparación del repositorio para GitHub Pages. |

El historial de Git y [docs/AI-LOG.md](./docs/AI-LOG.md) complementan esta distribución y registran el proceso de trabajo.

## Lógica y arquitectura

### Contextos y estado

`AuthContext` administra `currentUser`, cuentas registradas, login, registro, logout y la sesión demo.

`DataContext` administra el estado comercial de la sesión: inventario, carrito, ventas, pedidos, ofertas, facturas, mensajes y avisos de las operaciones.

Las páginas coordinan la interfaz y los formularios; las mutaciones importantes están centralizadas en operaciones como:

```text
checkoutCustomerOrder()
registerStoreSale()
createPurchaseOrder()
updateOrderStatus()
addInvoice()
sendMessage()
```

Cada operación valida el usuario, la organización, el stock, los precios y los IDs antes de devolver un nuevo estado. No se muta directamente el estado de React.

### Transiciones principales

```text
Catálogo → tienda → producto → carrito → checkout
  → pedido de cliente + venta + pago → descuento de inventario

Comparación de ofertas → pedido pendiente → confirmado
  → enviado → entregado → aumento único del inventario

Venta presencial → líneas y cantidades → stock y pago válidos
  → venta registrada → inventario actualizado → reportes derivados
```

Los productos, usuarios, tiendas y distribuidores son fuentes únicas de verdad. Las relaciones usan IDs estables como `productId`, `storeId`, `distributorId`, `orderId` y `conversationId`. Los precios se almacenan como números COP y las fechas como valores compatibles con ISO.

### Rutas y protección

La aplicación utiliza `HashRouter` para conservar la navegación al publicarse como sitio estático. `destinations.js` centraliza las rutas, los roles y subroles permitidos; `SiteNavigation` y `ProtectedRoute` leen esas mismas políticas. Así, ocultar un enlace no es la única barrera: una URL directa también se valida.

La ruta dinámica `/products/:productId` utiliza `useParams`. La ruta compartida `/chat` filtra participantes compatibles con el rol actual y rechaza destinatarios inválidos.

## Tecnologías

- React, JSX, React Router y Vite.
- CSS responsive organizado por capas, con Grid como sistema principal y Flexbox solo en controles unidimensionales.
- JavaScript moderno, `useState`, Context y un custom hook de debounce.
- Mock data en memoria para productos, ofertas, inventario, pedidos, ventas, facturas y mensajes.
- `localStorage` únicamente para las cuentas y la sesión demo.
- Figma para wireframes y diseño.
- GitHub Actions y GitHub Pages para pruebas, build y publicación.

Cada push a `main` ejecuta las pruebas, verifica el tamaño de los componentes, construye `frontend/dist` y publica el frontend mediante GitHub Actions.

## Estructura del proyecto

```text
.
├── .github/workflows/       # Verificación y despliegue a GitHub Pages
├── README.md
├── frontend/
│   ├── src/
│   │   ├── components/  # Componentes pequeños y reutilizables
│   │   ├── context/     # AuthContext y DataContext
│   │   ├── data/        # Identidades y mock data
│   │   ├── pages/       # Vistas por ruta
│   │   ├── routes/      # Router y políticas de acceso
│   │   ├── utils/       # Reglas de negocio puras
│   │   └── styles/      # CSS del frontend React
│   ├── tests/
│   └── package.json
├── openspec/       # Especificaciones funcionales y técnicas
└── docs/            # Documentación, wireframes y registro de asistencia
```

La aplicación activa está en `frontend/`. El frontend usa `HashRouter` para conservar las rutas al publicarse como sitio estático en GitHub Pages.

## Funciones demostrativas

El frontend implementa autenticación por roles, catálogo por tienda, comparación de distribuidores, pedidos de abastecimiento, ventas, inventario, checkout, facturas simuladas, reportes, recomendaciones y chat local.

Todo es demostrativo: no hay servidor, cuentas reales, pagos reales, OCR, IA ni comunicación entre navegadores. Las cuentas y la sesión se guardan únicamente en las claves `cn-react-auth-v1:registeredUsers` y `cn-react-auth-v1:currentUserId` de `localStorage`. **No utilices credenciales reales.**

## Cuentas demo

Todas las cuentas demo usan la contraseña `Demo2026!`:

| Rol | Correo |
|---|---|
| Cliente | `cliente@demo.test` |
| Administrador de tienda | `tienda.admin@demo.test` |
| Cajero | `cajero@demo.test` |
| Inventario de tienda | `tienda.inventario@demo.test` |
| Administrador de distribuidor | `distribuidor.admin@demo.test` |
| Ventas de distribuidor | `distribuidor.ventas@demo.test` |
| Inventario de distribuidor | `distribuidor.inventario@demo.test` |
| Logística de distribuidor | `distribuidor.logistica@demo.test` |

Son credenciales ficticias exclusivamente académicas. No utilices contraseñas reales.

## Ejecutar localmente

Desde `frontend/`:

```sh
npm install
npm run dev
npm run build
node --test tests/*.test.mjs
```

`npm run build` verifica automáticamente que ningún componente JSX supere 80 líneas.

## Verificación

La versión actual cumple las siguientes comprobaciones:

- 61 pruebas automáticas exitosas.
- 56 componentes JSX dentro del límite de 80 líneas.
- Build de producción Vite exitoso.
- 9 especificaciones y cambios OpenSpec válidos.
- Rutas dinámicas, protegidas y redirecciones verificadas.
- Permisos de roles y subroles verificados en navegación y operaciones.
- Workflow de GitHub Actions configurado para publicar `frontend/dist` en GitHub Pages.

## Datos y privacidad

Sol y Luna es el caso real que fundamenta el problema. Los nombres de perfiles, proveedores, productos, precios, mensajes, pedidos y actividades mostrados dentro del prototipo son ficticios y se utilizan exclusivamente con fines académicos.

## Entrega M2

- **Hito:** M2 — React Frontend.
- **Curso:** Desarrollo de Aplicaciones Web, Universidad de La Sabana.
- **Aplicación:** [https://josealejandromelom.github.io/Entrega_M2/](https://josealejandromelom.github.io/Entrega_M2/)
