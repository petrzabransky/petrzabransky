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
					<Grid col={"1vs3"}>
						<div>
							<img src={petr} alt="Petr Zábranský portrét" />
						</div>

						<div>
							<p>
								Na začátku své kariéry jsem pracoval v oblasti počítačové grafiky, reklamy a marketingu. Nutkání hledat ve všem systém a logiku mě však přivedlo k techničtějšímu oboru do strojírenství, kde jsem se věnoval práci vývovojového konstruktéra a automatizaci výrobních procesů.
							</p>

							<p>
								Další posun byl, když mě zaujalo algoritmické obchodování na měnové burze a programování automatických obchodních systémů, kterému jsem se pak dalších několik let úspěšně věnoval jako Full time trader.
							</p>

							<p>
								I přes úspěšnou kariéru mě to však vždy nejvíce táhlo k programování aplikací a webů, kterému jsem se věnoval při práci jako koníčku. V posledních letech mě napadlo spojit příjemné s užitečným a začal jsem informatiku studovat.
							</p>

							<p>
								Studium a práce na vývoji webů mě natolik zaujala, že jsem se rozhodl najít si práci Junior programátora, kde bych se mohl pod zkušenějším vedením a ve společnosti stejně nadšených lidí dál odborně rozvíjet.
							</p>
						</div>
					</Grid>
				</Container>
			</Section >

			<Section sub={true}>
				<Container>
					<h3 className="heading heading--header text-center">Potenciál</h3>
					<Grid col={"3"}>
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
					<Grid col={"1vs3"}>
						<h4 className="heading heading--title">Strojírenství</h4>
						<p>Maturita - Programování a seřízování CNC strojů a robotů</p>
						<h4 className="heading heading--title">Marketing</h4>
						<p>CIMA-A</p>
					</Grid>
				</Container >
			</Section >

			<Section sub={true}>
				<Container>
					<h3 className="heading heading--header">Zkušenosti v IT</h3>
					<Grid col={"1vs3"}>
						<h4 className="heading heading--title">Středoškolské soutěže</h4>
						<p>2. místo v krajském kole soutěže SOČ - Program pro evidenci zakázek v C++</p>

						<h4 className="heading heading--title">Praxe POSKI Ostrava</h4>
						<p>Kódování a stylování webu pro realitní kancelář JKM Family</p>

						<h4 className="heading heading--title">Osobní projekt</h4>
						<p>Web o fraktálech a fraktálové geometrii</p>

						<h4 className="heading heading--title">OSVČ</h4>
						<p>Pár jednoduchých webů pro drobné podnikatele v rozsahu  5-20 stránek</p>
					</Grid>
				</Container>
			</Section >

			<Section sub={true}>
				<Container>
					<h3 className="heading heading--header">Zkušenosti v jiných oborech</h3>
					<Grid col={"1vs3"}>
						<h4 className="heading heading--title">Reklama a marketing</h4>
						<p>Marketingové analýzy, počítačová grafika, podnikání v reklamě - 8 let</p>

						<h4 className="heading heading--title">Strojírenství</h4>
						<p>Vývojový konstruktér, automatizace výroby, programování CNC a robotů - 8 let</p>

						<h4 className="heading heading--title">Algoritmické obchodování</h4>
						<p>Programování automatických obchodních systémů a obchodování na měnové burze - 6 let</p>
					</Grid>
				</Container>
			</Section >
		</Section >
	)
}

export default About;
