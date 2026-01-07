import './styles/global.css';
import './styles/theme.css'
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { Defaultbutton } from './components/DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';


export default function App() {

  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>

      <Container>
        <Menu />
      </Container>


      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form'>
          <DefaultInput labelText='Mateus' id='meuInput' type= 'text' placeholder='Digite algo'
          />
          <div className='formRow'>
            <p>Nesse ciclo descanse 5 min</p>
          </div>
          <div className='formRow'>
           <Cycles/>
          </div>
          <div className='formRow'>
            <Defaultbutton icon= {<PlayCircleIcon/>} color='green'/>
          </div>
        </form>
      </Container>

      <Container>
        <Footer/>
      </Container>

    </>
  )
}
