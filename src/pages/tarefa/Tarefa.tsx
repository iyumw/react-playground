import { useEffect, useState } from "react"

function Tarefa() {

  const [completed, setCompleted] =useState(false)
  const [tarefa, setTarefa] =useState('')

  useEffect(() => {
    if(completed) {
      setTarefa('Pabens :) Você concluiu a tarefa')
    }
  }, [completed])

  return (
    <div>
      <h2>Componente Tarefa</h2> 
      <h3>{tarefa}</h3>
      <p>Conclua sua tarefa</p>
      <button onClick={() => setCompleted(true)}>Finalizar</button>
    </div>
  )
}

export default Tarefa