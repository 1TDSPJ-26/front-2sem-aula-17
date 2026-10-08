import { useEffect, useState } from "react"

    type TipoUsuarioGit = {
    login:string;
    id:number;
    node_id:string;
    avatar_url:string;
    gravatar_id:string;
    url:string;
    html_url:string;
    followers_url:string;
    following_url:string;
    gists_url:string;
    starred_url:string;
    subscriptions_url:string;
    organizations_url:string;
    repos_url:string;
    events_url:string;
    received_events_url:string;
    type:string;
    user_view_type:string;
    site_admin:boolean;
}

export default function UsuariosGit() {


    const[usuarios,setUsuarios] = useState<TipoUsuarioGit[]>([]);

    useEffect( ()=>{
        //Área de execução 
        async function loadingData() {
            try {
                const response = await fetch("https://api.github.com/users");
                
                if(!response.ok){
                    throw new Error("Falha na requisição das lista de usuarios...");
                }

                const data:TipoUsuarioGit[] = await response.json();
                console.log(data);
                setUsuarios(data);

            } catch (error) {
                console.error(error);
            }
        }
        loadingData();

    },[] );

    return (
        <main>
            <h2>Lista de usuarios Git</h2>
                <ul>
                    {usuarios.map( (u)=>(
                    <li key={u.id}>{u.id} - {u.login} - 
                            <a href={u.html_url} target="_blank"><img src={u.avatar_url} alt={u.login} width={40} /></a> 
                    </li>))}
                </ul>
        </main>
    )
};
