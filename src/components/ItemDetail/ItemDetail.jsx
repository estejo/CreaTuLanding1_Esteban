import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";  
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAdd = (quantity) => {
    addItem(product, quantity);
    setAddedToCart(true);
  };

  if (!product || Object.keys(product).length === 0) {
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
        <div className="after-add-buttons">
          <button onClick={() => handleAdd(1)}>
            Agregar otro
          </button>

          <Link to="/cart">
            <button className="go-cart-btn">
              Ir al carrito
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;


