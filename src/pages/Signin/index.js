import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Logo } from "../../images/script";
import './signin.css'

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email | !senha) {
      setError("Preencha todos os campos");

      

      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/");
  };

  return (
    <main className="login">
            <div className='form-container'>
            <img id="logo" src={Logo} />
            <h2 id='login'>Login</h2>
            <p>{error}</p>
            <form>
                <div className='input-field'>
                    <input type='email' id='email'
                    value={email} placeholder='Insira seu email'
                    onChange={(e) => [setEmail(e.target.value), setError("")]} required/>
                </div>
                <div className='input-field'>
                    <input type='password' id='password'
                    value={senha} placeholder='Insira sua senha'
                    onChange={(e) => [setSenha(e.target.value), setError("")]} required/>
                </div>
                <button onClick={handleLogin}>Entrar</button>
            </form>
            <div className='footer'>
                Não possue conta? <Link to='/signup'><strong> Registre-se aqui!</strong></Link>
            </div>
            </div>
      </main>
  );
};

export default Signin;