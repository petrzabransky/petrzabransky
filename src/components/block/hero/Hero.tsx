import "../../../styles/container.scss";
import "./Hero.scss";

const Hero = () => {
	return (
		<section className="hero" id="#hero" >
			<div className="container">
				<h1 className="hero__title">#Jsem programátor</h1>
				<h2 className="hero__subtitle">a hledám práci</h2>
				<p className="hero__description">Programování bylo od malička mým největším komníčkem,</p>
				<p className="hero__description">kterému bych se teď chtěl začít věnovat naplno profesionálně</p>
			</div>
		</section >
	)
}

export default Hero;
