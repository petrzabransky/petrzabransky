import petr from "../../../assets/images/petr-zabransky.png";
import Card from "../../component/card/Card";
import Container from "../../layout/container/Container";
import Grid from "../../layout/grid/Grid";
import "./About.scss";
import Section from "../../layout/section/Section";

interface Props {
	id: string;
}

const About = ({ id }: Props) => {

	return (
		<Section otherStyle={"about"} id={id}>
			<Section sub={true}>
				<Container>
					<h2 className="heading heading--header text-center">O mě</h2>
					<Grid col={2}>
						<div>
							<img src={petr} alt="Petr Zábranský portrét" />
						</div>
						<div>
							<p>
								Na začátku své kariéry jsem pracoval v oblasti počítačové grafiky, reklamy a marketingu. Nutkání hledat ve všem systém a logiku mě pak přivedlo k techničtějšímu oboru do strojírenství, kde jsem se  věnoval práci vývovojového konstruktéra a automatizaci výrobních procesů.
							</p>

							<p>
								Další  krok k programování jsem udělal, když mě v třetí fázi kariéry zaujalo algoritmické obchodování na měnové burze a programování automatických obchodních systémů, kterému jsem se dalších několik let úspěšně věnoval jako Full Time Trader.
							</p>

							<p>
								Nyní bych chtěl  spojit příjemné s užitečným a začít se programování věnovat naplno profesionálně.  Když se člověk živí svým koníčkem, dává do práce daleko více energie.  Rychle roste profesionalita i produktivita a spokojenost je pak na straně zaměstnance, zaměstnavatele i zákazníka.
							</p>

							<p>
								Nabyté zkušenosti z předchozích oborů bych chtěl zhodnotit a využít i v kariéře programátora. Díky více prosefím a pozicím v různých firmách jsem získal velký nadhled a dokážu vidět firmu a její procesy z více úhlů pohledu.
							</p>

							<p>
								V současné době se nejvíce věnuji Front-Endu webových stránek a aplikací, ale programování a algoritmizace mě baví všeobecně, takže do budoucna nevylučuji ani programování v oblasti Back-Endu případně nějakou formu datové analýzy.
							</p>
						</div>
					</Grid>
				</Container>
			</Section >

			<Section sub={true}>
				<Container>
					<h3 className="heading heading--header text-center">Potenciál</h3>
					<Grid col={3}>
						<Card title={"Silné stránky"}>
							<li className="card__item">analytické myšlení</li>
							<li className="card__item">hledání řešení</li>
							<li className="card__item">krizové situace</li>
							<li className="card__item">kreativita</li>
							<li className="card__item">flexibilita</li>
						</Card>

						<Card title={"Slabé stránky"}>
							<li className="card__item">angličtina</li>
							<li className="card__item">memorování</li>
							<li className="card__item">rutinní činosti</li>
						</Card>

						<Card title={"Soft Skills"}>
							<li className="card__item">dobré vztahy</li>
							<li className="card__item">vedení menšího týmu</li>
							<li className="card__item">komunikace</li>
							<li className="card__item">empatie</li>
						</Card>
					</Grid >
				</Container >
			</Section >

			<Section sub={true}>
				<Container>
					<h3 className="heading heading--header">Vzdělání</h3>
					<Grid col={2}>
						<p>Strojírenství</p>
						<p>Maturita - Programování a seřízování CNC strojů a robotů</p>
						<p>Marketing</p>
						<p>CIMA-A</p>
					</Grid>
				</Container >
			</Section >

			<Section sub={true}>
				<Container>
					<h3 className="heading heading--header">Zkušenosti v IT</h3>
					<Grid col={2}>
						<p>Středoškolské soutěže</p>
						<p>2. místo v krajském kole soutěže SOČ - Program pro evideci zakázek v C++</p>

						<p>Praxe POSKI Ostrava</p>
						<p>Kódování webu realitní kanceláře JKM Family v komplexním firemním systému</p>

						<p>Osobní projekt</p>
						<p>Web o fraktálech a fraktálové geometrii</p>

						<p>OSVČ</p>
						<p>Pár jednoduchých webů pro drobné podnikatele v rozsahu  5-20 stránek</p>
					</Grid>
				</Container>
			</Section >

			<Section sub={true}>
				<Container>
					<h3 className="heading heading--header">Zkušenosti v jiných oborech</h3>
					<Grid col={2}>
						<p>Reklama a marketing</p>
						<p>Marketingové analýzy, počítačová grafika, podnikání v reklamě - 8 let</p>

						<p>Strojírenství</p>
						<p>Vývojový konstruktér, automatizace výroby, programování CNC a robotů - 8 let</p>

						<p>Algoritmické obchodování</p>
						<p>Programování automatických obchodních systémů a obchodování na měnové burze - 6 let</p>
					</Grid>
				</Container>
			</Section >
		</Section >
	)
}

export default About;
