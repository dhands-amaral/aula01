import React from "react";
import Inicio from './Inicio.js';
import Cadastro from "./Cadastro.js";

function App() {
  

require ("./App.css");

const [ tela, alteraTela ]= React.useState(0);
  return (
    <div>

      {
        tela=0 ? <Inicio /> : <Cadastro />
      }



      <Inicio/>
    </div>

  );
}

export default App;