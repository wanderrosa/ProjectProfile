import { useState } from "react";
import { Link } from "react-router-dom";
import "./top.css";
export function Topo() {
  const [navebar, setNaveBar] = useState("esconde");
  const muda = () => {
    if (navebar === "esconde") {
      setNaveBar("mostrar");
    } else {
      setNaveBar("esconde");
    }
  };
  return (
    <section id='Home' className="limite">
      <div className="topo">
        <nav>
          <a href="#Home" className="link">
            Home
          </a>
          <a href='#Habilidade'className="link" a>
            Habilidades
          </a>
          <a href="#Projetos" className="link" id="projetos">
          Meus Projetos
          </a>
        </nav>
        <button onClick={muda}>
        </button>
      </div>
    </section>
  );
}
