import React from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Animal1, Logo, Cart, Sponssors, LoginImage, Nos } from "../../images/script";
import './home.css'
import Generate from '../../components/generate-pets/Generate'
import {Animals} from '../../domain/factories/animals';

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  console.log('Pets: ', Animals[0])

  return (
    <main className="container">

        <div className="true-page">
                <div className="top-page">
                    <img id="logo" src={Logo} />
                    <div className="images-control">
                    <Link to='products'><img src={Cart} /><p>Produtos</p></Link>
                    <Link to='about'><img src={Nos} /><p>Quem somos nós?</p></Link>
                    <Link to='sponsors'><img src={Sponssors} /><p>Patrocinadores</p></Link>
                    <Link>
                        <img src={LoginImage} onClick={() => [signout(), navigate('/signin')]}/>
                        <p className="login1">Logout</p>
                    </Link>
                    </div>
                </div>
                {Animals.map((prop) => {
                    return(
                        <Generate title={prop.title} img={prop.img} name={prop.name} sex={prop.sex} race={prop.race} address={prop.address}/>
                    )
                })}
                <div style={{ marginBottom: "50px" }}></div>
            </div>
    </main>
  );
};

export default Home;