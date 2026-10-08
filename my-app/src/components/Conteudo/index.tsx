import { useState } from "react";

export default function Conteudo() {

  let nomeComum: string | null = "flavio";
  function alterNomeComum() {
    nomeComum = prompt("digite o novo nome!");
    console.log("nome alterado : ", nomeComum)
  }

  const [nomeState, setNomeState] = useState<string | null>("juquinha");
  function alterNomeState() {
    const nome: string | null = prompt("digite o novo nome")
    setNomeState(nome);
    console.log("Nome alterado : ", nomeState);
  }


  return (
    <main>
        <h2>Conteudo Principal</h2>

        <figure>
            <img src="https://placehold.co/600x400/FFFFF0/FFFFFF/png" alt="Imagem ilustrativa do conteúdo" />

            <figcaption>Imagem utilizada para representar o conteúdo da aplicação.</figcaption>
        </figure>

               <div>
        <p>Nome Comum : {nomeComum}</p>
        <button onClick={alterNomeComum}>Nome Alterado = {nomeComum}</button>
      </div>

      <div>
        <p>Nome State : {nomeState}</p>
        <button onClick={alterNomeState}>Nome alterado State = {nomeState}</button>
      </div>
    </main>
  )
}