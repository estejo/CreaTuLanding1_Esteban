import './navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

const categories = ['Escolar', 'Infantil', 'Juvenil'];

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>

      <ul className="categorias">
        {categories.map(cat => (
          <li key={cat}>
            <Link to={`/category/${cat.toLowerCase()}`}>{cat}</Link>
          </li>
        ))}
      </ul>

      
        <Link to="/cart" style={{ color: '#033', textDecoration: 'none', fontWeight: '500' }}></Link>
        <CartWidget />
      
      </nav>
  );
}

export default NavBar;
