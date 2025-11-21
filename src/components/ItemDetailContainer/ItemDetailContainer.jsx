import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { doc, getDoc } from 'firebase/firestore';
import db from "../../db/db.js";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState(null);
  const { id } = useParams();

  const getProducts = async () => {
    try {
      const productsRef = doc(db, "products", id);
      const dataDb = await getDoc(productsRef);
      const data = {id: dataDb.id, ...dataDb.data()};
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [])


  return (
    <div>
      <ItemDetail products={product} />
    </div>
  )
};

export default ItemDetailContainer;
