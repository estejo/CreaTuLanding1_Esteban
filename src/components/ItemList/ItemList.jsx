import React from 'react'
import ItemCard from './ItemCard.jsx';
import './itemlist.css';

const ItemList = ({ products }) => {

  if (!products || products.length === 0) {
    return <p>Cargando productos...</p>;
  };

return (
  <div className="item-list">
    {products.map((product) => (
      <ItemCard key={product.id} item={product} />
    ))}
  </div>
)};

export default ItemList;
