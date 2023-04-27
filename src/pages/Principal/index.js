import { Topo } from "../../components/Top";
import Footer from "../../components/Footer";
import Projetos from "../projetos";
import "./principal.css";
import Hability from "../Hability";

export default function Principal() {
  return (
    <main  id='Home' className="limite">
        <Topo />
        <section className="secaoprofile limite">
          <section className="boxprofile limite">
            <div className="boxtitulo ">
              <h1>Olá, sejam bem vindos ao meu espaço criativo!</h1>
            </div>
            <div className="boxtexto">
              <p>
                Me chamo Wander Rosa, sou desenvolvedor Front-End Web e tenho o
                prazer de compartilhar as minhas tecnicas e criações, todo esse
                ambiente foi criado e desenvolvido por mim, fique avontade para
                desfrutar.
              </p>
            </div>
          </section>
          <section className="boximgprofile limite">
            <div className="imgprofile"></div>
            <div className="boxicons ">
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
                href="https://api.whatsapp.com/send?phone=5562994722530&text=Seu%20portfolio%20foi%20visto%20em:%20(colocar%20nome%20da%20cidade/estado),%20parab%C3%A9ns%20continue%20evoluindo.%F0%9F%91%8F"
                rel="noreferrer"
                target="_blank"
              >
                <img src="/icons/whatsapp.png" alt="git" />
              </a>
            </div>
          </section>
        </section>
        <Hability />
        <Projetos />
      <Footer />
    </main>
  );
}
