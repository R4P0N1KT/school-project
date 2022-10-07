import React from "react";
import { LoginImage, Logo, Search } from "../../images/script";
import { Animals } from '../../domain/factories/animals';
import { useNavigate } from "react-router-dom";
import { Popups } from "../../domain/factories/popups";
import Buttons from "../../components/generate-top-buttons/Buttons";
import Generate from '../../components/generate-pets/Generate';
import useAuth from "../../hooks/useAuth";
import './home.css';

const Home = () => {

    const { signout }= useAuth();
    const navigate = useNavigate();

  return (
    <main className="container">
            <div className="top-page">
                <img id="logo" src={Logo} />
                <div className="images-control">
                    {Popups.map((prop) => {
                        return (    
                            <Buttons title={prop.title} img={prop.img} />
                        );
                    })}
                        
                    <p className="login1" onClick={() => [signout(), navigate('/signin')]}>
                        <img src={LoginImage}/>
                        Logout
                    </p>
                </div>
            </div>
            <div className="scroll-page"> <br/>
                <div className="filter-animal">
                    <h1>Filtro</h1>
                    <div className="search-input">
                        <input type='text' placeholder="Filtre as características do pet" />
                        <button><img src={Search} /></button>
                    </div>
                </div>
                <div className="animal-scroll">
                    <h1>Animais para adoção</h1> <br />
                    {Animals.map((prop) => {
                        return(
                            <Generate title={prop.title} img={prop.img} name={prop.name} sex={prop.sex} race={prop.race} address={prop.address}/>
                        )
                    })}
                </div>
                <div style={{ marginBottom: "50px" }} />
            </div>
    </main>
  );
};

export default Home;