import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'
import "./cart.css"

const CartPage = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useContext(CartContext)
  if(cart.length === 0) return (<div style={{padding:20}}><h2>Tu carrito está vacío</h2><Link to="/">Volver al catálogo</Link></div>)
  return (
    <div style={{padding:20}}>
      <h2>Carrito</h2>
      <table style={{width:'100%'}}>
        <thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th><th></th></tr></thead>
        <tbody>
          {cart.map(it=> (
            <tr key={it.id} style={{borderTop:'1px solid #eee'}}>
              <td style={{display:'flex',gap:8,alignItems:'center'}}><img src={it.image} style={{width:60}} alt=""/><span>{it.title}</span></td>
              <td>{it.quantity}</td>
              <td>${it.price}</td>
              <td>${it.price * it.quantity}</td>
              <td><button onClick={()=> removeFromCart(it.id)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ${getTotalPrice()}</h3>
      <div style={{display:'flex',gap:8}}><button onClick={clearCart}>Vaciar carrito</button><Link to="/checkout">
  <button className="cart-btn-checkout">
    Finalizar compra
  </button>
</Link></div>
    </div>
  )
}
export default CartPage
