import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { doc, getDoc } from 'firebase/firestore';
import {db} from "../../db/db.js";
import './itemdetail.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const ref = doc(db, "products", id);
      const snap = await getDoc(ref);
      setProduct({ id: snap.id, ...snap.data() });
    };

    getProduct();
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;

