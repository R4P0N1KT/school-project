import "./about.css";
import { Nos, Logo, Home } from "../../images/script";
import { Team } from "../../domain/factories/team";
import { GenerateTeam } from "../../presentation/components/generate-team/GenerateTeam";
import { useNavigate } from "react-router-dom";

export default function About() {

  const navigate = useNavigate();

  return (
    <main className="about-container">
      <div className="about-us-top">
        <a onClick={() => navigate('/')}>
          <img src={Home} />
          <p>Home</p>
        </a>
      </div>
      <div className="about-us-middle">
        <img src={Logo} />
        <p id="description">
          O projeto iPet tem como principal objetivo ajudar todas as ONGs /
          lugares de adoção de animais, podendo ser todos os tipos de bichinhos,
          em que precisam de uma nova casa. Além disso, projeto serve como ponte
          para diversas doações diminuindo a quantidade de animais desabrigados
          e aumentando a felicidade de cada vez mais famílias. O iPet foi criado
          apartir de um projeto do Colégio Empreender. Nossa equipe é formada
          por três capitães, sendo eles:
          <br />
          <br /> 
        </p>
        <div className="team-container">
          {Team.map((prop) => {
            return (
              <GenerateTeam
                img={prop.img}
                name={prop.name}
                description={prop.description}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
