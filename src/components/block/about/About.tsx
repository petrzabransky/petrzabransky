import "../../../styles/container.scss";
import "../../../styles/utility.scss";
import "../../../styles/section.scss";
import petr from "../../../assets/images/petr-zabransky.png";

const About = () => {
	return (
		<>
			<section className="about section" id="#about">
				<div className="container">
					<h2 className="heading heading--header">O mě</h2>
					<div className="grid grid--small-big">
						<div>
							<img src={petr} alt="Petr Zábranský portrét" />
						</div>
						<div>
							<p>
								Na začátku své kariéry jsem pracoval v oblasti počítačové grafiky, reklamy a marketingu. Nutkání hledat ve všem systém a logiku mě pak přivedlo k techničtějšímu oboru do strojírenství, kde jsem se  věnoval práci vývovojového konstruktéra a automatizaci výrobních procesů.
							</p>

							<p>
								Další  větší krok k programování jsem udělal, když mě v třetí fázi kariéry zaujalo algoritmické obchodování na měnové burze, kterému jsem se dalších několik let úspěšně věnoval na plný úvazek jako Full TIme Trader.
							</p>

							<p>
								Nyní bych chtěl  spojit příjemné s užitečným a začít se programování věnovat naplno profesionálně.  Když se člověk živí svým koníčkem, dává do práce daleko více energie.  Rychle roste profesionalita i produktivita a spokojenost je pak na straně zaměstnance, zaměstnavatele i zákazníka.
							</p>
						</div>
					</div>
				</div>
			</section >

			<section className="section">
				<div className="container">

					<h3 className="heading heading--header">
						Potenciál
					</h3>
					<div className="grid grid--small-big">
						{/*<img src={ } alt="petr zabransky portrét" />*/}
						<p>
							Silné stránky
						</p>

						<div className="wrap">
							<p className="hashtag">analytické&nbsp;myšlení</p>
							<p className="hashtag">řešení&nbsp;problémů</p>
							<p className="hashtag">hledání&nbsp;systémů</p>
							<p className="hashtag">kreativita</p>
							<p className="hashtag">flexibilita</p>
						</div>

						<p>
							Slabé stránky
						</p>

						<div>
							<span className="hashtag">angličtina</span>
						</div>

						<p>
							IQ
						</p>

						<div>
							<span className="hashtag">129</span>
						</div>

						<p>
							Volný čas
						</p>

						<div>
							<span className="hashtag">programování</span>
							<span className="hashtag">příroda</span>
							<span className="hashtag">sport</span>
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<h3 className="heading heading--header">
						Vzdělání
					</h3>
					<div className="grid grid--small-big">
						<p>Strojírenství</p>
						<div className="wrap">
							<p className="hashtag">programování CNC strojů a robotů</p>
							<p className="hashtag">maturita</p>
						</div>

						<p>Marketing</p>
						<div className="wrap">
							<p className="hashtag">CIMA-A</p>
						</div>

						<p>Informatika</p>
						<div className="wrap">
							<p className="hashtag">samostudium</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default About;
