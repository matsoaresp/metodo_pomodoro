import styles from './styles.module.css'
import {RouterLink} from '../RouterLink'
export function Footer () {

    return (
        <footer className={styles.footer}>
             <RouterLink href='/about-pomodoro/'>
        Entenda como funciona a técnica pomodoro
      </RouterLink>
            <a href=''>Chronos Pomodoro @ 2025 - feito com amor</a>
        </footer>
    )
}