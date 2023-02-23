import './Nav.scss';

const Nav = () => {
	return (
		<nav className="nav">

			<img className="nav__hamburger nav__icon" src="../..//img/ikony/hamburger.svg" alt="otevřít hlavní menu" />
			<img className="nav__close nav__icon d-none" src="./img/ikony/zavrit.svg" alt="zavřít hlavní menu" />
			<ul id="navigation" className="nav__menu">
				<li className="nav__item"><a href="#" className="nav__link">úvod</a></li>
				<li className="nav__item"><a href="#" className="nav__link">reference</a></li>
				<li className="nav__item"><a href="#" className="nav__link">technologie</a></li>
				<li className="nav__item"><a href="#" className="nav__link">o mě</a></li>
				<li className="nav__item"><a href="#" className="nav__link">kontakt</a></li>
			</ul>

		</nav >
	)
}

export default Nav;
