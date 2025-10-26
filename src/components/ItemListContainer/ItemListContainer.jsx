import React, { useEffect, useState } from 'react'
import './itemlistcontainer.css'
import '../ItemList/itemlist.css'
import ItemList from '../ItemList/ItemList.jsx'
import { fetchProducts } from '../../utils/products.js'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [items,setItems] = useState([])
  const [loading,setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(()=>{
    setLoading(true)
    fetchProducts().then(products=>{
      if(categoryId){
        setItems(products.filter(p => p.category.toLowerCase() === categoryId.toLowerCase()))
      } else setItems(products)
    }).catch(err=>{console.error(err); setItems([])}).finally(()=>setLoading(false))
  },[categoryId])

  return (
    <div>
      <h2 style={{marginLeft:12}}>{categoryId ? `Categoría: ${categoryId}` : 'Catálogo'}</h2>
      {loading ? <p style={{padding:12}}>Cargando productos...</p> : <ItemList items={items} />}
    </div>
  )
}

export default ItemListContainer
