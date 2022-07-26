import { ProjectProps } from '../utils/CreateInterfaces'
import styles from './styles.module.scss'


export function Project({title, paragraph}: ProjectProps ) {
    return (
        <>
                <article className={styles.list}>
                     <h3>{title}</h3>
                     <p>
                        {paragraph}
                     </p>
                </article>
        </>
    )
}