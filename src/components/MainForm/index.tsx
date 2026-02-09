import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { Defaultbutton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../context/TaskContexto/useTaskContext";
import { useState } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../context/TaskContexto/taskActions";

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const [taskName, setTaskName] = useState('');

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  if (!taskName.trim()) {
    alert('Digite o nome da tarefa');
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

  dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
}


  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form className='form' onSubmit={handleCreateNewTask}>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          value={taskName}
          disabled={!!state.activeTask}
          onChange={e => setTaskName(e.target.value)}
        />
      </div>

      <div className='formRow'>
        <p>Nesse ciclo descanse 5 min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        {!state.activeTask && (
          <Defaultbutton
            aria-label="Iniciar nova tarefa"
            type="submit"
            icon={<PlayCircleIcon />}
            color="green"
          />
        )}

        {!!state.activeTask && (
          <Defaultbutton
            aria-label="Interromper tarefa"
            type="button"
            icon={<StopCircleIcon />}
            color="red"
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  );
}
