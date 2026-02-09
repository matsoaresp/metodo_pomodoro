import type { TaskStateModel } from '../../models/TaskStateModel';
import { formattedSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { initialTaskState } from './initialTaskState';
import { type TaskActionModel, TaskActionTypes } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formattedSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      const activeTaskId = state.activeTask?.id;

      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task =>
          task.id === activeTaskId
            ? { ...task, interruptDate: Date.now() }
            : task
        ),
      };
    }

    case TaskActionTypes.RESET_STATE: {
      return { ...initialTaskState };
    }

    default:
      return state;
  }
}
