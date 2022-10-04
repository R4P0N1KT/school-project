import React from "react";
import { Animal1 } from "../../images/script";
import "./generate.css";

function Generate(props) {
  return (
    <div className="scroll-page">
      <h2 id="donation">{props.title}</h2>
      <div className="adoption-animals">
        <br />
        <div className="animal-1">
          <img id="animal-1" src={props.img} />
          <div className="body">
            <h2>{props.name}</h2>
            <div className="description">
              <h3>Descrição</h3>
              <p>
                <strong>Sexo: </strong> {props.sex}
              </p>
              <p>
                <strong>Raça:</strong> {props.race}
              </p>
              <p>
                <strong>Endereço para busca: </strong> {props.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generate;
