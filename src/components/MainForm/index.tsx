import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { Defaultbutton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../context/TaskContexto/useTaslContext";
import { useState } from "react";

export function MainForm() {

  const { setState} = useTaskContext();
  const [colorButton, setColorButton] = useState<'green' | 'red'>('green');


  function handleClick () {

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
      <form className='form'>
        <DefaultInput labelText='Mateus' id='meuInput' type='text' placeholder='Digite algo'
        />

        <div className='formRow'>
          <p>Nesse ciclo descanse 5 min</p>
        </div>

        <div className='formRow'>
          <Cycles />
        </div>
        <div className='formRow'>
          <Defaultbutton icon={<PlayCircleIcon />} color={colorButton} 
          onClick={handleClick} />
        </div>
      </form>
    </>
  )
}