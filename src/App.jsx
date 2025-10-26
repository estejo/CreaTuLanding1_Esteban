import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import CartPage from './components/CartPage.jsx'
import NotFound from './components/NotFound.jsx'
import './App.css'

function App() {

  const saludo="Donde cada página cobra vida";

  return (
    <div className="app-root">
      <NavBar />
      <h1>{saludo}</h1>
      <main style={{padding:20}}>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
