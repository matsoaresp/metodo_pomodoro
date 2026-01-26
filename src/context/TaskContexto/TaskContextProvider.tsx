<<<<<<< Updated upstream
import { useState } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> Stashed changes
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TaskContextProviderProps = {
  children: React.ReactNode
}

export default function TaskContextProvider({ children }: TaskContextProviderProps) {

  const [state, setState] = useState(initialTaskState);

<<<<<<< Updated upstream
=======
  useEffect(() => {
    console.log(state)
  }, [state])
>>>>>>> Stashed changes

  return (
    <TaskContext.Provider value={{state, setState}}>
      {children}
    </TaskContext.Provider>
  )
}