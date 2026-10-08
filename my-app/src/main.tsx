import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import Home from './routes/Home'
import Produtos from './routes/Produtos'
import EditarProdutos from './routes/EditarProdutos'
import Error from './routes/Error'
import UsuariosGit from './routes/UsuariosGit'
import CadProduto from './routes/CadProduto'
import "./globals.css";

const router = createBrowserRouter([
  {
    path: '/', element: <App />, errorElement: <Error />,
    children: [
      { path: '/', element: <Home/> },
      { path: '/produtos', element: <Produtos/> },
      { path: '/editar-produtos/:id', element: <EditarProdutos/> },
      { path: '/users/git', element: <UsuariosGit/> },
      { path: '/cad-produto/', element: <CadProduto /> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)



