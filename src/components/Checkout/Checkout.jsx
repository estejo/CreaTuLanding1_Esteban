import { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../db/db";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./checkout.css"

const Checkout = () => {
   const { cart, getTotalPrice, clearCart } = useContext(CartContext);
   const navigate = useNavigate();

    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [orderId, setOrderId] = useState(null);

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const order = {
                buyer,
                items: cart,
                total: getTotalPrice(),
                date: new Date(),
            };

            const orderCollection = collection(db, "orders");
            const docRef = await addDoc(orderCollection, order);

            setOrderId(docRef.id);
        } catch (error) {
            console.error("Firebase error:", error);
            alert("Hubo un error guardando la orden.");
        }
    };

    return (
        <div className="checkout-container">
            <h2>Finalizar compra</h2>

            {orderId ? (
                <div className="success-message">
                    <h3>¡Gracias por tu compra! 🎉</h3>
                    <p>Tu número de orden es:</p>
                    <strong>{orderId}</strong>

                    <button 
                        className="btn btn-primary mt-3" 
                        onClick={() => {
                            clearCart();
                            navigate("/");
                        }}
                    >
                        Volver al inicio
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="checkout-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre completo"
                        value={buyer.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={buyer.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Teléfono"
                        value={buyer.phone}
                        onChange={handleChange}
                        required
                    />

                    <p>Total a pagar: <strong>${getTotalPrice()}</strong></p>

                    <button type="submit" className="btn btn-success">
                        Generar orden
                    </button>
                </form>
            )}
        </div>
    );
};

export default Checkout;

