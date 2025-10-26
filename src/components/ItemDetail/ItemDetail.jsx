import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { CartContext } from '../../context/CartContext.jsx'

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext)
  if(!product) return <p>Cargando...</p>
  const handleAdd = (qty) => {
    addToCart(product, qty)
    alert(`Agregaste ${qty} unidad(es) de "${product.title}" al carrito.`)
  }
  return (
    <div style={{display:'flex',gap:20,alignItems:'flex-start'}}>
      <img src={product.image} alt={product.title} style={{width:320,height:320,objectFit:'cover',borderRadius:8}}/>
      <div style={{maxWidth:600}}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p><strong>${product.price}</strong></p>
        <ItemCount initial={1} stock={20} onAdd={handleAdd} />
      </div>
    </div>
  )
}
export default ItemDetail
