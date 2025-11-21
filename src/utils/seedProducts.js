import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";

const products = [
    { id: '1', title: 'El diario de Pilar', price: 24500, category: 'Infantil', description: 'A Pilar le encanta explorar el mundo, pero esta vez el viaje tiene un sabor especial: ¡una carta le revela que tiene una abuela en México! ', stock: 10, image: '/public/eldiariodepilar.JPG' },
    { id: '2', title: 'Dinosaurios contra alienigenas', price: 29800, category: 'Infantil', description: 'Hace millones de años, nuestro planeta estaba dominado por criaturas enormes, majestuosas, ¡extraordinarias! LOS DINOSAURIOS.', stock: 10, image: '/public/dinosaurios.JPG' },
    { id: '3', title: 'Caro dice', price: 20900, category: 'Juvenil', description: 'Una historia de amor online, para leer, chatear y enamorarse.', stock: 10, image: '/public/carodice.jpg' },
    { id: '4', title: 'RAINBOW BRIDGE PLUS 4', price: 27400, category: 'Escolar', description: 'Children will love exploring the lively, magical world of Bridge Town with their new friends Poppy, Rowan and Fern.', stock: 10, image: '/public/rainbowbridge.JPG' },
    { id: '5', title: '¿Dónde están las emociones?', price: 19900, category: 'Infantil', description: 'Adéntrate en los escenarios más fascinantes con Alegría, Tristeza, Ansiedad, Envidia y las demás Emociones que guiarán a Riley en su día a día. ', stock: 10, image: '/public/intensamente.JPG' },
    { id: '6', title: 'El mapa qe me lleva a ti', price: 29900, category: 'Juvenil', description: 'Cuando Heather emprendió unas vacaciones en tren por Europa con sus amigas, no era el momento en que esperaba conocer a Jack. ', stock: 10, image: '/public/elmapa.JPG' },
    { id: '7', title: 'Historia', price: 42500, category: 'Escolar', description: 'Una propuesta de Silvia Vázquez de Fernández, profesora de Historia, posgraduada en Metodología de la investigación en Ciencias Sociales. ', stock: 10, image: '/public/historia.JPG' },
    { id: '8', title: 'Un verano en NY', price: 31999, category: 'Juvenil', description: 'Elle es guionista y tiene veintisiete años. Cuando le ofrecen la oportunidad de escribir el guion de una película de alto presupuesto solo tiene un problema: su mente está completamente bloqueada y debe entregarlo al final del verano.', stock: 10, image: '/public/unveranoenny.JPG' }
];

const seedProducts = async () => {
    try {
        const productsRef = collection(db, "products");
        products.map( async ({id, ...dataProduct} ) => {
            await addDoc(productsRef, dataProducts);
        });
        console.log("Productos subidos correctamente");
    } catch (error) {
        console.log(error);
    }
}

seedProducts();
