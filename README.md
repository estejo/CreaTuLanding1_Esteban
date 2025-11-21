# Jorgelina Esteban

🛒 Navega Las Rutas — E-commerce React App

Proyecto final desarrollado como entrega del curso React JS.
Consiste en una Single Page Application (SPA) de e-commerce construida con React, con manejo global de estados mediante Context API, navegación con React Router DOM e integración con Firebase Firestore para persistencia de datos.

Tecnologías utilizadas

* React JS

* React Router DOM

* Context API

* Firebase Firestore

* Estilos con CSS / Bootstrap

* Hooks: useState, useEffect, useContext, useParams

Funcionalidades principales

✔️ Catálogo dinámico de productos
✔️ Filtro por categorías
✔️ Vista de detalle de producto
✔️ Carrito con persistencia en memoria mediante Context
✔️ Control de stock en tiempo real
✔️ Agregar y eliminar productos del carrito
✔️ Checkout con registro de orden en Firebase
✔️ Mensajes condicionales (carrito vacío, stock limitado, loader, etc.)
✔️ Renderizado condicional y navegación SPA sin recargas

Se utiliza Firestore para: almacenar los productos del catálogo y registrar órdenes de compra generadas por cada usuario

Flujo de compra

1.El usuario selecciona productos desde el catálogo.

2. Desde el detalle, determina cantidad mediante el componente ItemCount, con validaciones de stock.

3. El producto se agrega al carrito mediante Context.

4. En /cart, el usuario puede:

eliminar productos, vaciar carrito, continuar comprando, finalizar compra

5. El componente Checkout genera la orden en Firestore y devuelve al usuario un ID de seguimiento.

Validaciones implementadas

* Límite por stock

* Cantidad mínima: 1

* Ocultar contador luego de agregar al carrito

* Mostrar loader mientras Firebase responde

* Mensajes:

"Cargando..."

"Carrito vacío"

"Producto sin stock"

Jorgelina Esteban
Proyecto académico para curso de React.