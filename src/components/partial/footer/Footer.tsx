import "./Footer.scss";
import Container from "../../layout/container/Container";
import Grid from "../../layout/grid/Grid";

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Grid>
					<>
						<div>
							<a href="#hero" className="footer__link">Petr Zábranský</a>
						</div>

						<ul className="footer__menu">
							<li className="footer__item"><a className="footer__link" href="#hero">úvod</a></li>
							<li className="footer__item"><a className="footer__link" href="#reference">reference</a></li>
							<li className="footer__item"><a className="footer__link" href="#technology">technologie</a></li>
							<li className="footer__item"><a className="footer__link" href="#about">o mě</a></li>
							<li className="footer__item"><a className="footer__link" href="#contact">kontakt</a></li>
						</ul>

						<ul className="footer__menu">
							<li className="footer__contact">+420 736 643 377</li>
							<li className="footer__contact">info@petrzabransky.cz</li>
							<li className="footer__contact">www.github.com/petrzabransky</li>
						</ul>
					</>
				</Grid>
			</Container>
		</footer >
	)
}

export default Footer;
