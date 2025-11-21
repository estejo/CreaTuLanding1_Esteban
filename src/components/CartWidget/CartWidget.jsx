import { useContext } from 'react'
import { Link } from 'react-router-dom'
import carrito from '../../assets/img/carrodecompras.png'
import { CartContext } from '../../context/CartContext.jsx'
import './cartwidget.css'

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext)
  const qty = getTotalQuantity()
  return (
    <div className="carritocss">
      <Link to="/cart" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
        <img src={carrito} alt="car" />
        <span className="cart-qty">{qty}</span>
      </Link>
    </div>
  )
}

export default CartWidget;
