import { Navegation } from './navegation'
import { Redirect } from './redirect'
import { Social } from './social'
import styles from './styles.module.scss'
export function Header() {
    return (
     <>
        <header className={styles.header}>
            <div className={styles.grid}>
                <h2>Nelis Santiago.</h2>
                    <Navegation />
                    <Social />
            </div>
            <div>
                <Redirect />
            </div>
        </header>
     </>
    )
}