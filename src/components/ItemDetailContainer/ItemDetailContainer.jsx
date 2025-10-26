import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../../utils/products.js'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product,setProduct] = useState(null)
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    setLoading(true)
    fetchProductById(id).then(p=>setProduct(p)).catch(e=>{console.error(e); setProduct(null)}).finally(()=>setLoading(false))
  },[id])
  if(loading) return <p style={{padding:12}}>Cargando detalle...</p>
  if(!product) return <p style={{padding:12}}>Producto no encontrado</p>
  return <ItemDetail product={product} />
}
export default ItemDetailContainer
