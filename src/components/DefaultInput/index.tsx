
type DefaultInputProps = {

type: string
}
export function DefaultInput({type}: DefaultInputProps) {
   return (
    <>
        <label htmlFor="meuInput">task</label>
        <input type={type} name="" id="meuInput" />
    </>
   )
}