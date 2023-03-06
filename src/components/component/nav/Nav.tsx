import "./Nav.scss";
import hamburger from "../../../assets/images/ikony/hamburger.svg";
import close from "../../../assets/images/ikony/zavrit.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";


const Nav = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleHandler = () => {
		setIsActive(!isActive);
	}

	const breakDesktop = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--breakpoint-desktop"));
	const isDesktop = useMediaQuery({ minWidth: breakDesktop });
	console.log(isDesktop);

	return (
		<nav className="nav">
			<div className="nav__bar">
				<img onClick={toggleHandler} className="nav__hamburger nav__icon" src={isActive ? close : hamburger} alt="otevřít hlavní menu" />
				<ul className="nav__menu" style={{ display: isDesktop || isActive ? "flex" : "none" }}>
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
