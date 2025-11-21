import React from 'react'
import ItemCard from './ItemCard.jsx'
import './itemlist.css'

const ItemList = ({ products }) => {

  if (!products || products.length === 0) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Precio: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
