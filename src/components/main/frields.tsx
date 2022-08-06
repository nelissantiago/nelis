import styles from './styles.module.scss'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FrieldsProps } from '../utils/CreateInterfaces'


export function Frields({ name, profissao, avatar, buttonCopy, href, copy }: FrieldsProps) {
    return (  
        <>
        <article className={styles.frield}>
            <div className={styles.image}>
                <img src={avatar} alt="" />
              </div>
                <span>{name}</span>
                <p>{profissao}</p>
                <div className={styles.btn}>
                <button type="button" onClick={copy}>
                    {buttonCopy}
                </button>
                <a href={href} className={styles.inst}>
                     <AiFillInstagram />
                </a>
                <a href=""  className={styles.inst}>
                    <IoLogoWhatsapp />
                </a>
            </div>
        </article>
        </>
    )
}
