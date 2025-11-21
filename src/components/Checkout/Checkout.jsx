import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { createOrder } from '../../db/db';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useCartContext();
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleConfirm = async () => {
        if (cart.length === 0) return;
        setLoading(true);
        const order = {
            buyer: { name: 'Nombre Apellido', email: 'email@ejemplo.com' },
            items: cart,
            total: totalPrice
        };
        try {
            const id = await createOrder(order);
            setOrderId(id);
            clearCart();
        } catch (err) {
            console.error('Error creando orden', err);
            alert('Hubo un error al procesar la orden.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Cargando...</p>;

    if (orderId) {
        return (
            <div className="checkout-success">
                <h2>Compra realizada</h2>
                <p>ID de la orden: <strong>{orderId}</strong></p>
                <Link to="/">Volver al inicio</Link>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="checkout-empty">
                <h2>🛒 No hay productos en el carrito</h2>
                <button onClick={() => navigate('/')}>Ir al catálogo</button>
            </div>
        );
    }

    return (
        <div className="checkout">
            <h2>Finalizar compra</h2>
            <p>Total a pagar: <strong>${totalPrice}</strong></p>
            <button onClick={handleConfirm}>Confirmar compra</button>
        </div>
    );
};

export default Checkout;
