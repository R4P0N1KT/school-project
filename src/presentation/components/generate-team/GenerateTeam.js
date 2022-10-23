import React from "react"
import './generateTeam.css'

export const GenerateTeam = (props) => {
    return (
        <main className="generate-container">
            <div className="workers">
                <img src={props.img} />
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </main>
    )
}