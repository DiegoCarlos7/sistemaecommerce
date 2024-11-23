import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';
import Navbar from './components/NavBar';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/orders" element={<OrdersPage />} />
            </Routes>
        </>
    );
}

export default App;