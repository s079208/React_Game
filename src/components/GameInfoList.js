import React from "react";
import GameInfo from "./GameInfo";

export default function GameInfoList({ list }) {
  return (
    <ul className="GameInfoList">
      {list.map((gameInfo, i) => (
        <GameInfo key={i} {...gameInfo} />
      ))}
    </ul>
  );
}
