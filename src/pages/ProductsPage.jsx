import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Alerta from "../components/Alerta";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const produtos = [
    { id: 1, nome: "Bola de Futebol", preco: 120, imagem: "https://goroller.com.br/cdn/shop/files/bolafutebolmare.webp?v=1708607537&width=1800" },
    { id: 2, nome: "Raquete de Tênis", preco: 450, imagem: "https://images.tcdn.com.br/img/img_prod/589314/raquete_de_tenis_wilson_clash_100_v2_16x19_295g_4569_1_d5a6bbd9b5a40c1db06159ce157dbb74_20240515175833.jpg" },
    { id: 3, nome: "Camisa do Flamengo 2024", preco: 350, imagem: "https://flamengo.vteximg.com.br/arquivos/ids/169041-1000-1000/IP8202_1_APPAREL_Photography_Front-View_white.jpg?v=638416199004600000" },
    { id: 4, nome: "Tênis de Corrida", preco: 350, imagem: "https://itapua.vteximg.com.br/arquivos/ids/1725217-1000-1000/image-06e80bcfcfe543b9ad199e79ae7b45cf.jpg?v=638105894002700000" },
    { id: 5, nome: "Mochila Esportiva", preco: 200, imagem: "https://images.tcdn.com.br/img/img_prod/778310/mochila_esportiva_impermeavel_trilhas_viagens_academia_191_1_5ff83248dc90f5cd6fede4caae0f16e5.jpg" },
    { id: 6, nome: "Luvas de Boxe", preco: 300, imagem: "https://vollo.vtexassets.com/arquivos/ids/159069-800-auto?v=638031770686500000&width=800&height=auto&aspect=true" },
    { id: 7, nome: "Halteres Ajustáveis", preco: 400, imagem: "https://m.media-amazon.com/images/I/61tc4ME+y9L._AC_SX679_.jpg" },
    { id: 8, nome: "Caneleiras de Treino", preco: 100, imagem: "https://images.tcdn.com.br/img/img_prod/1042861/kit_de_caneleiras_tornozeleiras_poliester_pares_de_1kg_2kg_3kg_e_5kg_165_1_8b9ef206dba1987fb8a8296413d548bc.jpg" },
    { id: 9, nome: "Chuteira Profissional", preco: 300, imagem: "https://cdn.bnws3.com.br/b2online.com.br/image/cache/data/produtos/puma/chuteiras/chuteira-campo-puma-future-7-play-neymar-jr-fg-ag-bdp-masculina-coral---azul-11618-24-07-02-485x485.jpg" },
    { id: 10, nome: "Rede de Vôlei",mpreco: 200, imagem: "https://decathlonstore.vtexassets.com/unsafe/1256x1256/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F2530877-628-628%2Frede-volei-de-praia-bvn9004.jpg%3Fv%3D637218743425330000" },
    { id: 11, nome: "Corda de Pular", preco: 25, imagem: "https://muvin.com.br/cdn/shop/products/corda-de-pular-ajustavel-new-azul.jpg?v=1643806921" },
    { id: 12, nome: "Tapete de Yoga", preco: 100, imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_964346-MLU72680687679_112023-F.webp" },
    { id: 13, nome: "Barraca para Camping", preco: 800, imagem: "https://m.media-amazon.com/images/I/614SirH+ItL._AC_SX679_.jpg" },
    { id: 14, nome: "Kit de Natação (óculos e touca)", preco: 150, imagem: "https://images.tcdn.com.br/img/img_prod/289123/kit_natacao_speedo_oculos_hydrovision_touca_flat_silicone_208777_1_911125ac44d736f1438fae6eb29cfcd5.jpg" },
];


const ProductsPage = () => {
    const { isAuthenticated, addOrder } = useContext(AuthContext);
    const [mensagem, setMensagem] = React.useState(null);

    const location = useLocation();
    const mensagemCompra = location.state?.mensagemCompra;

    const handleProdutoClick = (produto) => {
        if (!isAuthenticated()) {
            setMensagem("Você precisa estar logado para adicionar produtos ao carrinho.");
        } else {
            addOrder(produto);
            setMensagem(`Produto "${produto.nome}" adicionado ao carrinho.`);
        }

        setTimeout(() => setMensagem(null), 3000); 
    };

    return (
        <div className="container">
            <h1>Produtos Esportivos</h1>
            {mensagem && <Alerta mensagem={mensagem} tipo="info" />}
            <div className="row">
                {produtos.map((produto) => (
                    <div key={produto.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img
                                src={produto.imagem}
                                className="card-img-top"
                                alt={produto.nome}
                                style={{ width: "300px", height: "300px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{produto.nome}</h5>
                                <p className="card-text">Preço: R$ {produto.preco}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleProdutoClick(produto)}
                                >
                                    Adicionar ao Carrinho
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;