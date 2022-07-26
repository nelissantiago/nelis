import { WhoProps } from '../utils/CreateInterfaces'
import styles from './styles.module.scss'

export function Who({ who, title, profile }: WhoProps) {
    return (
        <>
           <div className={styles.content}>
            <img src={profile} alt="logo_nelis_santiago" />
            <div className={styles.textwho}>
                <h2>{who}</h2>
                <p>
                    {title}
                </p>
            </div>
           </div>
        </>
    )
}