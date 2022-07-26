import { Frields } from "./frields";
import { Main } from "./home";
import { KnowLedge } from "./knowledge";
import { Project } from "./project";
import { Service } from "./service";
import { Who } from "./who";
import { ToastContainer } from 'react-nextjs-toast'
import { toast } from 'react-nextjs-toast'
import styles from './styles.module.scss'

import Ui from '../../../public/images/ui.svg'
import Desen from '../../../public/images/code.svg'
import Responsive from '../../../public/images/mobile.svg'

export function HomePage() {

    function HandleCopyProfile() {
        const name = "Matheus Ferreira#2331"
        navigator.clipboard.writeText(name)

      toast.notify(name, {
            duration: 5,
            type: "success",
            title: "Usuario Copiado!",
          })
    }

    function HandleCopyProfileTwo() {
        const name = "Gabriel Santos#4770"
        navigator.clipboard.writeText(name)

      toast.notify(name, {
            duration: 5,
            type: "success",
            title: "Usuario Copiado!",
          })
    }


    function HandleCopyProfileTheree() {
        const name = "Zinno#6545"
        navigator.clipboard.writeText(name)

      toast.notify(name, {
            duration: 5,
            type: "success",
            title: "Usuario Copiado!",
          })
    }

    function HandleCopyProfileFour() {
        const name = "zGetzinho#0001"
        navigator.clipboard.writeText(name)

      toast.notify(name, {
            duration: 5,
            type: "success",
            title: "Usuario Copiado!",
          })
    }

    function HandleCopyProfileFive() {
        const name = "nunokkj#0003"
        navigator.clipboard.writeText(name)

      toast.notify(name, {
            duration: 5,
            type: "success",
            title: "Usuario Copiado!",
          })
    }

    function HandleCopyProfileSix() {
        const name = "DevLight#4136"
        navigator.clipboard.writeText(name)

      toast.notify(name, {
            duration: 5,
            type: "success",
            title: "Usuario Copiado!",
          })
    }

    function HandleCopyProfileSeven() {
        const name = "Fabrício Aquiles#6083"
        navigator.clipboard.writeText(name)

      toast.notify(name, {
            duration: 5,
            type: "success",
            title: "Usuario Copiado!",
          })
    }

    function HandleCopyProfileEight() {
        const name = "UNARAK#9538"
        navigator.clipboard.writeText(name)

      toast.notify(name, {
            duration: 5,
            type: "success",
            title: "Usuario Copiado!",
          })
    }

    return (
        <>
            <main className={styles.main}>
                <section className={styles.home} id='about_me'>
                    <div className={styles.grid}>
                        <Main 
                            name="Ola, meu nome e"
                            title="Nelis Santiago"
                            typeWriter="<strong>Front-End </strong>Developer && Ui Designer."
                            link="https://instagram.com/nelis_code"
                        />
                    </div>
                </section>

                <section className={styles.who} id="who">
                    <div className={styles.grid} data-aos="fade-up">
                        <Who 
                            who="Quem sou?"
                            profile="https://github.com/slaidezera.png"
                            title="
                            Olá, meu nome e Nelis Santiago, sou freelancer como Front-end developer && Ui designer, desenvolvo aplicaçoes de alto nivel concentrado em performance, detalhes e responsivo."
                        />
                    </div>
                </section>

                <section className={styles.service}>
                    <div className={styles.grid} data-aos="fade-up">
                    <h2>Serviços<span>.</span></h2>
                    <div className={styles.ServiceContent}>
                        <Service title="Em breve" paragraph="Pegue o café e espere um momento, estou desenvolvendo o projeto" logo={Ui} />
                        <Service title="Em breve" paragraph="Pegue o café e espere um momento, estou desenvolvendo o projeto" logo={Desen} />
                        <Service title="Em breve" paragraph="Pegue o café e espere um momento, estou desenvolvendo o projeto" logo={Responsive} />
                    </div>
                    </div>
                </section>
                <section className={styles.project}>
                    <div className={styles.grid} data-aos="fade-up">
                    <h2>Projetos<span>.</span></h2>
                    <div className={styles.Projectcontent}>
                        <Project title="Em Breve" paragraph="Pegue o café e espere um momento, estou desenvolvendo o projeto." />
                        <Project title="Em Breve" paragraph="Pegue o café e espere um momento, estou desenvolvendo o projeto." />
                        <Project title="Em Breve" paragraph="Pegue o café e espere um momento, estou desenvolvendo o projeto." />
                    </div>
                    </div>
                </section>
                <section className={styles.Frields} id="frields">
                    <div className={styles.grid} data-aos="fade-up">
                    <h2>Amigos<span className={styles.span}>.</span></h2>
                    <div className={styles.content}>
                        <Frields name="Matheus Ferreira" profissao="Developer Full Stack" avatar="https://github.com/zMatheusPro.png" href="https://instagram.com" buttonCopy="Discord" copy={HandleCopyProfile} />
                        <Frields name="Gabriel Santos" profissao="Developer Bukkit" avatar="https://github.com/gabrielbs21.png" href="https://instagram.com" buttonCopy="Discord" copy={HandleCopyProfileTwo} />
                        <Frields name="Zinno" profissao="Design" avatar="https://github.com/Zinnoberanjos.png" href="https://instagram.com" buttonCopy="Discord" copy={HandleCopyProfileTheree} />
                        <Frields name="zGetzinho" profissao="Ethical Hacking" avatar="https://github.com/zGetzinho.png" href="https://instagram.com" buttonCopy="Discord" copy={HandleCopyProfileFour} />
                        <Frields name="nunokkj" profissao="Sem Profissão" avatar="https://github.com/Nuno001.png" href="https://instagram.com" buttonCopy="Discord" copy={HandleCopyProfileFive} />
                        <Frields name="Caio Vinicius" profissao="Developer Bukkit" avatar="https://github.com/LightPlayBR.png" href="https://instagram.com" buttonCopy="Discord" copy={HandleCopyProfileSix} />
                        <Frields name="Fabricio Aquiles" profissao="Developer Full Stack" avatar="https://github.com/fabricioaquiles.png" href="https://instagram.com" buttonCopy="Discord" copy={HandleCopyProfileSeven} />
                        <Frields name="UNARACK" profissao="Sem Profissão" avatar="https://github.com/UNARAK.png" href="https://instagram.com" buttonCopy="Discord" copy={HandleCopyProfileEight} />
                    </div>
                    </div>
                </section>
                <section className={styles.knowledge} id="knowledge">
                    <div className={styles.grid} data-aos="fade-up">
                        <KnowLedge />
                    </div>
                </section>
                <ToastContainer align="flex-end"/>
            </main>
        </>
    )
}