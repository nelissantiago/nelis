import Image from 'next/image'
import styles from './styles.module.scss'
import { ServicesPropss } from '../utils/CreateInterfaces'



export function Service({title, paragraph, logo}: ServicesPropss) {
    return (
        <>
        <article className={styles.list}>
                <Image src={logo} />
            <h3>{title}</h3>
            <p>
                {paragraph}
            </p>
        </article>
        </>
    )
}
