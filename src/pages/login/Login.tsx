import { useState } from "react"
import Home from "../home/Home"

function Login() {

  const [isLogged, setIsLogged] = useState(false)

  return (
    <div>
      {
      isLogged? (
        <Home 
        titulo="Componente Home"
        texto="Bem-vindo"/>
      ) : (
        <div>
        <h2>Login</h2>
        <button onClick={() => setIsLogged(true)}>Entrar</button>
        </div>
      )
    }
    </div>
  ) 
}

export default Login