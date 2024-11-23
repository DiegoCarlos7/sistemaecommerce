import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Alerta from "../components/Alerta";
import Loading from "../components/Loading";

const LoginPage = () => {
    const { login } = useContext(AuthContext);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginSenha, setLoginSenha] = useState("");

    const [cadNome, setCadNome] = useState("");
    const [cadEmail, setCadEmail] = useState("");
    const [cadSenha, setCadSenha] = useState("");
    const [mensagem, setMensagem] = useState(null);
    const [tipo, setTipo] = useState(null);
    const [isLoading] = useState(false);

    const [usuarios, setUsuarios] = useState([]);

    const handleLogin = (e) => {
        e.preventDefault();
        const usuario = usuarios.find(
            (u) => u.email === loginEmail && u.senha === loginSenha
        );

        if (usuario) {
            setMensagem("Login realizado com sucesso!");
            setTipo("success");
            login(usuario.nome);
        } else {
            setMensagem("Credenciais inválidas!");
            setTipo("danger");
        }
    };

    const handleCadCliente = (e) => {
        e.preventDefault();

        if (!cadNome || !cadEmail || !cadSenha) {
            setMensagem("Todos os campos são obrigatórios!");
            setTipo("danger");
            return;
        }

        const usuarioExistente = usuarios.find((u) => u.email === cadEmail);

        if (usuarioExistente) {
            setMensagem("E-mail já cadastrado!");
            setTipo("danger");
            return;
        }

        const novoUsuario = { nome: cadNome, email: cadEmail, senha: cadSenha };
        setUsuarios([...usuarios, novoUsuario]);

        setMensagem("Usuário cadastrado com sucesso!");
        setTipo("success");


        setCadNome("");
        setCadEmail("");
        setCadSenha("");
    };

    return (
        <div className="container mt-5">
            <h2>Login 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                </svg>         
             </h2>
            {mensagem && <Alerta mensagem={mensagem} tipo={tipo} />}
            {isLoading && <Loading />}
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">
                        E-mail
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="loginEmail"
                        placeholder="Digite seu e-mail"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="loginSenha" className="form-label">
                        Senha
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="loginSenha"
                        placeholder="Digite sua senha"
                        value={loginSenha}
                        onChange={(e) => setLoginSenha(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                    <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                    </svg> 
                </button>
            </form>

            <hr />

            <h2>Cadastro de Cliente
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"/>
                <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                </svg>  
            </h2>
            <form onSubmit={handleCadCliente}>
                <div className="mb-3">
                    <label htmlFor="cadNome" className="form-label">
                        Nome
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="cadNome"
                        placeholder="Digite seu nome"
                        value={cadNome}
                        onChange={(e) => setCadNome(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cadEmail" className="form-label">
                        E-mail
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="cadEmail"
                        placeholder="Digite seu e-mail"
                        value={cadEmail}
                        onChange={(e) => setCadEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cadSenha" className="form-label">
                        Senha
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="cadSenha"
                        placeholder="Digite sua senha"
                        value={cadSenha}
                        onChange={(e) => setCadSenha(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Cadastrar
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"/>
                    <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                    </svg> 
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
