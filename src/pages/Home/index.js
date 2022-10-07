import React, { useState } from "react";
import { LoginImage, Logo, Search } from "../../images/script";
import { Animals } from "../../domain/factories/animals";
import { useNavigate } from "react-router-dom";
import { Popups } from "../../domain/factories/popups";
import Buttons from "../../components/generate-top-buttons/Buttons";
import Generate from "../../components/generate-pets/Generate";
import useAuth from "../../hooks/useAuth";
import "./home.css";
import { ArrowDown } from "../../assets/icons";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const [expand, setIsExpand] = useState(false);

  return (
    <div>
      <div className="top-page">
        <img id="logo" src={Logo} />
        <div className="images-control">
          {Popups.map((prop) => {
            return <Buttons title={prop.title} img={prop.img} />;
          })}
          <p
            className="login1"
            onClick={() => [signout(), navigate("/signin")]}
          >
            <img src={LoginImage} />
            Logout
          </p>
        </div>
      </div>
      <main className="container">
        <div className="filter-container">
          <h1>Filtro</h1>
          <p>
            Raça{" "}
            {!expand ? (
              <span
                class="material-symbols-outlined"
                onClick={() => setIsExpand(true)}
                style={{ cursor: "pointer" }}
              >
                expand_more
              </span>
            ) : (
              <span
                class="material-symbols-outlined"
                onClick={() => setIsExpand(false)}
                style={{ cursor: "pointer" }}
              >
                expand_less
              </span>
            )}
          </p>
          {Animals.map((prop) => {
            return <p>{prop.race}</p>;
          })}
        </div>
        <div className="animal-container">
          <h1>Animais para adoção</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
