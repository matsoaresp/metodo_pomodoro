import './styles/global.css';
import './styles/theme.css'
import Home from './pages/home';
import { BrowserRouter } from 'react-router';


export default function App() {
  return <BrowserRouter>
  <Home/>
  </BrowserRouter>
  
    
}
