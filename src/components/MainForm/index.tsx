import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { Defaultbutton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useTaskContext } from "../../context/TaskContexto/useTaslContext";

export function MainForm() {

  const { setState} = useTaskContext();


  function handleClick () {
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
        <div>
         
        </div>
        <DefaultInput labelText='Mateus' id='meuInput' type='text' placeholder='Digite algo'
        />

        <div className='formRow'>
          <p>Nesse ciclo descanse 5 min</p>
        </div>

        <div className='formRow'>
          <Cycles />
        </div>
        <div className='formRow'>
          <Defaultbutton icon={<PlayCircleIcon />} color='green' />
        </div>
      </form>
    </>
  )
}