import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Logo } from "../../images/script";
import './signup.css'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <main className="register">
            <div className='form-container'>
                <img id="logo" src={Logo} />
                <h2 id='login'>Registro</h2>
                <p>{error}</p>
                <form>
                    <div className='input-field'>
                        <input type='email' id='email'
                            value={email} placeholder='Insira seu email'
                            onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='input-field'>
                        <input type='email' id='email'
                            value={emailConf} placeholder='Confirme seu email'
                            onChange={(e) => setEmailConf(e.target.value)} required />
                    </div>
                    <div className='input-field'>
                        <input type='password' id='password'
                            value={senha} placeholder='Insira sua senha'
                            onChange={(e) => setSenha(e.target.value)} required />
                    </div>
                    
                    <button onClick={handleSignup}>Entrar</button>
                </form>
                <span>Ou entre através das redes sociais</span>
                <div className="footer">
                    <div className="social-fields">
                        <div className="social-field twitter">
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                                Conectar-se com Twitter
                            </a>
                        </div>
                        <div className="social-field facebook">
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                                Conectar-se com Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
  );
};

export default Signup;