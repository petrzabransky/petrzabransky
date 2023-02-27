import './Layout.scss';
import Header from '../partial/header/Header';
import Footer from '../partial/footer/Footer';


interface Props {
	children: JSX.Element;
}

const Layout = ({ children }: Props) => {

	return (
		<>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</>
	)

}

export default Layout;