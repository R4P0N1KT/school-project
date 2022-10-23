import React from "react";
import useAuth from "../../hooks/useAuth";
import AnimalsContainer from "../../presentation/components/animals-container/animal-container/Animal-container";
import { LoginImage, Logo, Nos } from "../../images/script";
import { useNavigate } from "react-router-dom";
import { Cart } from "../../images/script";
import "./home.css";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <div className="top-page">
        <img id="logo" src={Logo} />
        <div className="images-control">
          <p className="products" onClick={() => navigate("/products")}>
            <a
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={Cart} /> Products
            </a>
          </p>
          <p className="about us" onClick={() => navigate("/about-us")}>
            <a
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={Nos} /> About Us
            </a>
          </p>

          <p className="sponsors" onClick={() => navigate("/sponsors")}>
            <a
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={Cart} /> Sponsors
            </a>
          </p>

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
        <AnimalsContainer />
      </main>
    </div>
  );
};

export default Home;
