import "./Header.scss";
import Nav from "../../component/nav/Nav"
import Container from "../../layout/container/Container";

const Header = () => {
	return (
		<header className="header">
			<Container>
				<Nav />
			</Container>
		</header>
	)
}

export default Header;