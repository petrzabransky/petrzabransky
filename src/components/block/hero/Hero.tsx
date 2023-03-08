import "./Hero.scss";
import Section from "../../layout/section/Section";
import Container from "../../layout/container/Container";

interface Props {
	id: string;
}
const Hero = ({ id }: Props) => {

	return (
		<Section otherStyle="hero" id={id} >
			<Container>
				<h1 className="hero__title">#Jsem programátor</h1>
				<h2 className="hero__subtitle">a hledám práci</h2>
			</Container>
		</Section >
	)
}

export default Hero;
