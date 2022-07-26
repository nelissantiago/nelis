import { FaDiscord } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'
import styles from './styles.module.scss'
import { toast } from 'react-nextjs-toast'

export function Social() {

    function HandleCopyProfile() {
        const name = "Nelis Santiago#2022"
        navigator.clipboard.writeText(name)

        toast.notify(`${name}`, {
            duration: 5,
            type: "success",
            title: "Usuario Copiado!",
          })
    }

    return (
        <>
            <div className={styles.social} data-aos="fade-up">
                <button onClick={HandleCopyProfile}>
                    <FaDiscord />
                </button>
                <a href="https://instagram.com/nelis_code">
                    <RiInstagramFill />
                </a>
                <a href="https://github.com/slaidezera">
                    <AiFillGithub />
                </a>
            </div>
        </>
    )
}