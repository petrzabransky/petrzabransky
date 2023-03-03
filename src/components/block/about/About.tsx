import "../../../styles/container.scss";
import "../../../styles/utility.scss";
import "../../../styles/section.scss";
import petr from "../../../assets/images/petr-zabransky.png";

const About = () => {
	return (
		<>
			<section className="section">
				<section className="about subsection" id="#about">
					<div className="container">
						<h2 className="heading heading--header text-center">O mě</h2>
						<div className="grid grid--small-big">
							<div>
								<img src={petr} alt="Petr Zábranský portrét" />
							</div>
							<div>
								<p>
									Na začátku své kariéry jsem pracoval v oblasti počítačové grafiky, reklamy a marketingu. Nutkání hledat ve všem systém a logiku mě pak přivedlo k techničtějšímu oboru do strojírenství, kde jsem se  věnoval práci vývovojového konstruktéra a automatizaci výrobních procesů.
								</p>

								<p>
									Další  krok k programování jsem udělal, když mě v třetí fázi kariéry zaujalo algoritmické obchodování na měnové burze a programování automatických obchodních systémů, kterému jsem se dalších několik let úspěšně věnoval  jako Full TIme Trader.
								</p>

								<p>
									Nyní bych chtěl  spojit příjemné s užitečným a začít se programování věnovat naplno profesionálně.  Když se člověk živí svým koníčkem, dává do práce daleko více energie.  Rychle roste profesionalita i produktivita a spokojenost je pak na straně zaměstnance, zaměstnavatele i zákazníka.  bych chtěl  spojit příjemné s užitečným a začít se programování věnovat naplno profesionálně.  Když se člověk živí svým koníčkem, dává do práce daleko více energie.  Rychle roste profesionalita i produktivita a spokojenost je pak na straně zaměstnance, zaměstnavatele i zákazníka.
								</p>

								<p>
									Nabyté zkušenosti z předchozích oborů bych chtěl zhodnotit a využít i v kariéře programátora. Díky více prosefím a pozicím v různých firmách jsem získal velký nadhled a dokážu vidět firmu a její procesy z více úhlů pohledu.
								</p>

								<p>
									Současně se nejvíce věnuji Front-Endu webových stránek a aplikací, ale programování a algoritmizace mě baví všeobecně, takže do budoucna nevylučuji ani programování v oblasti Back-Endu případně nějakou formu datové analýzy.
								</p>
							</div>
						</div>
					</div>
				</section >


				<section className="subsection">
					<div className="container">

						<h3 className="heading heading--header">
							Potenciál
						</h3>
						<div className="grid grid--small-big">
							{/*<img src={ } alt="petr zabransky portrét" />*/}
							<h4 className="heading heading--title">Silné stránky</h4>

							<div className="hashtag__container">
								<div>
									<span className="hashtag">analytické&nbsp;myšlení</span>
								</div>

								<div>
									<span className="hashtag">řešení&nbsp;problémů</span>
								</div>

								<div>
									<span className="hashtag">hledání&nbsp;systémů</span>
								</div>

								<div>
									<span className="hashtag">kreativita</span>
								</div>

								<div>
									<span className="hashtag">flexibilita</span>
								</div>
							</div>

							<h4 className="heading heading--title">Slabé stránky</h4>

							<div className="hashtag__container">
								<div>
									<span className="hashtag">angličtina</span>
								</div>
							</div>

							<h4 className="heading heading--title">IQ</h4>

							<div className="hashtag__container">
								<div>
									<span className="hashtag">129</span>
								</div>
							</div>

							<h4 className="heading heading--title">
								Volný čas
							</h4>

							<div className="hashtag__container">
								<div>
									<span className="hashtag">programování</span>
								</div>

								<div>
									<span className="hashtag">příroda</span>
								</div>

								<div>
									<span className="hashtag">sport</span>
								</div>

							</div>
						</div>
					</div>
				</section>

				<section className="subsection">
					<div className="container">
						<h3 className="heading heading--header">
							Vzdělání
						</h3>
						<div className="grid grid--small-big">
							<h4 className="heading heading--title">Strojírenství</h4>
							<div className="hashtag__container">
								<div>
									<p className="hashtag">programování CNC strojů a robotů</p>
								</div>

								<div>
									<p className="hashtag">maturita</p>
								</div>
							</div>

							<h4 className="heading heading--title">Marketing</h4>
							<div className="hashtag__container">
								<div>
									<p className="hashtag">CIMA-A</p>
								</div>
							</div>

							<h4 className="heading heading--title">Informatika</h4>
							<div className="hashtag__container">
								<div>
									<p className="hashtag">samostudium</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</>
	)
}

export default About;
