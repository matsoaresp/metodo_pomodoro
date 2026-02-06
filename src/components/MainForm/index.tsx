import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { Defaultbutton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../context/TaskContexto/useTaskContext";
import { useRef, useState } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

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

    if (!taskName){
      alert('Digite o nome da tarefa')
      return
    }

    const newTask: TaskModel =  {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
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
        formattedSecondsRemaining: '00:00',
        tasks: [...prevState.tasks, newTask],

      }
    })

    setColorButton (prev => prev === 'green' ? 'red' : 'green')

    setState(prevState => {
      return {
        ...prevState,
        formatedSecondsRemaining: '21:00'
      };
    });

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
          <Defaultbutton icon={<PlayCircleIcon />} color={colorButton} 
          />
        </div>
      </form>
    </>
  )
}