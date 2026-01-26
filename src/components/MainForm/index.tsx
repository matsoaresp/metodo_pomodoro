import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { Defaultbutton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../context/TaskContexto/useTaslContext";
import { useRef, useState } from "react";
import type { TaskModel } from "../../models/TaskModel";

export function MainForm() {

  const { setState} = useTaskContext();
  const numero = useRef(0)
  const [taskName, setTaskName] = useState('')
  const taskNameInput = useRef<HTMLInputElement>(null)
  const [colorButton, setColorButton] = useState<'green' | 'red'>('green');


  function handleCreateNewTask (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (taskNameInput.current === null) return

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
      type: 'workTime',
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: {...prevState.config},
        activeTask: newTask,
        currentCycle: 1,
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
        labelText='Mateus' 
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