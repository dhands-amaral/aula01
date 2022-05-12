
const Menu = (props) => {

    return(

        <div className="menu">



        <div>

          <a href="#"> LOGO</a>

        </div>



        <div>

       

            <a href="#"> LOGO </a>

            <a href="#"> Cadastro </a>

            <a href="#"> Login </a>

            <a href="#"> 🛒<strong> { props.quantidade_de_itens } </strong></a>

          </div>

        </div>

    );

}
export default Menu;