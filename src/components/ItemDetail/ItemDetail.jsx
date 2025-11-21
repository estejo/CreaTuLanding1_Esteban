import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAddedToCart(true);
  };

  // Loader o error si no hay producto aún (por async Firestore)
  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="item-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="300px" />
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>

      {!addedToCart ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <button className="btn btn-success">
          Producto agregado ✔ Ir al carrito
        </button>
      )}
    </div>
  );
};

export default ItemDetail;

