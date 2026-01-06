import {TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css'
import { Container } from './components/Container';


export default function App() {

  return (
    <>
    <Container>
      <Heading><TimerIcon/></Heading>
    </Container>

     <Container>
     <Heading>Menu</Heading>
    </Container>

    </>
  )
}
