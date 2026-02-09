import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { Defaultbutton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../context/TaskContexto/useTaskContext";
import { useRef, useState } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formattedSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {

  const { state, setState} = useTaskContext();
  const [taskName, setTaskName] = useState('');
  const taskNameInput = useRef<HTMLInputElement>(null);
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  
  const [colorButton, setColorButton] = useState<'green' | 'red'>('green');


  function handleCreateNewTask (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskNameInput.current === null) return;
    
    const taskName = taskNameInput.current.value.trim();
    if (!taskName) {
      alert('Digite o nome da tarefa')
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
      };

      const secondsRemaining = newTask.duration * 60;

      setState(prevState => {
        return {
          ...prevState,
          config: {...prevState.config},
          activeTask: newTask,
          currentCycle: nextCycle,
          secondsRemaining,
          formattedSecondsRemaining: formattedSecondsToMinutes(secondsRemaining),
          tasks: [...prevState.tasks, newTask],
        };


      })
  }

  function handleInterruptTask (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
  
        setState(prevState => {
        return {
          ...prevState,
          activeTask: null,
          secondsRemaining: 0,
          formattedSecondsRemaining: '00:00',
        };
      })
      }
  return (
    <>
      <form className='form' onSubmit={handleCreateNewTask}>
        <div className='formRow'>
        <DefaultInput 
        id='meuInput' 
        type='text' 
        placeholder='Digite algo'
        value={taskName}
        disabled= {!!state.activeTask}
        onChange={e => setTaskName(e.target.value)}
        ref={taskNameInput}
        />
        </div>

        <div className='formRow'>
          <p>Nesse ciclo descanse 5 min</p>
        </div>
        

        <div className='formRow'>
          <Cycles />
        </div>
        <div>
          
        </div>
       <div className='formRow'>
  {!state.activeTask &&(
    <Defaultbutton
      aria-label="Iniciar nova tarefa"
      type="submit"
      icon={<PlayCircleIcon />}
      color="green"
      key= 'Este é o botao de submit'
    />
  )}
       {!!state.activeTask && (
    <Defaultbutton
      aria-label="Interromper tarefa"
      type="button"
      icon={<StopCircleIcon />}
      color="red"
      onClick={handleInterruptTask}
      key='Não enviar o form'
    />
  )}
</div>
      </form>
    </>
  )
}