import "../../../styles/container.scss";
import "../../../styles/utility.scss";
import "../../../styles/section.scss";
import petr from "../../../assets/images/petr-zabransky.png";
import Card from "../../component/card/Card";

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
						<h3 className="heading heading--header text-center">Potenciál</h3>
						<div className="grid grid--3">
							<Card title={"Silné stránky"}>
								<>
									<li className="card__item">analytické myšlení</li>
									<li className="card__item">hledání řešení</li>
									<li className="card__item">krizové situace</li>
									<li className="card__item">kreativita</li>
									<li className="card__item">flexibilita</li>
								</>
							</Card>

							<Card title={"Slabé stránky"}>
								<>
									<li className="card__item">angličtina</li>
									<li className="card__item">memorování</li>
									<li className="card__item">rutinní činosti</li>
								</>
							</Card>

							<Card title={"Soft Skills"}>
								<>
									<li className="card__item">dobré vztahy</li>
									<li className="card__item">vedení menšího týmu</li>
									<li className="card__item">komunikace</li>
									<li className="card__item">empatie</li>
								</>
							</Card>
						</div>
					</div>
				</section>

				<section className="subsection">
					<div className="container">
						<h3 className="heading heading--header text-center">Vzdělání</h3>
						<div className="grid grid--small-big">
							<h4 className="heading heading--title">Strojírenství</h4>
							<p>Maturita - Programování a seřízování CNC strojů a robotů</p>

							<h4 className="heading heading--title">Marketing</h4>
							<p>CIMA-A</p>
						</div>
					</div>
				</section>
				<section className="subsection">
					<div className="container">
						<h3 className="heading heading--header text-center">Zkušenosti v IT</h3>
						<div className="grid grid--small-big">
							<h4 className="heading heading--title">Středoškolské soutěže</h4>
							<p>2. místo v krajském kole soutěže SOČ - Program pro evideci zakázek v C++</p>

							<h4 className="heading heading--title">Praxe POSKI Ostrava</h4>
							<p>Kódování webu realitní kanceláře JKM Family v komplexním firemním systému</p>

							<h4 className="heading heading--title">Osobní projekt</h4>
							<p>Web o fraktálech a fraktálové geometrii</p>

							<h4 className="heading heading--title">OSVČ</h4>
							<p>Pár jednoduchých webů pro drobné podnikatele v rozsahu  5-20 stránek</p>
						</div>
					</div>
				</section>

				<section className="subsection">
					<div className="container">
						<h3 className="heading heading--header text-center">Zkušenosti v jiných oborech</h3>
						<div className="grid grid--small-big">
							<h4 className="heading heading--title">Reklama a marketing</h4>
							<p>Marketingové analýzy, počítačová grafika, podnikání v reklamě - 8 let</p>

							<h4 className="heading heading--title">Strojírenství</h4>
							<p>Vývojový konstruktér, automatizace výroby, programování CNC a robotů - 8 let</p>

							<h4 className="heading heading--title">Algoritmické obchodování</h4>
							<p>Programování automatických obchodních systémů a obchodování na měnové burze - 6 let</p>
						</div>
					</div>
				</section>
			</section>
		</>
	)
}

export default About;
