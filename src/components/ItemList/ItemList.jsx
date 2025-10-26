import React from 'react'
import ItemCard from './ItemCard.jsx'
import './itemlist.css'

const ItemList = ({ items }) => {
  return (
    <div className="catalogo-grid">
      {items.map(i => <ItemCard key={i.id} item={i} />)}
    </div>
  )
}

export default ItemList
