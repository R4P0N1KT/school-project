import React from "react";
import { Animals } from "../../../domain/factories/animals";
import Generate from "../generate-pets/Generate";
import "./animal-container.css";

export default function AnimalsContainer() {
  return (
    <div className="animal-container">
      <h1>Animais para adoção</h1>
      {Animals.map((prop) => {
        return <Generate img={prop.img} name={prop.name} race={prop.race} />;
      })}
    </div>
  );
}
