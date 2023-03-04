import "./Hero.scss";
import Container from "../../layout/container/Container";

interface Props {
	id: string;
}
const Hero = ({ id }: Props) => {

	return (
		<section className="hero" id={id} >
			<Container>
				<h1 className="hero__title">#Jsem programátor</h1>
				<h2 className="hero__subtitle">a hledám práci</h2>
				<p className="hero__description">Programování bylo od malička mým největším komníčkem,</p>
				<p className="hero__description">kterému bych se teď chtěl začít věnovat naplno profesionálně</p>
			</Container>
		</section >
	)
}

export default Hero;
