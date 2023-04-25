import { useState } from "react";
import Card from "../../components/Card";

import "./hability.css";
const Hability = () => {
  const [IdArray, setIdArray] = useState("0");
  const Array = [
    {
      title: "html",
      texto: "novo texto",
    },
    {
      title: "css",
      texto: "novo texto",
    },
    {
      title: "javascripit",
      texto: "novo texto",
    },
    {
      title: "react js",
      texto: "novo texto",
    },
    {
      title: "git",
      texto: "novo texto",
    }
  ];
  function trocaarray(i) {
    const id = i;
    if (IdArray !== id) {
      setIdArray(id);
      console.log(id);
    }
  }
  return (
    <section id="Habilidade" className="secaohability">
      <h2 className="textwhite">Habilidades</h2>
      <div className="boxcardshability">
        <Card titles={Array[IdArray].title} text={Array[IdArray].texto}></Card>
        <div className="navmenuhability">
          <button onClick={() => trocaarray("0")}>html</button>
          <button onClick={() => trocaarray("1")}>css</button>
          <button onClick={() => trocaarray("2")}>javascripit</button>
          <button onClick={() => trocaarray("3")}>react</button>
          <button onClick={() => trocaarray("4")}>git</button>
        </div>
      </div>
    </section>
  );
};
export default Hability;
