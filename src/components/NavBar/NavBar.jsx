import logo from "../../assets/img/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import './navbar.css';

const NavBar = () => {

    return (
        <nav className="navbar">
            <img src={logo} className="logo" alt="" />

            <ul className="categorias">
                <li>Escolar</li>
                <li>Infantil</li>
                <li>Juvenil</li>
            </ul>
            <CartWidget />
        </nav>
    );

};

export default NavBar;