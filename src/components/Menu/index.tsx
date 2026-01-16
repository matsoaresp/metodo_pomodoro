import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon, SunMoonIcon, TimerIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'

type AvaiableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvaiableThemes>(() => {
        const storageTheme = localStorage.getItem('data-theme') as AvaiableThemes;
        return storageTheme
    })

    function handleThemeChange() {

        setTheme(prevTheme => {
            const nextTheme = prevTheme == 'dark' ? 'light' : 'dark'
            return nextTheme
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('data-theme', theme)
    }, [theme])

    return <nav className={styles.menu}>
        <a className={styles.menuLink} href="#
    " title='Ir para a Home' aria-label='Ir para a Home'><HouseIcon /></a>
        <a className={styles.menuLink} href="#
    " title='Histórico' aria-label='Histórico'><HistoryIcon /></a>
        <a className={styles.menuLink} href="#
    " title='Configurações' aria-label='Configurações'><SettingsIcon /></a>
        <a className={styles.menuLink} href="#
    " title='Alterar Tema' aria-label='Alterar tema' onClick={handleThemeChange}>{theme === 'dark' ? <MoonIcon /> : <SunMoonIcon/>}</a>
    </nav>
}