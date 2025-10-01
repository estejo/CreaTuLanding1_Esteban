import carrito from "../../assets/img/carrodecompras.png"
import './cartwidget.css'

const CartWidget = () => {
    return (
        <div className="carritocss">
            <img src={carrito} alt="" />
            <p>0</p>
        </div>
    )
}

export default CartWidget;