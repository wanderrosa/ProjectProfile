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
    <section className="limite">
      <div className="topo">
        <nav>
          <Link className="link" to={"/"}>
            Home
          </Link>
          <Link className="link" to={"/Projetos"}>
          Meus Projetos
          </Link>
        </nav>
        <button onClick={muda}>
          <div className="trasso1"></div>
          <div className="trasso2"></div>
          <div className="trasso3"></div>
        </button>
      </div>
    </section>
  );
}
