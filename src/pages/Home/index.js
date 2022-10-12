import React, { useState } from "react";
import { LoginImage, Logo, Search } from "../../images/script";
import { useNavigate } from "react-router-dom";
import { Popups } from "../../domain/factories/popups";
import Buttons from "../../components/generate-top-buttons/Buttons";
import useAuth from "../../hooks/useAuth";
import AnimalsContainer from "../../presentation/components/animals-container/Animals-container";
import { Filter } from "../../presentation/components/filter-container/Filter";
import "./home.css";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

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
          <Filter/>
          <AnimalsContainer />
      </main>
    </div>
  );
};

export default Home;
