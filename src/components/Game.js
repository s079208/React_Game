import React from "react";
import GameInfoList from "./GameInfoList";
import Biografie from "./Bio";

function Game({ name, gameinfo, Bio }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <GameInfoList list={gameinfo} />
      <Biografie title="Story" Bio={Bio} />
    </section>
  );
}

export default Game;
