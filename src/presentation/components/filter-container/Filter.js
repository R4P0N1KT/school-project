import React, { useState } from "react";
import { Animals } from '../../../domain/factories/animals'
import './filter.css'

export function Filter() {

    const [expand, setIsExpand] = useState(true);

    return (
        <div className="filter-container">
          <h1>Filtro</h1>
          <p>
            <h4>Raça</h4>
            {!expand ? (
              <span
                class="material-symbols-outlined"
                onClick={() => setIsExpand(true)}
                style={{ cursor: "pointer" }}
              >
                expand_less
              </span>
            ) : (
              <span
                class="material-symbols-outlined"
                onClick={() => setIsExpand(false)}
                style={{ cursor: "pointer" }}
              >
                expand_more
              </span>
            )}
          </p>
          {expand == false
            ? Animals.map((prop) => {
                return <p>{prop.race}</p> ;
              })
            : null}
            <p>
            <h4>Sexo</h4>
            {!expand ? (
              <span
                class="material-symbols-outlined"
                onClick={() => setIsExpand(true)}
                style={{ cursor: "pointer" }}
              >
                expand_less
              </span>
            ) : (
              <span
                class="material-symbols-outlined"
                onClick={() => setIsExpand(false)}
                style={{ cursor: "pointer" }}
              >
                expand_more
              </span>
            )}
          </p>
          {expand == false
            ? Animals.map((prop) => {
                return <p>{prop.sex}</p> ;
              })
            : null}
        </div>
    );
}