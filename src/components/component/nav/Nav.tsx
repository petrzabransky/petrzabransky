import "./Nav.scss";

const Nav = () => {

	return (
		<nav className="nav">
			<div className="nav__bar container">
				<img className="nav__hamburger nav__icon" src={"./hamburger.svg"} alt="otevřít hlavní menu" />
				<img className="nav__close nav__icon d-none" src="./img/ikony/zavrit.svg" alt="zavřít hlavní menu" />
				<ul id="navigation" className="nav__menu">
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
