import { Outlet } from 'react-router'
import Cabecalho from "./components/Cabecalho"
import Rodape from "./components/Rodape"


export default function App() {
  return (
    <div className="container">
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>

  )
}