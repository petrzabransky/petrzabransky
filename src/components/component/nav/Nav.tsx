import "./Nav.scss";
import hamburger from "../../../assets/images/ikony/hamburger.svg";
import close from "../../../assets/images/ikony/zavrit.svg";
import { useState } from "react";

const Nav = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleHandler = () => {
		setIsActive(!isActive);
	}

	return (
		<nav className="nav">
			<div className="nav__bar">
				<img onClick={toggleHandler} className="nav__hamburger nav__icon" src={isActive ? close : hamburger} alt="otevřít hlavní menu" />
				<ul className={isActive ? "nav__menu" : "nav__menu nav__menu--hide"}>
					<li className="nav__item"><a className="nav__link nav__link--active" href="#hero">úvod</a></li>
					<li className="nav__item"><a className="nav__link" href="#reference">reference</a></li>
					<li className="nav__item"><a className="nav__link" href="#technology">technologie</a></li>
					<li className="nav__item"><a className="nav__link" href="#about">o mě</a></li>
					<li className="nav__item"><a className="nav__link" href="#contact">kontakt</a></li>
				</ul>
			</div>
		</nav >
	)
}

export default Nav;
