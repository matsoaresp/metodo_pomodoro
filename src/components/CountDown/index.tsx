import type { HomeProps } from '../../pages/home'
import styles from './styles.module.css'
import { useTaskContext } from '../../context/TaskContexto/useTaskContext';


export function CountDown ({state}: HomeProps) {
const taskContext = useTaskContext;
console.log(taskContext)
return <div className={styles.container}>{state.formattedSecondsRemaining}</div>


}