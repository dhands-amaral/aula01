import React from 'react';


import Menu from "./Menu.js";

import Vitrine from "./Vitrine.js";

import Produtos from "./Produtos.js";

import Rodape from './Rodape.js';



require("./App.css");

require("./Menu.css");

require("./Vitrine.css");

require("./Produtos.css");

require("./Rodape.css");



const Inicio = () =>{



    const [quantidade_roupas, adicionaRoupa] = React.useState(0);



    return(

        <div>



    <div className='nao'>

    <p>Peças Adicionadas: <strong> {quantidade_roupas} </strong></p>

    <button onClick={() => adicionaRoupa(quantidade_roupas + 1)}>Adicionar Roupas</button>

    </div>

    <Menu quantidade_roupas= {quantidade_roupas} />

    <Vitrine/>



    <div className="container">

        <Produtos adicionaRoupa = {adicionaRoupa} quantidade_roupas= {quantidade_roupas}/>

       

    </div>

    <Rodape/>

   </div>

    );

}

export default Inicio;