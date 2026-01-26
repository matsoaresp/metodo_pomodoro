import './styles/global.css';
import './styles/theme.css'
import { BrowserRouter } from 'react-router';
import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStateModel';
import { Home } from './pages/home';
import { TaskContext } from './context';
import TaskContextProvider from './context/TaskContexto/useTaslContext';
/*
export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number; //
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    }
}
*/
const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  }
};
export default function App() {
  const [state, setState] = useState(initialState);


  return (
    <div>
      <BrowserRouter>
      <TaskContextProvider>
          <Home state={state} setState={setState} />
      </TaskContextProvider>
        
      </BrowserRouter>
    </div>
  )


}
