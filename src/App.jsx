import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from './components/NavBar/NavBar';
import './App.css'
import libroescolar from "./assets/img/librosescolares.PNG";
import libroinfantil from "./assets/img/libroinfantil.PNG";
import librojuvenil from "./assets/img/librojuvenil.PNG";


function App() {
  const saludo = "Donde cada página cobra vida";


  return (

    <div className="app">
      <NavBar />
      <ItemListContainer greeting= { "Bienvenidos a nuestra tienda" } />
      <h1>{saludo}</h1>
      <img src={libroescolar} className="imagen" alt="" />
      <img src={libroinfantil} className="imagen" alt="" />
      <img src={librojuvenil} className="imagen" alt="" />
    </div>
  )
}

export default App;
