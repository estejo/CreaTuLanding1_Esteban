import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const total = getTotalQuantity ? getTotalQuantity() : 0;

  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      🛒 {getTotalQuantity() > 0 && <span>{getTotalQuantity()}</span>}
    </Link>
  );
};

export default CartWidget;
