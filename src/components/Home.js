import React,{Component} from "react";
import AlfaceImg from "./assets/alface.png";
import LaranjaImg from "./assets/laranja.png";
import CerejaImg from "./assets/cereja.png";
import CenouraImg from "./assets/cenoura.png";
import MangaImg from "./assets/manga.png";
import LimaoImg from "./assets/limao.png";
import BeterrabaImg from "./assets/beterraba.png";
import TomateImg from "./assets/tomate.png";
import Carrinho1Img from "./assets/carrinho1.png";
import Carrinho2Img from "./assets/carrinho2.png";
import Carrinho3Img from "./assets/carrinho3.png";


class Home extends Component{
state = {
    cards: [
        {
            imagem: AlfaceImg,
            legenda: "Alface"
        },
        {
            imagem: LaranjaImg,
            legenda: "Laranja"
        },
        {
            imagem: CerejaImg,
            legenda: "Cereja"
        },
        {
            imagem: CenouraImg,
            legenda: "Cenoura"
        },
        {
            imagem: MangaImg,
            legenda: "Manga"
        },
        {
            imagem: LimaoImg,
            legenda: "Limão"
        },
        {
            imagem: BeterrabaImg,
            legenda: "Beterraba"
        },
        {
            imagem: TomateImg,
            legenda: "Tomate"
        },
    ]
}

render(){
    const {cards} = this.state;
    return(
        <div>
            <div>
                <h1>HORTIFRUTI</h1>
                <h2 className="subtitulo">VnW</h2>
                <h2 className="apresentacao">Nossos Produtos</h2>
            <div className="produtos">
                {cards.map((produto) =>(
                    <img className="produtosImg" src={produto.imagem} alt={produto.legenda}></img>
                    ))}
            </div>
        </div>

            <section className="carrinhoCompras">
                <section className="carrinhoCompleto">
                    <img className="parteUm" src={Carrinho1Img} alt="Componente do carrinho 1º"></img>
                    <img className="parteDois" src={Carrinho2Img} alt="Componente do carrinho 2º"></img>
                    <img className="parteTres" src={Carrinho3Img} alt="Componente do carrinho 3º"></img>
                    <img className="parteQuatro" src={Carrinho3Img} alt="Componente do carrinho 3º"></img>
                    <p>Arraste o seu produto aqui para colocar no carrinho</p>
                </section>

                <section className="containerInterior">
                    <img className="circuloAdd" src={Carrinho3Img} alt="Componente do carrinho 1º"></img>
                    <button className="buttonAdd">+</button>
                    <img className="circuloMenos" src={Carrinho3Img} alt="Componente do carrinho 1º"></img>
                    <button className="buttonMenos">-</button>
                </section>
                
            </section>
        
        </div>
    )
}
}

export default Home;