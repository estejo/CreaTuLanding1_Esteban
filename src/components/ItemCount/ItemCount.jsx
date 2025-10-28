import React, { useState } from 'react'

const ItemCount = ({ initial=1, stock=10, onAdd }) => {
  const [count,setCount] = useState(initial)
  const add = ()=> setCount(c => Math.min(stock, c+1))
  const sub = ()=> setCount(c => Math.max(1, c-1))
  return (
    <div style={{display:'flex',flexDirection:'column',gap:8}}>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <button onClick={sub}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>
      </div>
      <button onClick={()=> onAdd && onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}
export default ItemCount
