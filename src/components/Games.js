import React, {useState} from 'react';
import Game from "./Game";

function Games({ gamesLib }) {
  const [status, setStatus] = useState("'Your Choice'")
  return (
    <article>
      <header>
        <h1>My Favorite game is: {status}</h1>
      </header>
      <nav>
      <button onClick={()=> setStatus("Assassin's Creed")}>AC1</button>
      <button onClick={()=> setStatus("Assassin's Creed II")}>AC2</button>
      <button onClick={()=> setStatus("Assassin's Creed III")}>AC3</button>
      <button onClick={()=> setStatus("Assassin's Creed IV Black Flag")}>ACBF</button>
      <button onClick={()=> setStatus("Assassin's Creed Odysey")}>ACO</button>
      </nav>
      {/* <div className="games">{gamesLib.map((game, i) => (<Game key={i} {...game} />))}</div> */}
      <div className="games">
        {gamesLib.map((game) => (<Game key={1} {...game} />))}
      </div>
    </article>
  );
}

export default Games;
