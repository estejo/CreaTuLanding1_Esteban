const products = [
  { id: '1', title: 'Matemáticas Escolar', price: 2500, category: 'Escolar', description: 'Libro de matemáticas para primaria.', image: '/src/assets/img/librosescolares.PNG' },
  { id: '2', title: 'Cuentos Infantiles', price: 1800, category: 'Infantil', description: 'Colección de cuentos para niños.', image: '/src/assets/img/libroinfantil.PNG' },
  { id: '3', title: 'Novela Juvenil', price: 3200, category: 'Juvenil', description: 'Historia emocionante para jóvenes.', image: '/src/assets/img/librojuvenil.PNG' },
  { id: '4', title: 'Ortografía Escolar', price: 2100, category: 'Escolar', description: 'Ejercicios y actividades.', image: '/src/assets/img/librosescolares.PNG' },
  { id: '5', title: 'Animales del Bosque', price: 1500, category: 'Infantil', description: 'Libro ilustrado sobre animales.', image: '/src/assets/img/libroinfantil.PNG' }
];

export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 400);
  });
}

export function fetchProductById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p = products.find(prod => prod.id === id);
      if (p) resolve(p);
      else reject(new Error('Producto no encontrado'));
    }, 300);
  });
}
export default products;
