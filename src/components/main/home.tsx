import styles from './styles.module.scss'
import Image from 'next/image'
import home from '../../../public/images/home.svg'
import Typewriter from 'typewriter-effect';
import { HomeProps } from '../utils/CreateInterfaces';

export function Main({name, title, typeWriter, link}: HomeProps) {
    return (  
        <>
            <div className={styles.contentHome}>
                <div className={styles.here}>
                    <span>{name}</span>
                    <h2>{title}</h2>
                    <div className={styles.typeWriter}>
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter
                            .typeString(typeWriter)
                            .pauseFor(2500)
                            .start()
                        }}
                    />
                    </div> <br />
                        <a href={link}>
                            Instagram
                        </a>
                </div>
                <div className={styles.image}>
                <Image src={home} alt="Imagem"/>
                </div>
            </div>
        </>
    )
}















//Conteudo para embreve
/**
 * 
 * <ul classNameName={styles.wrapper}>
    <li classNameName={styles.icon} id={styles.facebook}>
        <span classNameName={styles.tooltip}>Facebook</span>
        <span><i classNameName="fab fa-facebook-f"></i></span>
    </li>
    <li classNameName={styles.icon} id={styles.twitter}>
        <span classNameName={styles.tooltip}>Twitter</span>
        <span><i classNameName="fab fa-twitter"></i></span>
    </li>
    <li classNameName={styles.icon} id={styles.instagram}>
        <span classNameName={styles.tooltip}>Instagram</span>
        <span><i classNameName="fab fa-instagram"></i></span>
    </li>
    <li classNameName={styles.icon} id={styles.github}>
        <span classNameName={styles.tooltip}>Github</span>
        <span><i classNameName="fab fa-github"></i></span>
    </li>
    <li classNameName={styles.icon} id={styles.youtube}>
        <span classNameName={styles.tooltip}>Youtube</span>
        <span><i classNameName="fab fa-youtube"></i></span>
    </li>
</ul>
 * 
 */