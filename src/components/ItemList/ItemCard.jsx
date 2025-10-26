import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.title} className="card-img" />
      <div className="card-body">
        <h3>{item.title}</h3>
        <p className="desc">{item.description}</p>
        <p className="price"><strong>${item.price}</strong></p>
        <div style={{marginTop:'auto'}}>
          <Link to={`/item/${item.id}`} className="btn-detail">Ver detalle</Link>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
