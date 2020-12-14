import ReactDOM from 'react-dom';
import Games from "./components/Games";
import data from "./data/gamesLib.json";
import './index.css';

ReactDOM.render(
  <Games gamesLib={data} />,
  document.getElementById("root")
);