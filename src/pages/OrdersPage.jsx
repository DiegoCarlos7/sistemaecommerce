import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const OrdersPage = () => {
    const { orders, clearOrders } = useContext(AuthContext);
    const navigate = useNavigate();

    const total = orders.reduce((acc, item) => acc + item.preco, 0);

    const handleConfirmPurchase = () => {
        clearOrders();
        navigate("/products", { state: { mensagemCompra: "Obrigado pela sua compra!" } });
    };

    return (
        <div className="container">
            <h1>Seus Pedidos</h1>
            {orders.length === 0 ? (
                <p className="text-muted">Você ainda não adicionou nenhum produto ao carrinho.</p>
            ) : (
                <>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Produto</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{order.nome}</td>
                                    <td>R$ {order.preco}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>Total: R$ {total}</h3>
                    <button className="btn btn-success" onClick={handleConfirmPurchase}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
                        <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg> Confirmar Compra
                    </button>
                </>
            )}
        </div>
    );
};

export default OrdersPage;