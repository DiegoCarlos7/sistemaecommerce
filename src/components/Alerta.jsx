import React from "react";


const Alerta = ({ mensagem, tipo }) => {
    return (
        <div className={`alert alert-${tipo} mt-3`} role="alert">
            {mensagem}
        </div>
    );
};
export default Alerta;