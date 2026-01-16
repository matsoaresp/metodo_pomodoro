import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { Defaultbutton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import type { HomeProps } from "../../pages/home";


export function MainForm({ state, setState }: HomeProps) {

  function handleClick() {

    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34
        },
        formattedSecondsRemaining: '21:41'
      }
    })
  }

  return (
    <>
      <form className='form'>
        <div>
          <button onClick={handleClick}>
            Clicar
          </button>
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