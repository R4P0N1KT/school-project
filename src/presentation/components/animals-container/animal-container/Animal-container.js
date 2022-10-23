import React, { useState } from "react";
import { Animals } from "../../../../domain/factories/animals";
import Generate from "../../generate-pets/Generate";
import "./animal-container.css";

export default function AnimalsContainer() {
  const [expand, setIsExpand] = useState(true);
  const [expands, setIsExpands] = useState(true);

  const [search, setSearch] = useState("");

  const lowerSearch = search.toLowerCase();

  const Filter = Animals.filter((animal) =>
    animal.race.toLowerCase().includes(lowerSearch)
  );

  return (
    <main className="animal-container">
      <h1>
        <u>Animais para adoção</u>
      </h1>
      <div className="sub-container">
        <div className="filter-container">
          <div className="top-filter">
            <h2>Filtro</h2>
            <input
              type="text"
              value={search}
              placeholder="EX: BORDIER COLLIE"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
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
            ? Filter.map((animal) => {
                return (
                  <p id="check" onClick={() => setSearch(animal.race)}>{animal.race}</p>
                );
              })
            : null}
          <p>
            <h4>Sexo</h4>
            {!expands ? (
              <span
                class="material-symbols-outlined"
                onClick={() => setIsExpands(true)}
                style={{ cursor: "pointer" }}
              >
                expand_less
              </span>
            ) : (
              <span
                class="material-symbols-outlined"
                onClick={() => setIsExpands(false)}
                style={{ cursor: "pointer" }}
              >
                expand_more
              </span>
            )}
          </p>
          {expands == false
            ? Filter.map((animal) => {
                return (
                  <p id="check" onClick={() => setSearch(animal.sex)}>
                    {animal.sex}
                  </p>
                );
              })
            : null}
        </div> <br/>
        <div className="animals-organization">
          {Filter.map((prop) => {
            return (
              <Generate
                img={prop.img}
                name={prop.name}
                sex={prop.sex}
                race={prop.race}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
