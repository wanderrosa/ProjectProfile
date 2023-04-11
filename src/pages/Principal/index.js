import { Topo } from "../../components/Top";
import Footer from "../../components/Footer";
import "./principal.css";

export default function Principal() {
  return (
    <section className="limite">
      <main>
        <Topo />
        <section className="boxprofile">
          <div className="profile"></div>
          <h1 className="titulo">Wander Junio Carvalho Rosa</h1>
          <p>Desenvolvedor Front-End Web</p>
          <p>Graduado em Analise e Desenvolvimento de Sistemas</p>
        </section>

          <div className="carrossel">
            <div className="boxcardsprincipal" style={{ "--float": "1" }}>
              <section className="card">
                <h2>Skills</h2>
                <ul>
                  <li>html</li>
                  <li>css</li>
                  <li>javascript</li>
                  <li>react</li>
                  <li>github</li>
                </ul>
              </section>
            </div>
            <div className="boxcardsprincipal" style={{ "--float": "2" }}>
              <section className="card">
                <h2>Sobre mim</h2>
                <p>
                  Atualmente, trabalhei como gerente administrativo, e estou em
                  migração de carreira para área de programação, embora seja um
                  desafio por não ter experiência na área, estou muito motivado
                  e busco a cada dia ter os conhecimentos necessários, Estou
                  estudando Javascript e React JS, planejo aprofundar cada vez
                  mais em Front-end que se tornou minha paixão.
                </p>
              </section>
            </div>
            <div className="boxcardsprincipal" style={{ "--float": "3" }}>
              <section className="card ">
                <h2>Contato</h2>
                <nav className="links">
                  <a href="tel:5562994722530">Tel: (62) 99472-2530</a>
                  <a
                    href="mailto:wanderportfolio@gmail.com"
                    rel="noreferrer"
                    target={"_blank"}
                  >
                    Email: wanderportfolio@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/wanderrosa/"
                    rel="noreferrer"
                    target={"_blank"}
                  >
                    LinkeDin: Linkedin/WanderRosa
                  </a>
                  <a
                    href="https://github.com/wanderrosa"
                    rel="noreferrer"
                    target={"_blank"}
                  >
                    GitHub: Github/WanderRosa
                  </a>
                </nav>
              </section>
            </div>
            <div className="boxcardsprincipal" style={{ "--float": "4" }}>
              <section className="card">
                <h2>Status estudo</h2>
                <span>React js</span>
                <progress value={"50"} max={"100"}></progress>
                <span>JavaScript</span>
                <progress value={"70"} max={"100"}></progress>
                <span>HTML</span>
                <progress value={"90"} max={"100"}></progress>
                <span>CSS</span>
                <progress value={"90"} max={"100"}></progress>
              </section>
            </div>
          </div>

        <Footer />
      </main>
    </section>
  );
}
