import { Topo } from "../../components/Top";
import Footer from "../../components/Footer";
import Projetos from "../projetos";
import "./principal.css";
import WindowsSplit from "../../components/WindowsSplit";
import Hability from "../Hability";

export default function Principal() {
  return (
    <section className="limite backgroundmain" >
      <main>
        <Topo />
        <WindowsSplit>
          <section className="boxprofile">
            <div><h1>Olá, sejam bem vindos ao meu espaço criativo!</h1></div>
            <div className="boxtexto"><p>
              Me chamo Wander Rosa, sou desenvolvedor Front-End Web e tenho o
              prazer de compartilhar as minhas tecnicas e criações, todo esse
              ambiente foi criado e desenvolvido por mim, fique avontade para
              desfrutar.
            </p></div>
          </section>
          <section className="boximgprofile">
            <div className="imgprofile"></div>
            <div className="boxicons">
              <a
                href="https://github.com/wanderrosa"
                rel="noreferrer"
                target="_blank"
              >
                <img src="/icons/git.png" alt="git" />
              </a>
              <a
                href="https://www.linkedin.com/in/wanderrosa/"
                rel="noreferrer"
                target="_blank"
              >
                <img src="/icons/linkedin.png" alt="git" />
              </a>
              <a
                href="mailto:wanderportfolio@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <img src="/icons/gmail.png" alt="git" />
              </a>
              <a
                href="https://github.com/wanderrosa"
                rel="noreferrer"
                target="_blank"
              >
                <img src="/icons/whatsapp.png" alt="git" />
              </a>
            </div>
          </section>
        </WindowsSplit>
        <Hability />
        <Projetos />
      </main>
      <Footer />
    </section>
  );
}
