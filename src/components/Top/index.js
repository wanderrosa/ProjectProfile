import { useState } from "react";
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
    <section className="limite">
      <div className="topo">
        
        <nav>
          <a href="#Home" className="link">
            Home
          </a>
          <a href="#Habilidade" className="link" a>
            Habilidades
          </a>
          <a href="#Projetos" className="link" id="projetos">
            Meus Projetos
          </a><button>
            <div className="trasso1"></div>
            <div className="trasso1"></div>
            <div className="trasso1"></div>
          </button>
        </nav>
      </div>
    </section>
  );
}
