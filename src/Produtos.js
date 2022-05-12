const Produtos = (props) => {
    const adicionaRoupa = props.adicionaRoupa;
    const quantidade_roupa = props.quantidade_roupa;

    require ("./Produtos.css")
    const produtos = [

        {
            id: 0, 
            nome: " Vestido Midi Branco e Preto ",
            preco: 100,
            imagem: "https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-midi/vestido-com-recortes-e-manga-3-4-preto-branco_342018_1000_1.jpg"

        },
        ];

        return(

            <div>
    
                <h1> Todos os lançamentos você encontra aqui </h1>
    
                <p>Confira as peças </p>
    
    
    
             <div className="box">
    
                { Produtos.map( produto => {
    
                    return(
    
               
    
                <div className="produto">
    
                    <img src={produto.imagem}/>
    
                    <h2>{ produto.nome }</h2>
    
                    <p> R$ { produto.preco }</p>
    
                    <button onClick={() => adicionaRoupa(quantidade_roupa + 1)}>Adicionar ao Carrinho</button>
    
                 
    
                </div>
    
    
    
                    )
    
                })
    
                }
    
             </div>
    
               
    
            </div>
    
        );
    }
    export default Produtos; 
