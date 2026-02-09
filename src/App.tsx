import './styles/global.css';
import './styles/theme.css'
import { BrowserRouter } from 'react-router';
import { Home } from './pages/home';


import TaskContextProvider from './context/TaskContexto/TaskContextProvider';

export default function App() {
  


  return (
    <div>
      <BrowserRouter>
      <TaskContextProvider>
          <Home/>
      </TaskContextProvider>
      </BrowserRouter>
    </div>
  )


}
