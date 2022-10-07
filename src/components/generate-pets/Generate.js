import React from "react";
import "./generate.css";

function Generate(props) {
  return (
    <>
      <div className="adoption-animals">
      <br/>
        <div className="animals">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Generate;
