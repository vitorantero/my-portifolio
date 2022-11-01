import './Cards.css'

const Card = () => {
    return (
		<main>
			<section className="card">
				<h2 className="sub-title"> Venha desfrutar os seus Melhores Filmes Aqui!</h2>
                <div>
                    <img className="pages" src="imagens/carroscard.jpg"/>
                    <img className="pages" src="imagens/domcard.jpg"/>
                    <img className="pages" src="imagens/carroscard.jpg"/>
                    <img className="pages" src="imagens/domcard.jpg"/>
                    <img className="pages" src="imagens/carroscard.jpg"/>
                    <img className="pages" src="imagens/domcard.jpg"/>
                </div>
			</section>
		</main>
    );
}

export default Card