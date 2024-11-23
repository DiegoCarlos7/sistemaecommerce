import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]); // Estado para armazenar os pedidos

    const login = (userInfo) => setUser(userInfo);
    const logout = () => setUser(null);

    const isAuthenticated = () => user !== null;

    const addOrder = (produto) => {
        setOrders((prevOrders) => [...prevOrders, produto]);
    };

    const clearOrders = () => {
        setOrders([]);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated,
                orders,
                addOrder,
                clearOrders,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};