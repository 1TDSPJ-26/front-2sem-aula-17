
export default function Home() {

const estojo = {
    lapis    : "preto",
    caneta   : "azul",
    borracha : "branca"
  }
  console.log(estojo.lapis);
  console.log(estojo.caneta);

  const {lapis, caneta} = estojo;

  //Destructuring um array
  const jogos = ["Sonic","Mario","Zelda"];

  console.log(jogos[1]);
  console.log(jogos[0]);
  
  const [mario,zelda] = jogos;



  return (
    <main>
        <h2>Home</h2>

        <div>
          <h3>Estojo</h3>
          <p>{lapis}</p>
          <p>{caneta}</p>
      </div>
      <div>
        <h3>Jogos</h3>
        <p>{zelda}</p>
        <p>{mario}</p>
      </div>
    </main>
  )
}