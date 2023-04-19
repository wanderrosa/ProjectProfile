import { Topo } from "../../components/Top";
import Footer from "../../components/Footer";
import Projetos from "../projetos";
import "./principal.css";
import WindowsSplit from "../../components/WindowsSplit";
import Hability from "../Hability";

export default function Principal() {
  return (
    <section className="limite">
      <main>
        <Topo />
        <WindowsSplit>
          <section className="boxprofile">
            <h1>Olá, sejam bem vindos ao meu espaço criativo!</h1>
            <p>
              Me chamo Wander Rosa, sou desenvolvedor Front-End Web e tenho o
              prazer de compartilhar as minhas tecnicas e criações, todo esse
              ambiente foi criado e desenvolvido por mim, fique avontade para
              desfrutar.
            </p>
          </section>
          <section className="boximgprofile">
            <div className="imgprofile"></div>
            <div className="boxicons">
              <img src="/icons/git.png" alt="Git" />
              <img src="/icons/linkedin.png" alt="Linkedin" />
              <img src="/icons/gmail.png" alt="Gmail" />
              <img src="/icons/whatsapp.png" alt="Whatsapp" />
            </div>
          </section>
        </WindowsSplit>
        <Hability/>
        <Projetos />
      </main>
      <Footer />
    </section>
  );
}
