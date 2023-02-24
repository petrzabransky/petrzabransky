import './Nav.scss';
import '../../../styles/layout.scss'

const Nav = () => {
	return (
		<nav className="nav">
			<div className="nav__bar container">
				<img className="nav__hamburger nav__icon" src={'./hamburger.svg'} alt="otevřít hlavní menu" />
				<img className="nav__close nav__icon d-none" src="./img/ikony/zavrit.svg" alt="zavřít hlavní menu" />
				<ul id="navigation" className="nav__menu">
					<li className="nav__item"><a href="#" className="nav__link">úvod</a></li>
					<li className="nav__item"><a href="#" className="nav__link">reference</a></li>
					<li className="nav__item"><a href="#" className="nav__link">technologie</a></li>
					<li className="nav__item"><a href="#" className="nav__link">o mě</a></li>
					<li className="nav__item"><a href="#" className="nav__link">kontakt</a></li>
				</ul>

			</div>
		</nav >
	)
}

export default Nav;
