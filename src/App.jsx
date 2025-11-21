import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import CartPage from "./components/CartPage.jsx";
import './App.css'
import Checkout from "./components/Checkout/Checkout.jsx";



function App() {

  const saludo = "Donde cada página cobra vida";

  return (


    <div className="app-root">
      <NavBar />
      <h1>{saludo}</h1>
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </main>
    </div>

  );
}

export default App
