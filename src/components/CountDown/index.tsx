

import type { HomeProps } from '../../pages/home'
import styles from './styles.module.css'

type CountDownProps = HomeProps



export function CountDown ({state}: HomeProps) {

return <div className={styles.container}>{state.formattedSecondsRemaining}</div>


}