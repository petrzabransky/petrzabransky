import "../../../styles/container.scss";
import "./Hero.scss";

const Hero = () => {
	return (
		<section className="hero" id="#hero" >
			<div className="container">
				<h1 className="hero__title">#Jsem programátor</h1>
				<h2 className="hero__subtitle">a hledám práci</h2>
				<p className="hero__description">Programování bylo od malička mou největší vášní, které jsem se věnoval ve volném čase.</p>
				<p className="hero__description">Nyní bych se chtěl posunout a začít se programování věnovat naplno profesionálně.</p>
			</div>
		</section >
	)
}

export default Hero;
