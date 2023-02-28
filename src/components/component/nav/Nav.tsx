import "./Nav.scss";
import "../../../styles/container.scss"
import { Link } from "react-scroll";

const Nav = () => {
	const delay: number = 0;
	const duration: number = 0;
	const offset: number = 0;

	return (
		<nav className="nav">
			<div className="nav__bar container">
				<img className="nav__hamburger nav__icon" src={"./hamburger.svg"} alt="otevřít hlavní menu" />
				<img className="nav__close nav__icon d-none" src="./img/ikony/zavrit.svg" alt="zavřít hlavní menu" />
				<ul id="navigation" className="nav__menu">
					<li><Link to="hero" spy={true} smooth={true} delay={delay} duration={duration} offset={offset} >úvod</Link></li>
					<li><Link to="reference" spy={true} smooth={true} delay={delay} duration={duration} offset={offset} >reference</Link></li>
					<li><Link to="technology" spy={true} smooth={true} delay={delay} duration={duration} offset={offset} >technologie</Link></li>
					<li><Link to="about" spy={true} smooth={true} delay={delay} duration={duration} offset={offset} >o mě</Link></li>
					<li><Link to="contact" spy={true} smooth={true} delay={delay} duration={duration} offset={offset} >kontakt</Link></li>
				</ul>
			</div>
		</nav >
	)
}

export default Nav;
