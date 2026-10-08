import { Link } from 'react-router'

export default function Menu() {
    return ( 
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produtos">Produto</Link></li>
                <li><Link to="/users/git">Lista de Usuarios Git</Link></li>
                <li><Link to="/cad-produto/">Cadastro de Produto</Link></li>
            </ul>
        </nav>
    )
}
