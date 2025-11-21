
import { useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) setQuantity(prev => prev + 1);
  };
  const decrement = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={decrement} disabled={quantity <= 1}>-</button>
        <span>{quantity}</span>
        <button onClick={increment} disabled={quantity >= stock}>+</button>
      </div>
      <div className="actions">
        <button onClick={() => onAdd(quantity)} disabled={stock === 0}>
          {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

